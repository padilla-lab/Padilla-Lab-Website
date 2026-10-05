---
layout: page
title: news
permalink: /news/
nav: true
nav_order: 4
description: What's happening in the lab.
---

<div class="lab-news" markdown="0">
  <div id="news-status" class="news-status">Loading&hellip;</div>
  <div id="news-list"></div>
</div>

{% raw %}
<script>
(function () {
  var SHEET_CSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQF4qfLMqpQY5whPAyrfEzTols85wx1sDLjIvcaaBdrRjzd1NoE3DSqWnJxQbvqFcktnUl_fBMZDvNI/pub?output=csv";

  var listEl = document.getElementById("news-list");
  var statusEl = document.getElementById("news-status");

  /* Minimal CSV parser: handles quoted fields containing commas,
     escaped quotes ("") and embedded newlines. */
  function parseCSV(text) {
    var rows = [], row = [], field = "", inQuotes = false, i = 0;
    text = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    while (i < text.length) {
      var c = text.charAt(i);
      if (inQuotes) {
        if (c === '"') {
          if (text.charAt(i + 1) === '"') { field += '"'; i += 2; continue; }
          inQuotes = false; i++; continue;
        }
        field += c; i++; continue;
      }
      if (c === '"') { inQuotes = true; i++; continue; }
      if (c === ",") { row.push(field); field = ""; i++; continue; }
      if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; i++; continue; }
      field += c; i++;
    }
    if (field.length || row.length) { row.push(field); rows.push(row); }
    return rows;
  }

  /* Find a column by header name: exact, then starts-with, then contains. */
  function colIndex(headers, name) {
    var t = name.toLowerCase().trim(), i;
    for (i = 0; i < headers.length; i++) {
      if (headers[i].toLowerCase().trim() === t) return i;
    }
    for (i = 0; i < headers.length; i++) {
      if (headers[i].toLowerCase().trim().indexOf(t) === 0) return i;
    }
    for (i = 0; i < headers.length; i++) {
      if (headers[i].toLowerCase().trim().indexOf(t) > -1) return i;
    }
    return -1;
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function cell(row, idx) {
    return idx > -1 ? String(row[idx] == null ? "" : row[idx]).trim() : "";
  }

  function fmtDate(raw) {
    if (!raw) return "";
    var d = new Date(raw);
    if (isNaN(d.getTime())) return raw;
    return d.toLocaleDateString(undefined, { year: "numeric", month: "long" });
  }

  fetch(SHEET_CSV)
    .then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.text();
    })
    .then(function (text) {
      var rows = parseCSV(text).filter(function (r) {
        return r.join("").trim() !== "";
      });
      if (!rows.length) throw new Error("sheet is empty");

      var headers = rows.shift();
      var iDate = colIndex(headers, "date");
      var iHead = colIndex(headers, "headline");
      var iBody = colIndex(headers, "body");
      var iLink = colIndex(headers, "link");
      var iImg = colIndex(headers, "image");
      var iOK = colIndex(headers, "approved");

      /* Only show approved rows. If there's no Approved column yet, show all. */
      var items = rows.filter(function (r) {
        if (iOK === -1) return true;
        return cell(r, iOK).toLowerCase().indexOf("yes") === 0;
      });

      /* Newest first. */
      items.sort(function (a, b) {
        var da = Date.parse(cell(a, iDate)), db = Date.parse(cell(b, iDate));
        if (isNaN(da) && isNaN(db)) return 0;
        if (isNaN(da)) return 1;
        if (isNaN(db)) return -1;
        return db - da;
      });

      if (!items.length) {
        statusEl.textContent = "No news yet \u2014 check back soon.";
        return;
      }

      listEl.innerHTML = items.map(function (r) {
        var img = cell(r, iImg), link = cell(r, iLink);
        var out = ['<article class="news-card">'];
        if (img) {
          out.push('<div class="news-thumb"><img src="' + esc(img) + '" alt="" loading="lazy"></div>');
        }
        out.push('<div class="news-body">');
        if (cell(r, iDate)) out.push('<div class="news-date">' + esc(fmtDate(cell(r, iDate))) + '</div>');
        if (cell(r, iHead)) out.push('<h3 class="news-title">' + esc(cell(r, iHead)) + '</h3>');
        if (cell(r, iBody)) out.push('<p class="news-text">' + esc(cell(r, iBody)).replace(/\n/g, "<br>") + '</p>');
        if (link) out.push('<a class="news-link" href="' + esc(link) + '" target="_blank" rel="noopener">Read more &rarr;</a>');
        out.push('</div></article>');
        return out.join("");
      }).join("");

      statusEl.style.display = "none";
    })
    .catch(function (e) {
      statusEl.textContent = "Couldn't load the news feed right now.";
      if (window.console) console.error("News feed error:", e);
    });
})();
</script>
{% endraw %}

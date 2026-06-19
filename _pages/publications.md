---
layout: page
permalink: /publications/
title: publications
description: For a complete and current list, see <a href='https://scholar.google.com/citations?user=Rjdpb_wAAAAJ'>Google Scholar</a>.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

{% include bib_search.liquid %}

<div class="publications">

<h2 class="bibliography-section-header">First &amp; Co-First Author</h2>
{% bibliography --query @*[author_role=first]* %}

<h2 class="bibliography-section-header">Co-Author</h2>
{% bibliography --query @*[author_role=co]* %}

</div>

// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Writing the rules for how to rationally design RNA nanomedicines.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "For a complete and current list, see Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-team",
          title: "team",
          description: "The Padilla Lab opens in September 2026 — founding member recruitment is underway.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-join",
          title: "join",
          description: "Open positions in the Padilla Lab and how to apply.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/join/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-the-padilla-lab-opens-at-stanford-university-in-september-2026-lab-website-is-live",
          title: 'The Padilla Lab opens at Stanford University in September 2026. Lab website is...',
          description: "",
          section: "News",},{id: "news-we-are-recruiting-founding-ph-d-students-and-postdocs-see-how-to-join",
          title: 'We are recruiting founding Ph.D. students and postdocs. See how to join.',
          description: "",
          section: "News",},{id: "projects-ionic-liquid-nanoparticle-hybrid-materials",
          title: 'Ionic liquid–nanoparticle hybrid materials',
          description: "Mucoadhesive delivery systems for oral disease and barrier tissues",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ionic_liquids/";
            },},{id: "projects-ionizable-lipid-design-amp-synthesis",
          title: 'Ionizable lipid design &amp;amp; synthesis',
          description: "New lipid chemistries that control potency, biodegradability, and endosomal escape",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ionizable_lipids/";
            },},{id: "projects-lnp-delivery-of-mrna-amp-gene-editors",
          title: 'LNP delivery of mRNA &amp;amp; gene editors',
          description: "Nanoparticle platforms for protein replacement, CRISPR-based editing, and cell engineering",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lnp_gene_editing/";
            },},{id: "projects-targeted-delivery-via-bioconjugation",
          title: 'Targeted delivery via bioconjugation',
          description: "Click chemistry approaches for directing nanoparticles to specific cells and tissues",
          section: "Projects",handler: () => {
              window.location.href = "/projects/targeted_delivery/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%70%61%64@%73%74%61%6E%66%6F%72%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Rjdpb_wAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-3607-790X", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/Marshall-Padilla", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/padilla-lab", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

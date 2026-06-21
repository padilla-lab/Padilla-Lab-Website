---
layout: page
title: research
permalink: /research/
description: Writing the rules for how to rationally design RNA nanomedicines.
nav: true
nav_order: 1
---

<!-- _pages/projects.md  (Research page) -->

The central bottleneck in modern medicine is not designing a drug — it is delivering that drug safely and precisely to the right place in the body. Our lab builds the chemistry and the design rules to solve that problem for nucleic acid medicines like mRNA and gene editors. We synthesize new materials, engineer nanoparticle delivery systems, and pair them with high-resolution analytical tools and machine learning to understand *why* a given particle goes where it goes — turning nanoparticle design from trial-and-error into rational engineering.

Our program spans three connected goals, unified by a common toolbox of synthesis, biophysics, and data-driven analysis.

<div class="row justify-content-center mt-4 mb-2">
  <div class="col-sm-10">
    {% include figure.liquid path="assets/img/research/research_overview.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Overview of the Padilla Lab research program: a toolbox of small molecules, nanoparticles, polymers, ionic liquids, and combinatorial libraries feeds into integrated precision nanomedicine, high-resolution analytics, and mechanistic insight, applied to cancer, infectious disease, and genetic disorders." %}
  </div>
</div>

---

## 1 · Design rules for cell-specific gene editing

Lipid nanoparticles (LNPs) are the delivery vehicles that made mRNA vaccines possible, but they have a major limitation: most of them end up in the liver. Gene editing demands far greater precision — reaching not just the right *organ* but the right *cell type*, because editing the wrong cells can cause lasting side effects. The field has tried to solve this by brute-force screening of millions of formulations, but that approach hasn't delivered the specificity the clinic needs, largely because the measurements used to characterize particles are too coarse to reveal what actually drives where they go.

We take a different approach. By combining rational chemical synthesis, **high-resolution biophysical characterization** of nanoparticle structure, robust in vivo screening, and **interpretable machine learning**, we build structure–activity relationships that explain *which* particle features matter and *why*. The goal is a predictive design framework that lets us engineer LNPs for specific cell populations — and apply it to gene-editing therapies for diseases like cystic fibrosis, cancer, and sickle cell anemia.

<div class="row justify-content-center mt-2 mb-4">
  <div class="col-sm-11">
    {% include figure.liquid path="assets/img/research/research_aim1_sar.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Pipeline for cell-specific LNP gene editing: library generation feeds high-resolution analyses and in vivo screening, which feed tree-based machine learning and feature-importance analysis, yielding mechanistic insight and gene-editing applications in basal cells (CFTR), cancer cells (SOX2), and hematopoietic stem cells (beta-globin)." %}
  </div>
</div>

---

## 2 · Plug-and-play combinatorial immunotherapy

Immunotherapies have transformed cancer treatment, but most patients still don't achieve durable responses — tumors are heterogeneous, immunosuppressive, and prone to resistance. Combining immunotherapies can overcome these barriers and reveal entirely new biology, yet today's combinations are limited almost entirely to antibody drugs, because there is no flexible platform for co-delivering other kinds of therapeutics — nucleic acids, proteins, antigens, and small molecules — to the right immune cells.

We are building that platform: a modular, **"plug-and-play" nanoparticle system** that pairs diverse immunotherapeutic cargoes with targeted delivery to specific immune and tumor cells. By systematically testing combinations across realistic cancer models and reading out the results with single-cell and systems-level analyses, we aim to discover potent new co-therapies — and uncover new mechanisms of the cancer–immunity cycle along the way.

<div class="row justify-content-center mt-2 mb-4">
  <div class="col-sm-11">
    {% include figure.liquid path="assets/img/research/research_aim2_immunotherapy.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Plug-and-play combinatorial immunotherapy platform: a library of payloads, CAR targets, and F(ab')2 targeting fragments is assembled into targeted nanoparticles, tested combinatorially across PDX, syngeneic, and spheroid models, and analyzed by scRNA-seq, flow cytometry, and cytokine assays to reveal new biological mechanisms." %}
  </div>
</div>

---

## 3 · Nanoparticle–ionic liquid patches for oral disease

Billions of people suffer from oral diseases, yet the mouth is a remarkably hard place to deliver medicine: saliva washes drugs away, mucus and biofilms block penetration, and most effective drugs can't cross into cells on their own. Conventional rinses and gels rarely maintain therapeutic levels where they're needed, and nanoparticle therapies usually require systemic injection that poorly targets the oral cavity.

We are developing a **first-of-its-kind hybrid material** that merges two complementary technologies: **ionic liquids**, tunable salts that solubilize stubborn drugs and help them penetrate biological barriers, and **therapeutic nanoparticles**, which protect their cargo and carry it into cells. Embedded together into mucoadhesive patches that stick inside the mouth, they enable prolonged, localized treatment at the disease site — an approach designed to be effective, injection-free, and deployable at global scale for oral infections, inflammation, and cancers.

<div class="row justify-content-center mt-2 mb-4">
  <div class="col-sm-11">
    {% include figure.liquid path="assets/img/research/research_aim3_ionicliquid.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Nanoparticle-ionic liquid patch platform: a combinatorial library of ionic liquid cations and anions is combined with a nanoparticle-drug library and screened by automated liquid handling for stability, permeability, efficacy, and safety, then assembled into mucoadhesive patches for skin, mouth, and GI disease applications." %}
  </div>
</div>

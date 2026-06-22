---
layout: page
title: research
permalink: /research/
description: Writing the rules for how to rationally design RNA nanomedicines.
nav: true
nav_order: 1
---

<!-- _pages/projects.md  (Research page) -->

The central bottleneck in modern medicine is not designing a drug — it is delivering that drug safely and precisely to the right place in the body. Our lab builds the chemistry and the design rules to solve that problem for nucleic acid medicines like mRNA and gene editors. We synthesize new materials, engineer nanoparticle delivery systems, and pair them with high-resolution analytical tools to understand *why* a given particle goes where it goes, turning nanoparticle design from trial-and-error into rational engineering.

Our program spans three connected goals, unified by a common toolbox of synthesis, biophysics, and data-driven analysis.

<div class="row justify-content-center mt-4 mb-2">
  <div class="col-sm-10">
    {% include figure.liquid path="assets/img/research/research_overview.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Overview of the Padilla Lab research program: a toolbox of small molecules, nanoparticles, polymers, ionic liquids, and combinatorial libraries feeds into integrated precision nanomedicine, high-resolution analytics, and mechanistic insight, applied to cancer, infectious disease, and genetic disorders." %}
  </div>
</div>

---

## 1 · Design rules for cell-specific gene editing

Lipid nanoparticles (LNPs) are the delivery vehicles that made mRNA vaccines possible, but they have a major limitation: most of them end up in the liver. Gene editing demands far greater precision — reaching not just the right *organ* but the right *cell type*, because editing the wrong cells can cause lasting side effects. The field has tried to solve this by brute-force screening of millions of formulations, but that approach hasn't delivered the specificity the clinic needs, largely because the measurements used to characterize particles are too coarse to reveal what actually drives where they go.

We take a different approach. By combining rational chemical synthesis, high-resolution biophysical characterization of nanoparticle structure, robust in vivo screening, and interpretable machine learning, we build structure–activity relationships that explain *which* particle features matter and *why*. The goal is a predictive design framework that lets us engineer LNPs for specific cell populations, and apply it to gene-editing and other therapeutic modalities.

<div class="row justify-content-center mt-2 mb-4">
  <div class="col-sm-11">
    {% include figure.liquid path="assets/img/research/research_aim1_sar.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Pipeline for cell-specific LNP gene editing: library generation feeds high-resolution analyses and in vivo screening, which feed tree-based machine learning and feature-importance analysis, yielding mechanistic insight and example applications, including gene-editing applications in basal cells (CFTR), cancer cells (SOX2), and hematopoietic stem cells (beta-globin)." %}
  </div>
</div>

---

## 2 · Plug-and-play combinatorial immunotherapy

Engineered immune cells, especially chimeric antigen receptor (CAR) T cells, have produced remarkable cures in blood cancers, but they remain difficult to manufacture, hard to extend to solid tumors, and limited as single agents when faced with the suppressive, heterogeneous tumor microenvironment. Two ideas can change that: generating CAR cells directly inside the body rather than in a manufacturing facility, and combining CAR therapy with other immunotherapies to overcome resistance. But realizing them requires a way to deliver CAR-encoding mRNA, alongside other therapeutic cargoes, to specific immune cells in vivo, which today's antibody-based combinations cannot do.

We are building that capability: a modular, "plug-and-play" nanoparticle platform that delivers CAR mRNA to targeted immune cells to engineer them in situ, and pairs CAR generation with complementary modalities, including cytokines, checkpoint inhibitors, bispecific engagers, STING agonists, and more. By systematically testing these combinations across realistic cancer models and reading them out with single-cell and systems-level analyses, we aim to develop potent new CAR-based combination therapies and uncover the mechanisms that make them work.

<div class="row justify-content-center mt-2 mb-4">
  <div class="col-sm-11">
    {% include figure.liquid path="assets/img/research/research_aim2_immunotherapy.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Plug-and-play combinatorial immunotherapy platform: a library of payloads, CAR targets, and F(ab')2 targeting fragments is assembled into targeted nanoparticles, tested combinatorially across PDX, syngeneic, and spheroid models, and analyzed by scRNA-seq, flow cytometry, and cytokine assays to reveal new biological mechanisms." %}
  </div>
</div>

---

## 3 · Ionic Liquid–Nanoparticle Materials for Crossing Physical Barriers

Some of the most powerful medicines never reach their target because the body is full of physical barriers, such as the skin, the mucosal linings of the mouth and gut, and the blood–brain barrier, that evolved specifically to keep foreign material out. These same barriers block drugs: saliva and mucus wash compounds away, biofilms and dense tissue prevent penetration, and most therapeutics, especially large ones like nucleic acids and proteins, cannot cross cell membranes on their own. Conventional formulations rarely maintain therapeutic levels at the target, and nanoparticle therapies usually require systemic injection that distributes poorly and indiscriminately.

We are developing a hybrid material that merges two complementary technologies to cross these barriers locally: ionic liquids, tunable salts that solubilize stubborn drugs and transiently loosen biological barriers, and therapeutic nanoparticles, which protect their cargo and ferry it into cells. By screening large libraries of ionic-liquid/nanoparticle combinations and assembling the best into adhesive patches, we aim to enable prolonged, localized, injection-free delivery across multiple barrier tissues, starting with the skin and oral mucosa, and extending toward the hardest target of all, the blood–brain barrier, for applications spanning infection, inflammation, cancer, and neurological disease.

<div class="row justify-content-center mt-2 mb-4">
  <div class="col-sm-11">
    {% include figure.liquid path="assets/img/research/research_aim3_ionicliquid.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Nanoparticle-ionic liquid patch platform: a combinatorial library of ionic liquid cations and anions is combined with a nanoparticle-drug library and screened by automated liquid handling for stability, permeability, efficacy, and safety, then assembled into mucoadhesive patches for skin, mouth, brain, and GI disease applications." %}
  </div>
</div>

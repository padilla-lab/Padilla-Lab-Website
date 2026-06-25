---
layout: page
title: research
permalink: /research/
description:
nav: true
nav_order: 1
---

<!-- _pages/projects.md  (Research page) -->
The central bottleneck in modern medicine is not designing a drug — it is delivering that drug safely and precisely to the right place in the body. Our lab works to replace trial-and-error with rational design across the full arc of nucleic acid medicine: we synthesize new materials, engineer nanoparticle delivery systems, and pair them with high-resolution analytics and machine learning to understand why a given particle behaves the way it does. The unifying goal is a set of design rules that make delivery predictable rather than empirical.

That philosophy runs through three connected research thrusts — each applying rational, data-driven design to a different delivery challenge.

<div class="row justify-content-center mt-4 mb-2">
  <div class="col-sm-10">
    {% include figure.liquid path="assets/img/research/research_overview.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Overview of the Padilla Lab research program: a toolbox of small molecules, nanoparticles, polymers, ionic liquids, and combinatorial libraries feeds into integrated precision nanomedicine, high-resolution analytics, and mechanistic insight, applied to cancer, infectious disease, and genetic disorders." %}
  </div>
</div>

---

## 1 · Molecular and Supramolecular Determinants of Cell-Specific Delivery

Lipid nanoparticles (LNPs) are the delivery vehicles that made mRNA vaccines possible, but they have a major limitation: most of them end up in the liver. Gene editing demands far greater precision — reaching not just the right *organ* but the right *cell type*, because editing the wrong cells can cause lasting side effects. The field has tried to solve this by brute-force screening of millions of formulations, but that approach hasn't delivered the specificity the clinic needs, largely because the measurements used to characterize particles are too coarse to reveal what actually drives where they go.

We are building that capability: a modular, "plug-and-play" nanoparticle platform that delivers CAR mRNA to targeted immune cells to engineer them in situ, and pairs CAR generation with complementary modalities — cytokines, checkpoint inhibitors, bispecific engagers, STING agonists, and more. Rather than testing combinations by intuition, we screen them systematically and read them out with single-cell and systems-level analyses, turning combination immunotherapy into a rational, data-driven search for the therapies, and mechanisms, that work.

<div class="row justify-content-center mt-2 mb-4">
  <div class="col-sm-11">
    {% include figure.liquid path="assets/img/research/research_aim1_sar.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Pipeline for cell-specific LNP gene editing: library generation feeds high-resolution analyses and in vivo screening, which feed tree-based machine learning and feature-importance analysis, yielding mechanistic insight and example applications, including gene-editing applications in basal cells (CFTR), cancer cells (SOX2), and hematopoietic stem cells (beta-globin)." %}
  </div>
</div>

---

## 2 · Plug-and-Play In Vivo CAR Therapy for Solid Tumors

Engineered immune cells, especially chimeric antigen receptor (CAR) T cells, have produced remarkable cures in blood cancers, but they remain difficult to manufacture, hard to extend to solid tumors, and limited as single agents when faced with the suppressive, heterogeneous tumor microenvironment. Two ideas can change that: generating CAR cells directly inside the body rather than in a manufacturing facility, and combining CAR therapy with other immunotherapies to overcome resistance. But realizing them requires a way to deliver CAR-encoding mRNA, alongside other therapeutic cargoes, to specific immune cells in vivo, which today's antibody-based combinations cannot do.

We are building that capability: a modular, "plug-and-play" nanoparticle platform that delivers CAR mRNA to targeted immune cells to engineer them in situ, and pairs CAR generation with complementary modalities, including cytokines, checkpoint inhibitors, bispecific engagers, STING agonists, and more. By systematically testing these combinations across realistic cancer models and reading them out with single-cell and systems-level analyses, we aim to develop potent new CAR-based combination therapies and uncover the mechanisms that make them work.

<div class="row justify-content-center mt-2 mb-4">
  <div class="col-sm-11">
    {% include figure.liquid path="assets/img/research/research_aim2_immunotherapy.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Plug-and-play combinatorial immunotherapy platform: a library of payloads, CAR targets, and F(ab')2 targeting fragments is assembled into targeted nanoparticles, tested combinatorially across PDX, syngeneic, and spheroid models, and analyzed by scRNA-seq, flow cytometry, and cytokine assays to reveal new biological mechanisms." %}
  </div>
</div>

---

## 3 · Ionic Liquid–Nanoparticle Materials for Crossing Biological Barriers

Some of the most powerful medicines never reach their target because the body is full of physical barriers, such as the skin, the mucosal linings of the mouth and gut, and the blood–brain barrier, that evolved specifically to keep foreign material out. These same barriers block drugs: saliva and mucus wash compounds away, biofilms and dense tissue prevent penetration, and most therapeutics, especially large ones like nucleic acids and proteins, cannot cross cell membranes on their own. Conventional formulations rarely maintain therapeutic levels at the target, and nanoparticle therapies usually require systemic injection that distributes poorly and indiscriminately.

We are developing a hybrid material that merges two complementary technologies to cross these barriers locally: ionic liquids, which are tunable salts that solubilize stubborn drugs and transiently loosen biological barriers, and therapeutic nanoparticles, which protect their cargo and ferry it into cells. Instead of formulating one barrier at a time, we screen large libraries of ionic-liquid/nanoparticle combinations to learn which pairings cross which tissues, then assemble the best into adhesive patches for prolonged, localized, injection-free delivery — starting with the skin and oral mucosa, and extending toward the hardest target of all, the blood–brain barrier.

<div class="row justify-content-center mt-2 mb-4">
  <div class="col-sm-11">
    {% include figure.liquid path="assets/img/research/research_aim3_ionicliquid.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Nanoparticle-ionic liquid patch platform: a combinatorial library of ionic liquid cations and anions is combined with a nanoparticle-drug library and screened by automated liquid handling for stability, permeability, efficacy, and safety, then assembled into mucoadhesive patches for skin, mouth, brain, and GI disease applications." %}
  </div>
</div>

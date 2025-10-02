---
title: "High Performance Computing Research Project"
description: "Using NLP and data analysis to uncover what makes a highly-rated textbook"
tags: [
    {
        "name": "Spacy",
        "color": "primary"
    },
    {
        "name": "Data Analysis",
        "color": "secondary"
    }
]
order: 1
---
<a href="/project-pdfs/ResearchReport.pdf" target="_blank">View Report</a>

# Text Analysis: What Makes a Great Textbook?

As part of a collaborative research project, I explored how **data science and machine learning techniques** can be applied to identify what textual features distinguish highly rated textbooks. Our study, *“Text Analysis: What Makes a Great Textbook”* (2025), combined **natural language processing (NLP), high-performance computing (HPC), and statistical analysis** to uncover patterns across more than 1,300 academic textbooks.

---

## Research Motivation

Textbooks are a cornerstone of higher education, yet their quality varies widely. Faculty often rate textbooks based on clarity, rigor, and usefulness—but can these subjective qualities be detected directly from the text itself?

We set out to answer:

* What linguistic features differentiate textbooks across disciplines?
* Do measures like **readability, lexical diversity, and word length** influence a textbook’s rating?
* How can **machine learning pipelines** be designed to handle massive collections of unstructured text at scale?

---

## Data Collection at Scale

We sourced over **1,600 openly licensed textbooks** from the University of Minnesota’s *Open Textbook Library*. To build a **structured ledger**, we engineered a two-stage pipeline:

1. **API Crawling & Scraping** – Extracted metadata (title, author, subject, ratings) and content links using Python’s `requests`, `xmltodict`, and `BeautifulSoup`.
2. **Content Acquisition** – Parsed PDFs into raw text with `pypdf`, applying quality control filters to remove incomplete or invalid files.

After preprocessing, we retained **1,329 high-quality textbooks** with ratings and full text, ensuring a robust foundation for NLP analysis.

---

## Natural Language Processing Pipeline

We engineered an NLP workflow in **Python (SpaCy)** to compute linguistic features for each textbook:

* **Readability (Flesch Reading Ease)** – Quantifies text complexity based on sentence length and syllable count.
* **Lexical Diversity** – Measures richness of vocabulary (unique words ÷ total words).
* **Average Word Length** – A proxy for technical density.

This pipeline processed millions of sentences. To handle the computational scale, we deployed scripts on the **Markov HPC cluster** (32 cores, 40GB RAM), reducing runtime from ~20 hours on a laptop to under **50 minutes** on the cluster.

---

## Data Analysis & Visualization

Using **R (ggplot2, tidyverse)** and Python, we conducted exploratory data analysis:

* **Discipline Differences**:

  * *Medicine & Health Sciences* consistently ranked as the most complex across readability, vocabulary richness, and word length.
  * *Arts & Literature* and *Science & Mathematics* tended to have simpler prose.

* **Correlations**:

  * Readability and lexical diversity showed only weak correlation.
  * Word length was a stronger predictor of readability—longer words reduced readability significantly.

* **Ratings vs. Features**:
  Interestingly, we found **no direct correlation** between linguistic difficulty and textbook ratings. Most faculty ratings clustered around 4–4.5 stars, regardless of readability or complexity.

---

## Challenges & Improvements

One challenge was handling **equation-heavy STEM texts**, which skewed readability scores into negative values. By requiring at least three alphabetic words per sentence, we corrected these distortions.

For future research, we suggested:

* Using additional metrics like the **Gunning Fog Index**.
* Applying **sentiment analysis** to detect tone.
* Expanding the dataset with **continuous rating scales** for richer correlation analysis.

---

## Key Takeaways

This project highlighted several core lessons for applied data science:

* **End-to-End Pipelines** – From web scraping to HPC computation, integrating multiple technologies was crucial.
* **Domain-Aware NLP** – Standard metrics can misfire on technical texts; preprocessing must adapt to context.
* **Data ≠ Ratings** – Faculty ratings were not strongly tied to textual complexity, reminding us that educational value is multidimensional.

---

## Why This Matters

Beyond the research question itself, this project demonstrates how **data science and ML engineering** skills can be applied in unconventional domains. It required:

* **Big data handling** (1,600+ PDFs, millions of sentences).
* **Scalable computing** (parallel NLP processing on HPC).
* **Statistical rigor** (hypothesis testing, p-values for feature differences).
* **Visualization & storytelling** (clear communication of results).
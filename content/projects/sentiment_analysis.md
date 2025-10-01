---
title: "Sentiment Analysis using Hidden Markov Models"
description: "Using Hidden Markov Models to predict sentiment for movie reviews"
tags: [
    {
        "name": "SciKit-Learn",
        "color": "primary"
    },
    {
        "name": "Model Development",
        "color": "secondary"
    }
]
---

<a href="/project-pdfs/SentimentAnalysis.pdf" target="_blank">View Report</a>

---

# Sentiment Analysis for Movie Reviews using Hidden Markov Models

In this project, I explored the use of a **Hidden Markov Model (HMM)** for sentiment analysis of movie reviews, applying a probabilistic, sequence-based approach to classify reviews from the IMDB dataset.

---

## Why Hidden Markov Models?

Language is sequential by nature. The meaning of a word often depends on the words that come before it. HMMs provide a probabilistic framework for modeling sequences where the **true state (sentiment)** is hidden, but the **observations (words)** are visible.

Key steps included:

* **Emission probabilities:** Estimating the probability of a word given a sentiment using the **AFINN lexicon** (a dictionary of words scored by sentiment strength) and the **softmax function** to build valid probability distributions.
* **Transition probabilities:** Capturing how sentiment flows across a review—for example, shifting from positive to negative expressions.
* **Decoding:** Using the **Viterbi algorithm** to infer the most likely sequence of hidden sentiments that generated a review.

---

## Challenges and Engineering Solutions

* **Data preprocessing:** Raw text contained HTML tags, numbers, and misspellings. Regex cleaning and lexicon mapping were essential for constructing usable probability matrices.
* **Vocabulary size:** The dataset had ~428,000 unique tokens. I reduced complexity by focusing on sentiment-bearing words.
* **Model limitations:** HMMs assume each observation depends only on the current hidden state (output independence). This fails to capture nuanced expressions like *“not great”*.

---

## Results and Comparison to State-of-the-Art

While transformer-based models like **BERT** achieve ~90% accuracy on IMDB sentiment analysis, my HMM approach achieved:

* **Accuracy:** ~49% (a 7% improvement over the baseline `hmmlearn` implementation).
* **F1-score:** 0.55 vs. 0.48 for the baseline.
* **Precision/Recall:** Improved balance in detecting both positive and negative reviews.

The key improvement came from **custom emission probability calculations** using softmax-based feature vectors rather than relying on default implementations.

---

## What I Learned

Although HMMs cannot compete with modern neural architectures in sentiment analysis, this project highlighted important ML engineering lessons:

* How **domain-specific lexicons** and feature engineering can improve classical models.
* The trade-offs between **simplicity and expressiveness** in model choice.

---

**Tech Stack:** `hmmlearn`, NLP Pipelines (Spacy), AFINN sentiment lexicon.
**Dataset:** IMDB Movie Reviews (50,000 labeled reviews).

---

This project taught me to:

* Build and evaluate **probabilistic models** from scratch.
* Engineer **custom probability matrices** for real-world text data.
* Critically compare classical approaches with **state-of-the-art deep learning models**.

---
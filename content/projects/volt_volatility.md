---
title: "Volt Volatility Financial Newsletter"
description: "An automated financial newsletter facilitated by AI"
tags: [
    {
        "name": "AI Engineering",
        "color": "primary"
    },
    {
        "name": "SWE",
        "color": "secondary"
    }
]
---
<a href="https://voltvolatility.com" target="_blank">View Project</a>

# Building VOLT: An AI-Powered Financial Newsletter on Market Volatility

Market volatility plays a critical role in shaping trading strategies, portfolio risk, and investor sentiment. Yet, keeping track of volatility drivers across earnings reports, macroeconomic events, and derivative markets is time-consuming and fragmented. To address this, I built **VOLT**, an automated weekly newsletter that leverages **data engineering, and machine learning workflows** to deliver timely insights on volatility to active market participants.

## Problem & Motivation

Traders and investors often rely on earnings calendars, implied volatility data, and macroeconomic indicators to gauge market risk. The challenge is not only aggregating these signals but also transforming them into actionable insights. VOLT’s goal is to automate this process: **collect data, analyze volatility trends, and deliver an AI-curated newsletter every week.**

## System Architecture

* **Data Collection:**

  * Python scripts fetch financial data from APIs (earnings calendars, options volatility, index performance).
  * Data preprocessing includes filtering US stocks, indexing symbols in SPY & QQQ, and computing volatility metrics.

* **Data Engineering & Storage:**

  * Data is stored in a **PostgreSQL database (Supabase)**, ensuring persistence and structured queries.

* **Machine Learning & AI:**

  * Collected data is fed into an **LLM Model**, which will summarize into a financial tone.
  * Fine-tuned prompting ensures outputs are consistent and aligned with a professional financial tone.

* **Automation & Deployment:**

  * The entire pipeline runs on an **AWS EC2 instance**, scheduled to execute every Sunday.
  * **Flask + Vercel frontend** manages subscriptions and email delivery.

## Challenges Solved

* **Data Reliability:** Designed retry logic and asynchronous API calls to handle timeouts and ensure data completeness.
* **AI Hallucination Control:** Built a structured summarization framework that grounds AI outputs in verified data.
* **Scalability:** Optimized scripts to run peak computations (~7 hours of processing) efficiently in a cloud environment.

## Impact

* Fully automated: no manual intervention required.
* Timely: newsletter delivered every Sunday evening before Asian markets open.
* Actionable: curated volatility watchlists and summaries enable subscribers to anticipate market moves.

## Skills Used

* **Data Science:** Data preprocessing, feature engineering for volatility metrics.
* **Machine Learning Engineering:** AI summarization, prompt engineering, integration of ML models with structured datasets.
* **Data Engineering:** PostgreSQL schema design, ETL pipelines.
* **DevOps:** Deployment on AWS EC2, CI/CD with GitHub + Vercel, monitoring.

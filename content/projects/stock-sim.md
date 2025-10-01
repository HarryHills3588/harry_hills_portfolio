---
title: "Random Stock Market Simulator"
description: "A stock market enviroment simulator using Apache Kafka"
tags: [
    {
        "name": "Kafka",
        "color": "primary"
    },
    {
        "name": "Python",
        "color": "secondary"
    }
]
---

# Stock Market Simulation Platform

## Overview

This project is a **microservices-based stock market simulation platform** designed to model the behavior of a financial exchange. It provides a realistic environment where **buyers, sellers, order matching, and reporting systems** interact in real-time.

The platform demonstrates key concepts in **quantitative finance, distributed systems, and data engineering** by leveraging a modern data infrastructure, including **Kafka Streams, and Data Warehouses**.

The goal of the project is to **simulate stock trading**, **generate real-time market data**, and **enable reporting & analytics** through a scalable **lakehouse architecture**.

## Architecture

### Components

* **Buyers & Sellers (Microservices)**

  * Generate simulated buy/sell orders for multiple stocks.
  * Interact with the order matching engine through Kafka.

* **Order Matching Engine (Kafka Streams)**

  * Maintains the **order book** for each stock.
  * Matches buy and sell orders in real-time.
  * Publishes **executed trades** and **updated stock prices** to Kafka topics.

* **Apache Kafka**

  * Central messaging bus for **orders, trades, prices, and portfolio updates**.
  * Provides topics for downstream services (reporting, storage, analytics).

* **Apache Flink (Streaming Analytics)**

  * Consumes Kafka topics in real-time.
  * Writes streaming data (trades, prices, portfolios) into **Apache Iceberg** tables.
  * Performs **real-time aggregations** (e.g., moving averages, volatility).

* **Apache Iceberg (Data Lakehouse)**

  * Stores structured financial data in a **transactional, queryable format**.
  * Enables queries for historical market reconstruction.

* **PostgreSQL (OLTP)**

  * Stores **user profiles, portfolio balances, and trade history snapshots**.
  * Acts as the operational database for the simulation.

* **Reporting & Dashboards**
  * Provides **market performance reports**, **portfolio summaries**, and **risk metrics**.

---

## Key Functionalities

* **Market Simulation**

  * Multiple stocks with continuous price updates.
  * Buyers and sellers placing orders concurrently.

* **Order Matching**

  * Kafka Streams-based matching engine.
  * Maintains order book & determines clearing price.

* **Data Lakehouse Storage**

  * Apache Iceberg tables store trades, portfolios, and order book snapshots.
  * Real-time Flink ingestion.

* **Analytics & Reporting**

  * Historical queries with Spark SQL.
  * Real-time aggregates with Flink SQL.
  * Reporting dashboards for performance and risk metrics.

---

## Skills Demonstrated

* **Microservices & Distributed Systems** (Docker, Kafka, Kafka Streams, Flink, Spark)
* **Data Engineering** (real-time ingestion, ETL pipelines, data lakehouse design)
* **Databases** (PostgreSQL for OLTP, Iceberg for OLAP)
* **Streaming Analytics** (real-time reporting, anomaly detection)

---
title: "Weather Forecast Accuracy Predictor"
description: "Using Machine Learning to determine how accurate the forecast for today is"
tags: [
    {
        "name": "SciKit-Learn",
        "color": "primary"
    },
    {
        "name": "Pandas",
        "color": "secondary"
    }
]
---

# Predicting the Weather: A Data-Driven Approach

This project demonstrates an end-to-end data science workflow, from automated data collection to machine learning model deployment, aimed at predicting weather-related outcomes. By leveraging various data sources and advanced analytical techniques, this project showcases a comprehensive approach to solving real-world problems with data.

###  Data Collection Automation

The foundation of any successful data science project is robust and reliable data. For this project, I developed an automated data pipeline to collect weather data from two distinct sources: the **National Oceanic and Atmospheric Administration (NOAA)** and **AccuWeather**.

A Python script, `noaaScraper.py`, was created to scrape the data from these websites for multiple cities. The script is executed automatically using a shell script, `script.sh`, which manages the necessary `conda` environment. This ensures that the data collection process is both efficient and reproducible. The collected data is then stored in a **Supabase database**, providing a scalable and secure storage solution.

### Data Engineering and Exploration

Once the data is collected, the next step is to prepare it for analysis. This is where the data engineering and exploration phase comes in. Two Jupyter notebooks, `data_engineering.ipynb` and `exploration.ipynb`, are used for this purpose.

In the `data_engineering.ipynb` notebook, the raw data is cleaned, preprocessed, and transformed into a suitable format for analysis. This includes handling missing values, dealing with outliers, and creating new features that can improve the performance of the machine learning model.

The `exploration.ipynb` notebook is used for exploratory data analysis (EDA). In this phase, I use various visualization techniques to gain a deeper understanding of the data, identify patterns and relationships, and formulate hypotheses. This is also where the initial machine learning model is built and evaluated. A **Logistic Regression** model is used for this project, suggesting a classification task such as predicting whether it will rain or not.

### Feature Engineering

To further enhance the model's predictive power, I developed a custom feature engineering script, `TemperatureTagMapper.py`. This script contains a class that maps temperature values to specific tags, creating categorical features that can be used by the model. This is a crucial step in translating domain knowledge into features that the machine learning algorithm can understand and utilize.

### Configuration and Deployment

The `forecast.py` file serves as a configuration file, storing the city codes and URLs required for the web scraping process. This makes the project easily configurable and scalable to include more cities in the future.

While this project is a proof-of-concept, the modular design and automated pipeline make it ready for deployment in a production environment. The use of a `conda` environment ensures that all dependencies are managed effectively, making the project portable and easy to set up on different systems.

### Conclusion

This project demonstrates a holistic approach to solving a data science problem, from data acquisition to model building and deployment. It highlights my skills in:

* **Data Scraping and Automation**: Using Python and shell scripting to build an automated data pipeline.
* **Data Engineering**: Cleaning, preprocessing, and transforming raw data into a usable format.
* **Exploratory Data Analysis**: Using visualization techniques to gain insights from the data.
* **Feature Engineering**: Creating new features to improve model performance.
* **Machine Learning**: Building and evaluating a predictive model using `scikit-learn`.
* **Database Management**: Storing and managing data in a Supabase database.

By combining these skills, I was able to develop a robust and scalable solution for predicting weather-related outcomes. This project not only showcases my technical abilities but also my problem-solving skills and my passion for leveraging data to make informed decisions.
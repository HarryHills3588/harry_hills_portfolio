---
title: "Interstellar Object Prediction using SVMs"
description: "An end-to-end machine learning project using support vector machines"
tags: [
    {
        "name": "SciKit-Learn",
        "color": "primary"
    },
    {
        "name": "ML Engineering",
        "color": "secondary"
    }
]
---
<a href="/project-pdfs/InterstellarClassification.pdf" target="_blank">View Report</a>

# Classifying Stars, Galaxies, and Quasars: An End-to-End ML Project

## Project Summary

Built a production-ready machine learning pipeline to automatically classify 30,000 celestial objects from astronomical survey data, achieving **97% accuracy** through data preprocessing, feature engineering, and model optimization.

**Tech Stack:** Python, scikit-learn, pandas, NumPy, matplotlib  
**Skills:** Data Cleaning, Feature Engineering, Model Selection, Cross-Validation, Performance Optimization

---

## Business Problem

Astronomical surveys collect millions of observations that need classification. Manual review is impractical at scale. This project demonstrates how I built an automated classifier while handling real-world data challenges: class imbalance, duplicate records, outliers, and high dimensionality.

---

## What I Did

### 1. Data Quality & Cleaning

**Challenges in the Dataset:**
- 2,569 duplicate entries (8.5% of dataset)
- Severe class imbalance: 59% galaxies, 22% stars, 19% quasars
- Irrelevant features with constant values
- Extreme outliers in critical features

**My Approach:**
- Removed duplicates using unique identifiers
- Selected appropriate evaluation metrics (Balanced Accuracy, Weighted F1) to handle imbalance
- Dropped 6 irrelevant features after exploratory analysis
- Applied domain-appropriate transformations to skewed distributions

**Key Decision:** Applied log transformation to redshift feature after discovering it was severely right-skewed. This single transformation significantly improved model performance by normalizing the most discriminative feature in the dataset.

### 2. Feature Engineering & Selection

**Discovered Strong Correlations:**
- Photometric features (u, g, r, i, z bands) showed 0.86-0.97 correlations
- Redshift emerged as the dominant predictor (0.756 mutual information score)

**Applied Two Feature Selection Methods:**

**Filter Method (Mutual Information):** Fast, model-agnostic ranking identified top 3 features: redshift, plate, z-band

**Wrapper Method (Sequential Forward Selection):** Tested feature subsets specific to each classifier, revealing that different models benefit from different feature combinations

**Impact of Feature Selection:** Reduced features from 10 to 3 with only 2% accuracy loss, improving training time for production deployment and experimentation.

### 3. Model Development & Evaluation

**Systematic Comparison of 6 Classifiers:**

| Model | Accuracy | Training Time |
|-------|----------|---------------|
| Linear SVM | 97% | 3.4s | 
| RBF SVM | 97% | 4.1s | 
| Decision Tree | 96% | 0.3s | 
| KNN | 95% | 0.2s | 
| Polynomial SVM | 96% | 5.8s | 

**Evaluation Strategy:**
- 5-fold cross-validation for accurate performance estimates
- Multiple metrics to handle class imbalance
- Learning curve analysis
- ROC curve analysis for per-class performance insights

**Findings:** Linear and RBF SVMs achieved identical 97% accuracy, but Linear SVM trains 20% faster—making it the optimal choice for production.

### 4. Model Interpretation & Insights

**ROC Analysis Revealed:**
- Near-perfect separation (>99% AUC) between stars and other objects
- Main classification challenge: distinguishing galaxies from quasars at intermediate redshift values
- This insight points to specific areas for future improvement
---

## Achievements

**97% classification accuracy** on imbalanced dataset  
**67% dimensionality reduction** while maintaining performance  
**Identified optimal model** through model comparisons
**Production-ready pipeline** with proper cross-validation  
**Documented trade-offs** between accuracy, speed, and complexity

---

## Technical Highlights

**Data Preprocessing:**
- Handled missing data and duplicates
- Applied appropriate scaling (StandardScaler for normal distributions, MinMaxScaler for bounded features)
- Domain-specific transformations (log-scaling for redshift)

**Model Selection:**
- Compared 6 different algorithms with consistent evaluation framework
- Used stratified k-fold cross-validation to ensure reliable results
- Analyzed learning curves to optimize training set size (saved compute resources)

**Feature Engineering:**
- Both filter and wrapper methods for comprehensive feature analysis
- Discovered redshift as key discriminative feature
- Identified multi-collinearity in photometric features

**Evaluation:**
- Multiple metrics appropriate for imbalanced classification
- One-vs-one ROC analysis for multi-class insights
- Confusion matrix analysis to identify specific error patterns

---

## What I Learned

**Skills:**
- Advanced feature engineering techniques for imbalanced datasets
- Trade-offs between model complexity, accuracy, and training time
- How to select appropriate evaluation metrics based on business context
- Importance of systematic model comparison with proper cross-validation

**Practical Insights:**
- Sometimes simple transformations (like log-scaling) have dramatic impact
- Feature selection isn't just about accuracy—it's about production feasibility
- Understanding where models fail is as valuable as overall performance metrics
- Default hyperparameters often perform surprisingly well with proper preprocessing

---
## Future Improvements

If continuing this project, I would:

1. **Engineer composite features** combining photometric measurements to better separate galaxies from quasars
2. **Implement ensemble methods** to combine predictions from multiple models
3. **Deploy model as REST API** for real-time classification
4. **Add automated retraining pipeline** to handle data drift
5. **Create interactive dashboard** for non-technical stakeholders

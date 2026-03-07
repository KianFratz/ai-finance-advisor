# Personal Finance AI Advisor

An AI-powered application that analyzes user spending patterns and
provides personalized financial advice using machine learning,
time-series forecasting, and large language models.

------------------------------------------------------------------------

# 1. Project Overview

The **Personal Finance AI Advisor** helps users understand their
financial habits by analyzing transaction data and generating insights.

### Core Capabilities

-   Upload bank statements
-   Automatically categorize transactions
-   Analyze spending patterns
-   Forecast future expenses
-   Generate AI financial advice
-   Display insights in a React dashboard

Example insight:

> "You spend 35% of your income on food. Reducing this by 15% could save
> ₱3,500 per month."

------------------------------------------------------------------------

# 2. Tech Stack

## Backend

-   FastAPI
-   Python
-   PostgreSQL
-   Pandas

## Machine Learning

-   Scikit-learn (transaction categorization)
-   Prophet / NeuralProphet (forecasting)

## AI

-   LLM API ( Gemini )

## Frontend

-   React
-   Recharts / Chart.js

------------------------------------------------------------------------

# 3. System Architecture

User → React Dashboard → FastAPI Backend → ML Models → Database

Components:

-   Transaction Processing
-   Spending Analytics
-   Forecasting Engine
-   AI Advisor Engine

------------------------------------------------------------------------

# 4. Database Design (ERD)

## Users

  Field            Type
  ---------------- -----------
  id               PK
  email            string
  password         string
  monthly_income   float
  created_at       timestamp

## Transactions

  Field         Type
  ------------- --------
  id            PK
  user_id       FK
  date          date
  description   text
  amount        float
  category      string

## Budgets

  Field           Type
  --------------- --------
  id              PK
  user_id         FK
  category        string
  monthly_limit   float

## Insights

  Field        Type
  ------------ -----------
  id           PK
  user_id      FK
  summary      text
  created_at   timestamp

------------------------------------------------------------------------

# 5. API Endpoints

## Authentication

POST /auth/register\
POST /auth/login\
GET /auth/profile

## Transactions

POST /transactions/upload\
GET /transactions\
DELETE /transactions/{id}

## Analytics

GET /analytics/spending-summary\
GET /analytics/category-breakdown\
GET /analytics/monthly-trends

## Forecast

GET /forecast/monthly

## AI Advisor

GET /advisor/financial-advice

------------------------------------------------------------------------

# 6. Machine Learning Pipeline

1.  User uploads bank statement
2.  System cleans data
3.  Transaction categorization model classifies spending
4.  Data stored in database
5.  Analytics engine calculates patterns
6.  Forecasting model predicts future spending
7.  LLM generates financial advice

------------------------------------------------------------------------

# 7. Transaction Categorization Model

### Dataset Example

  Description   Category
  ------------- ---------------
  Starbucks     Food
  Uber Ride     Transport
  Netflix       Entertainment

### Training Example

\`\`\`python from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression from
sklearn.pipeline import Pipeline

model = Pipeline(\[ ("tfidf", TfidfVectorizer()), ("clf",
LogisticRegression())\])

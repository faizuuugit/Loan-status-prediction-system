# Loan Status Prediction System

## Introduction

The **Loan Status Prediction System** is a machine learning project designed to automate the loan eligibility process for a financial institution. This system predicts whether a loan will be approved based on applicant data, such as gender, marital status, income, loan amount, credit history, etc. By leveraging machine learning algorithms, this project aims to streamline the decision-making process, reduce manual work, and improve the accuracy of loan approval predictions.

## Features

- **Automated Loan Eligibility Prediction**: Based on user inputs like income, loan amount, credit history, etc.
- **Machine Learning Algorithms**: Trained using Random Forest Classifier with options for other models like Decision Trees and Logistic Regression.
- **Flask Web Application**: A user-friendly web interface where users can input data and receive real-time loan approval predictions.
- **Command-Line Interface (CLI)**: An additional interface for making predictions via the terminal.
- **Data Preprocessing and Feature Engineering**: Handling missing values, feature scaling, and categorical data encoding for better model performance.

## Technology Stack

- **Frontend**: HTML, CSS (for the user interface)
- **Backend**: Python (Flask web framework)
- **Machine Learning**: Random Forest Classifier, Decision Trees, Logistic Regression (scikit-learn)
- **Data Handling**: pandas, numpy
- **Model Serialization**: pickle

## Project Structure

```bash
Loan Status Prediction System/
├── app.py                # Main Flask application
├── model.pkl             # Trained machine learning model (Random Forest)
├── predict_cli.py        # CLI for loan prediction
├── templates/
│   ├── index.html        # Home page for loan prediction
│   └── prediction.html   # Results page showing the prediction
├── static/
│   └── confusion.png     # Confusion matrix visualization
├── data/
│   └── train.csv         # Training dataset
```

## Installation and Setup

1. **Install Python**: Ensure Python is installed on your machine (preferably Python 3.x).
2. **Install Dependencies**: Use `pip` to install the required libraries:
   ```bash
   pip install pandas numpy seaborn scikit-learn flask
   ```

3. **Clone the Project**:
   ```bash
   git clone https://github.com/your-username/loan-status-prediction.git
   cd loan-status-prediction
   ```

4. **Prepare Data**:
   - Load the dataset from `train.csv` located in the `data/` directory.
   - Handle missing values and perform feature engineering.

5. **Train the Model**:
   - Use the provided `Loan Prediction.ipynb` to train the model.
   - Save the trained model as `model.pkl` for later use in the web application.

6. **Run the Flask Application**:
   ```bash
   python app.py
   ```
   - The application will be hosted at `http://127.0.0.1:5000/`.

## Usage

### Web Interface

1. Open the browser and visit `http://127.0.0.1:5000/`.
2. Fill in the required applicant details (gender, marital status, income, loan amount, etc.).
3. Submit the form to get a real-time loan approval prediction.

### Command-Line Interface

1. Run the CLI script for predictions directly from the terminal:
   ```bash
   python predict_cli.py
   ```

2. Input the required data when prompted, and the prediction will be displayed in the console.

## Machine Learning Model

- **Random Forest Classifier** is the primary algorithm used for loan status prediction due to its robustness and ability to handle large datasets.
- The accuracy of the model is **77.92%** on the test data.
- The model was evaluated using a confusion matrix and other metrics like precision, recall, and F1-score.

## Future Improvements

- Incorporating additional features like credit score and past loan history to improve prediction accuracy.
- Implementing advanced machine learning techniques such as XGBoost.
- Scaling the system for deployment in real-world production environments.

---

This project successfully achieves its objective of automating the loan eligibility process while providing an interactive platform for predictions.

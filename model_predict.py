import pickle
import numpy as np
import sys
def load_model(model_file):
    try:
        with open(model_file, 'rb') as file:
            model = pickle.load(file)
        return model
    except Exception as e:
        print("Error loading model:", e)
        return None
def preprocess_input(input_data):
    return input_data
def predict(model, input_data):
    try:
        prediction = model.predict(input_data)
        return prediction
    except Exception as e:
        print("Error predicting:", e)
        return None
def main():
    model_file = 'model.pkl'
    model = load_model(model_file)
    if model is None:
        sys.exit(1)
    input_data = preprocess_input(sys.argv[1:])
    print("Input data:", input_data)  
    prediction = predict(model, input_data)
    if prediction is not None:
        print("Prediction:", prediction)
    else:
        sys.exit(1)
if __name__ == "__main__":
    main()

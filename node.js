const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'templates')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});
app.post('/predict', (req, res) => {
    const { gender, married, dependents, education, employed, credit, area, ApplicantIncome, CoapplicantIncome, LoanAmount, Loan_Amount_Term } = req.body;
    const pythonProcess = spawn('python', ['model_predict.py', gender, married, dependents, education, employed, credit, area, ApplicantIncome, CoapplicantIncome, LoanAmount, Loan_Amount_Term]);
    let predictionResult = '';
    pythonProcess.stdout.on('data', (data) => {
        predictionResult += data.toString();
    });
    pythonProcess.stderr.on('data', (data) => {
        console.error(`Error from Python script: ${data}`);
        res.status(500).send("Error occurred while processing the prediction.");
    });
    pythonProcess.on('close', (code) => {
        if (code === 0) {
            res.send(predictionResult);
        } else {
            console.error(`Python script exited with code ${code}`);
            res.status(500).send("Error occurred while processing the prediction.");
        }
    });
});
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

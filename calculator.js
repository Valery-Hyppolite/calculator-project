const express = require('express');
// body parse is use to capture the user unput so you can use it to do things with it.
const bodyParser = require('body-parser');

const app = express();
const port = 3000

// body parse come with express, we can jsut use the express.json like below to get the ulrendoe functionality.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// when user request the page, send them the html file. dirnam is use to get the comple path 
// of this current file and add the index file you want to send to user when they ruest the bage.
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// the response from the user, use it and send something back to user
app.post('/', function (req, res) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    console.log(num1);
    console.log(num2);

    res.send("The result is " + result);
});



// BMI CALCULATOR
app.get('/bmi', function (req, res) {
    res.sendFile(__dirname + '/bmi.html');
});

app.post('/bmi', function (req, res) {
    let height = parseFloat(req.body.h);
    let weight = parseFloat(req.body.w);
    let bmiresult = weight / (height) ** 2;
    console.log(height);
    console.log(weight);

    res.send('your BMI IS ' + bmiresult);

});



app.listen(port, function () {
    console.log('locohost running');
});


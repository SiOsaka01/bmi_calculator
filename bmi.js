//Calculate imperial(feet and inches) height into metric(cms)
function calcIntoCm() {
    //request number of feet from user
    let numOfFeet = prompt("enter number of feet only, what is your height?");
    
    //convert string into integer
    numOfFeet=parseInt(numOfFeet);
       
    //calculate number of inches
    let heightFeetInches = numOfFeet * 12;
    //convert string into integer
    heightFeetInches=parseInt(heightFeetInches);

    //request unit inches remaining
    let numOfIns = prompt("enter number of inches only, in your height?");
    numOfIns=parseInt(numOfIns);

    //add feet-inches and unit-inches for total inches
    let totalInches = heightFeetInches + numOfIns;
    alert("Your total height in inches is " + totalInches);

    //convert inches to cms
    let heightCms = totalInches * 2.54;
    //return heightCms;
    alert("Your total height in cms is " + heightCms);

    //populate height in cm textbox with metric height
    document.getElementById("height").value = heightCms;
}

// select the calculate button
var calculate = document.querySelector('.calculate');

// attach event listener to the button
calculate.addEventListener('click', findBMI);

// write the function that will calculate the BMI
function findBMI() {
    var height = +document.querySelector('#height').value;
    var weight = +document.querySelector('#weight').value;
    // check height & weight are a valid number
    if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
        alert('Please fill all fields with valid numbers');
        return;
    }
    // convert height to meters
    height = height / 100;
    var bmi = weight / (height * height);
    showResult(bmi);
}

// write the function that will show the result
function showResult(bmi) {
    var result = document.querySelector('.result');
    var bmiStatus;
    if (bmi < 18.5) {
        bmiStatus = 'Underweight';
    } else if (bmi < 25) {
        bmiStatus = 'Normal';
    } else if (bmi < 30) {
        bmiStatus = 'Overweight';
    } else {
        bmiStatus = 'Obese';
    }
    result.innerHTML = `<div class=${bmiStatus}>Your BMI is ${bmi.toFixed(2)} and you are ${bmiStatus}.</div>`;
}


'use strict';

const bmindex = document.getElementById('bmi');
const btn = document.getElementById('btn');

function bmiCalculator(){
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    let text = document.getElementById('text');
    // Calculate Body Mass Index
    let bmi = Number(weight) * 1.3 / (Number(height) / 100) ** 2.5;
    // Calculate normal weight
    let normalWeight =  (24.99 * (Number(height) / 100) ** 2.5 ) / 1.3;

    bmindex.textContent = bmi.toFixed(2);

    if(18.5 <= bmi && bmi <= 24.99 ){
        text.textContent = 'Normal Body Weight!';
    } else if(17 < bmi && bmi < 18.49 ){
        text.textContent = `Mild Leanness! Normal weight: ${normalWeight.toFixed(0)}`;
    } else if(16 < bmi && bmi < 16.99 ){
        text.textContent = `Moderate Leanness! Normal weight: ${normalWeight.toFixed(0)}`;
    }else if(16 > bmi){
        text.textContent = `Severe Emaciation! Normal weight: ${normalWeight.toFixed(0)}`;
    }else if(25 < bmi && bmi < 29.99 ){
        text.textContent = `Overweight! Normal weight: ${normalWeight.toFixed(0)}`;
    }else if(30 < bmi && bmi < 34.99 ){
        text.textContent = `I. Obesity! Normal weight: ${normalWeight.toFixed(0)}`;
    }else if(35 < bmi && bmi < 39.99 ){
        text.textContent = `II. Obesity! Normal weight: ${normalWeight.toFixed(0)}`;
    }else if(40 < bmi){
        text.textContent = `III. Obesity! Normal weight: ${normalWeight.toFixed(0)}`;
    }
}

btn.addEventListener('click', bmiCalculator);
const formBmi = document.getElementById("bmi-form")
const weight_input = document.getElementById("weight")
const height_input = document.getElementById("height")

function bmiCalc(weight,height){
    const result = (weight/((height/100)**2)).toFixed(1)
    let hasil
    if(result >=30){
        hasil = "Obesity";
    }else if(result>=25){
        hasil = "Overweight";
    }else if(result >= 18.5){
        hasil = "Normal weight";
    }else{
        hasil = "Underwight";
    }
    return `Your BMI is ${result} which mean, You are ${hasil}`;
}


function inputData(event){
    event.preventDefault();
    const bmi_value = bmiCalc(weight_input.value,height_input.value)
    document.getElementById("hasil").innerHTML = bmi_value
}
formBmi.addEventListener("submit",inputData)



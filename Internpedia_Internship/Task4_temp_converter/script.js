const button = document.getElementById('calculate');
const result = document.querySelector('.result');
result.style.display='none';
button.addEventListener('click',convert);
function convert(){
    
    const input = parseInt(document.getElementById('temp').value);
    const type = document.getElementById('Type').value;
    // const type = document.querySelectorAll('option').value;
    console.log(input,type);

   if(isNaN(input)){
    result.textContent=`Please Enter valid input`;
    result.style.display='block';
   }
   else if(type == 'Farenheit'){
    const celsius = (input - 32) * 5 / 9;
    
     result.innerHTML = `${input}°F is <h3>${celsius.toFixed(2)}°C</h3>`;
     result.style.display='block';




   }
//    else if(type == 'Celcius'){
    
//    }
   else if(type == 'Kelvin'){
    const celsius = input - 273.15;
    result.innerHTML = `${input} K is <h3>${celsius.toFixed(2)}°C </h3>`;
    result.style.display='block';

   }

}
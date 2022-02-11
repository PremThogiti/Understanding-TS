type Combinable = number|string
type ConversionDescriptior = 'as-number'|'as-text';


function combine(num1:Combinable, num2:Combinable,resultConversion: ConversionDescriptior){
    let result;
    if (typeof num1==='number' && typeof num2==='number'|| resultConversion=='as-number'){
    result=+num1+ +num2;
    }
    else {
    result=num1.toString()+num2.toString();
}
return result;
}

const combinedNums = combine(10,23,'as-number')
console.log(combinedNums)
const combinedstrings = combine('Prem ','Kumar','as-text')
console.log(combinedstrings)
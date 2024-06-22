let num1 = parseInt(prompt("Enter a Number"))
let num2 = parseInt(prompt("Enter a Number"))
let num3 = parseInt(prompt("Enter a Number"))
let num4 = parseInt(prompt("Enter a Number"))
let num5 = parseInt(prompt("Enter a Number"))
let num6 = parseInt(prompt("Enter a Number"))

if ( num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5 && num1 < num6){
    document.write("the smallest number is " , num1)
}
else if ( num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5 && num2 < num6){
    document.write("the smallest number is " , num2)
}
else if( num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5 && num3 < num6){
    document.write("the smallest number is " , num3)
}
else if ( num4 < num1 && num2 < num4 && num3 &&  num4 < num5 && num5 < num6){
    document.write("the smallest number is " , num3)
}
else if( num5 < num1 && num5 < num2 && num5 < num3 && num5 < num4 && num5 < num6){
    document.write("the smallest number is " , num5)
}

else if( num6 < num1 && num6 < num2 && num6 < num3 && num6 < num4 && num6 < num5){
    document.write("the smallest number is " , num3)
}
else{
    document.write('Makala yara')
}
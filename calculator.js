const  display = document.getElementById("case");

function appendToDisplay(input){
       display.value += input;
}
function calculate(){
display.value = eval(display.value)

}
function clearDisplay(){
display.value = "";
}


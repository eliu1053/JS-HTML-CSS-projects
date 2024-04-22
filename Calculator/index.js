const display = document.getElementById("display");

//user input fucntion to enter numbers to calculate
function appendToDisplay(input){
    display.value += input;
}

//clear function to wipe the board clean
function clearDisplay(){
    display.value = "";
}

//calculate function to calculate what the user wants to do as long as there are no unexpected errors
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
}
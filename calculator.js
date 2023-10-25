let input = document.getElementById('text');
let buttons = document.getElementsByClassName('btn');
let btnClear= document.querySelector('.btn-erase');
let btn_evaluate = document.querySelector('.btn-eval');
let btn_delete = document.querySelector('.btn-del');



function display(){
    // collect button values and make it input value
for (let x = 0; x < buttons.length; x++) {
    
    buttons[x].addEventListener('click', (e)=>{
        let btn_values = e.target.getAttribute("data-num");
        input.value += btn_values;
    })
}

// delete all input values when btn_del is clicked 

btn_delete.addEventListener('click', function(){
    input.value = ""
})

// calculate input value when btn-eval is pressed

btn_evaluate.addEventListener('click', ()=>{
    if (input.value == "") {
        input.value = "";
        
    }
    else{
        let answer = eval(input.value);
        input.value = answer;
    }
})

// prevent keyboard from entering value into input

input.addEventListener("keypress", function (event) {
    event.preventDefault();
});

//clear each value when btn_erase button is clicked

btnClear.addEventListener("click", ()=>{
    let input_to_clear = input.value;
    if (input_to_clear.length > 0) {
        // Remove the last character
        input_to_clear = input_to_clear.slice(0, -1);
        input.value = input_to_clear;
    }

})
   
}display();

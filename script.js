let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

// Add keyboard event listener
document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
        // Append number or operator to the string
        string += key;
        input.value = string;
    } else if (key === 'Enter') {
        // Calculate result when Enter is pressed
        string = eval(string);
        input.value = string;
    } else if (key === 'Backspace') {
        // Remove last character when Backspace is pressed
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else if (key === 'Escape' || key === 'Delete') {
        // Clear input when Escape is pressed
        string = "";
        input.value = string;
    }
});

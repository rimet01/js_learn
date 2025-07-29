// Links to HTML elements //

const tbxC1 = document.getElementById("operand1");
const tbxC2 = document.getElementById("operand2");
const tbxResult = document.getElementById("result");
const btnTotal = document.getElementById("btnTotal");
const btnClear = document.getElementById("btnClear");

// Function to calculate the total of two numbers //
function calculateTotal() {
    // Get the values from the input fields and convert them to numbers //
    let C1 = Number(tbxC1.value);
    let C2 = Number(tbxC2.value);
    // Display the result in the result input field //
    let result = C1 + C2;
    // Show the result //
    tbxResult.value = result;

    if (result >=0) {
        tbxResult.style.backgroundColor = "lightgreen"; // Set background color to light green for positive results
    } else {
        tbxResult.style.backgroundColor = "lightcoral"; // Set background color to light coral for negative results
    }
    
}

btnTotal.onclick = calculateTotal; // Assign the calculateTotal function to the button click event
tbxResult.onclick = calculateTotal; // Also call calculateTotal when the result field is clicked
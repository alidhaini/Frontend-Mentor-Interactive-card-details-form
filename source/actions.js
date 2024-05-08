function formatCreditCardNumber(input) {
    // Remove any non-digit characters
    let formattedValue = input.value.replace(/\D/g, '');

    // Add a space every four digits
    formattedValue = formattedValue.replace(/(\d{4}(?=[^\s]))/g, '$1 ');

    formattedValue = formattedValue.substring(0, 19);

    // Update the input value
    input.value = formattedValue;

    console.log(input.value)
}

function ensureTwoDigits(input) {
    // Check if the input value has only one digit
   
    
}

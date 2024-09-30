function generateRandomCode(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('generated-code').innerText = code; // Display generated code
}

// Function to evaluate user input against generated code
function evaluateCode() {
    const userInput = document.getElementById('code-input').value.trim();
    const generatedCode = document.getElementById('generated-code').innerText.trim();

    if (userInput === generatedCode) {
        disableButton(false); // Enable the button
    } else {
        disableButton(true); // Disable the button
    }
}

function disableButton(isDisabled) {
    const submitButton = document.getElementById('submit-button');
    submitButton.disabled = isDisabled;

    // Update button appearance
    if (isDisabled) {
        submitButton.classList.add('disabled');
    } else {
        submitButton.classList.remove('disabled');
    }
}

// Set initial state of the button
window.onload = function() {
    disableButton(true); // Disable on load
    generateRandomCode(8); // Generate code on load
}

// Event listener for input changes
document.getElementById('code-input').addEventListener('input', evaluateCode);

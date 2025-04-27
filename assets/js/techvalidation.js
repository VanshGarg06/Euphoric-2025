function validateCheckboxes(checkboxName) {
    const checkboxes = document.querySelectorAll(`input[name="${checkboxName}"]:checked`);
    if (checkboxes.length > 2) {
        return false; // More than 2 checkboxes selected
    }
    return true; // 2 or fewer checkboxes selected
}

// Function to validate all form fields
function validateField(fieldId) {
    let isValid = true;
    const field = document.getElementById(fieldId);
    const fieldValue = field.value.trim();
    const fieldName = field.name;

    switch (fieldId) {
        case "name":
            if (fieldValue === "") {
                isValid = false;
                displayError(field, "Name is required.");
            } else if (!/^[A-Za-z\s]+$/.test(fieldValue)) {
                isValid = false;
                displayError(field, "Name must contain only letters and spaces.");
            }
            break;
        case "branch":
            if (fieldValue === "") {
                isValid = false;
                displayError(field, "Branch is required.");
            }
            break;
        case "year":
            if (fieldValue === "") {
                isValid = false;
                displayError(field, "Year is required.");
            } else if (isNaN(fieldValue) || fieldValue < 1 || fieldValue > 4) {
                isValid = false;
                displayError(field, "Year must be a number between 1 and 4.");
            }
            break;
        case "admissionId":
            if (fieldValue === "") {
                isValid = false;
                displayError(field, "Admission ID is required.");
            }
            break;
        case "phone":
            if (fieldValue === "") {
                isValid = false;
                displayError(field, "Phone number is required.");
            } else if (!/^\d{10}$/.test(fieldValue)) {
                isValid = false;
                displayError(field, "Phone number must be 10 digits.");
            }
            break;
        case "email":
            if (fieldValue === "") {
                isValid = false;
                displayError(field, "Email is required.");
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValue)) {
                isValid = false;
                displayError(field, "Invalid email format.");
            }
            break;
        default:
            // No specific validation for other fields
            break;
    }

    return isValid;
}

// Function to display error messages
function displayError(field, message) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "text-danger";
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
    field.classList.add("is-invalid");
}

// Event listener for checkbox changes
document.addEventListener("change", function (event) {
    if (event.target.name === "technicalEvents[]") {
        if (!validateCheckboxes("technicalEvents[]")) {
            alert("You can select a maximum of two events.");
            event.target.checked = false; // Uncheck the last selected checkbox
        }
    }
});

// Event listener for input field keyup to remove errors
document.addEventListener("keyup", function (event) {
    const field = event.target;
    field.classList.remove("is-invalid");
    const errorDiv = field.parentNode.querySelector(".text-danger");
    if (errorDiv) {
        errorDiv.remove();
    }
});
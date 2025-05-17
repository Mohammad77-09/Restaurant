// Helper function to get element by ID
let id = (id) => document.getElementById(id);

// Helper function to get elements by class name
let classes = (classes) => document.getElementsByClassName(classes);

// Get references to the form and input elements using the helper function
let username = id("username");
let email = id("email");
let password = id("password");
let form = id("form"); // Assuming form also has an ID "form"

// Get references to the error message, success, and failure icon elements
let errorMsg = classes("error");
let successIcon = classes("success-icon");
let failureIcon = classes("failure-icon");

// Add an event listener to the form's submit event
form.addEventListener("submit", (e) => {
    // Prevent the default form submission
    e.preventDefault();

    // Call the validation engine for each input field
    // The second argument (0, 1, 2) is a serial index to access the correct element from the errorMsg, successIcon, and failureIcon collections
    engine(username, 0, "Username Can't be blank");
    engine(email, 1, "Email Can't be blank");
    engine(password, 2, "Password Can't be blank");
});

// Validation engine function
let engine = (id, serial, message) => {
    // Check if the input value (after trimming whitespace) is empty
    if (id.value.trim() === "") {
        // If empty, display the error message and show the failure icon
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = "1"; // Show failure icon
        successIcon[serial].style.opacity = "0"; // Hide success icon
    } else {
        // If not empty, clear the error message and show the success icon
        errorMsg[serial].innerHTML = "";
        failureIcon[serial].style.opacity = "0"; // Hide failure icon
        successIcon[serial].style.opacity = "1"; // Show success icon
    }
};

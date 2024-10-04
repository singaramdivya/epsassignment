document.addEventListener('DOMContentLoaded', function () {

    const menuIcon = document.getElementById('menu-icon');
    const navLinksContainer = document.querySelector('.nav-links'); 

    menuIcon.addEventListener('click', function() {
        navLinksContainer.classList.toggle('show');
    });

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            navLinksContainer.classList.remove('show');
        });
    });
    const form = document.getElementById('registrationForm');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');

    // Error message elements
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');

    // Helper function to validate email
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Helper function to validate phone number (10 digits)
    function isValidPhoneNumber(phone) {
        const phonePattern = /^\d{10}$/; 
        return phonePattern.test(phone);
    }

    // Form validation function
    function validateForm() {
        let isValid = true;

        // Validate First Name
        if (firstName.value.trim() === '') {
            firstNameError.textContent = 'First Name is required';
            isValid = false;
        } else {
            firstNameError.textContent = '';
        }

        // Validate Last Name
        if (lastName.value.trim() === '') {
            lastNameError.textContent = 'Last Name is required';
            isValid = false;
        } else {
            lastNameError.textContent = '';
        }

        // Validate Email
        if (email.value.trim() === '') {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            emailError.textContent = 'Please enter a valid email';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Validate Phone Number
        if (phone.value.trim() === '') {
            phoneError.textContent = 'Phone number is required';
            isValid = false;
        } else if (!isValidPhoneNumber(phone.value.trim())) {
            phoneError.textContent = 'Please enter a valid 10-digit phone number';
            isValid = false;
        } else {
            phoneError.textContent = '';
        }

        // Validate Password
        if (password.value.trim() === '') {
            passwordError.textContent = 'Password is required';
            isValid = false;
        } else if (password.value.trim().length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        return isValid;
    }

    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Validate form fields
        if (validateForm()) {
            // If the form is valid, create the form data object
            const formData = {
                first_name: firstName.value.trim(),
                last_name: lastName.value.trim(),
                phone_number: phone.value.trim(),
                email: email.value.trim(),
                password: password.value.trim()
            };

            // Log form data to the console
            console.log(formData);

            firstName.value="";
            lastName.value="";
            phone.value="";
            email.value="";
            password.value="";

            alert('Form submitted successfully!');
           
        }
    });
});

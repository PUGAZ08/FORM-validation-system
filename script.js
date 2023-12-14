function validateForm() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (fullName.length < 5) {
        alert("Name must be at least 5 characters long");
        return false;
    }

    if (!email.includes('@')) {
        alert("Enter a valid email address");
        return false;
    }

    if (phone.length !== 10 || phone === '123456789') {
        alert("Enter a valid 10-digit phone number");
        return false;
    }

    if (password === 'password' || password.length < 8 || password === fullName) {
        alert("Password is not strong enough");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match");
        return false;
    }

    // Additional conditions and validations can be added as needed

    return true; // Submit the form if all validations pass
}
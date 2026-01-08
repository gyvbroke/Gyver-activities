function register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const fullname = document.getElementById("fullname").value;

    if (username === "") {
        alert("Username is required");
        return;
    }

    if (password === "") {
        alert("Password is required");
        return;
    }

    if (confirmPassword === "") {
        alert("Confirm Password is required");
        return;
    }

    if (fullname === "") {
        alert("Full Name is required");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    alert("You're registered\nUsername: " + username + "\nFull Name: " + fullname);
}
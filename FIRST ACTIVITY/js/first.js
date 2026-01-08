function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if ((username == "gyver") && (password == "1234")) {
    alert("login succesful!");
    }

    else {
        alert("username or password is incorrect")
    }
}
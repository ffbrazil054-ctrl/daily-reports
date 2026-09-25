function submitLogin() {
    let password = document.getElementById('passInput').value;
    if (password === "1234") {
        // Login success
    } else {
        alert("Incorrect Password!");
    }
}

function submitLogin() {
    let password = document.getElementById('passInput').value;
    if (password === "12345") {
        // Login success
    } else {
        alert("Incorrect Password!");
    }
}

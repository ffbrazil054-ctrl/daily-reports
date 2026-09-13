function submitLogin() {
    let password = document.getElementById('passInput').value;
    if (password === "F@rhan12") {
        // Login success
    } else {
        alert("Incorrect Password!");
    }
}
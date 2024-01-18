function init() {
    document.getElementById('username').disabled = true;
    document.getElementById('password').disabled = true;
    document.getElementById('city').disabled = true;
    document.getElementById('state').disabled = true;
    
    document.getElementById('existingUsername').disabled = true;
    document.getElementById('existingPassword').disabled = true;
}

function enableNewUser() {
    var inputsInSection3 = document.getElementById('section3').getElementsByTagName('input');
    for (var i = 0; i < inputsInSection3.length; i++) {
        inputsInSection3[i].disabled = true;
    }
    var inputsInSection2 = document.getElementById('section2').getElementsByTagName('input');
    for (var i = 0; i < inputsInSection2.length; i++) {
        inputsInSection2[i].disabled = false;
    }

}

function enableExistingUser() {
    var inputsInSection2 = document.getElementById('section2').getElementsByTagName('input');
    for (var i = 0; i < inputsInSection2.length; i++) {
        inputsInSection2[i].disabled = true;
    }
    var inputsInSection3 = document.getElementById('section3').getElementsByTagName('input');
    for (var i = 0; i < inputsInSection3.length; i++) {
        inputsInSection3[i].disabled = false;
    }
}

function loginNewUser() {
    var username = document.getElementById('username').value;
    alert("Welcome " + username);
    saveUserData(username, document.getElementById('password').value, document.getElementById('city').value, document.getElementById('state').value);
}

function loginExistingUser() {
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');
    var enteredUsername = document.getElementById('existingUsername').value;
    var enteredPassword = document.getElementById('existingPassword').value;

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        alert("Welcome back " + enteredUsername);
    } else {
        alert("Invalid");
    }
}

function saveUserData(username, password, city, state) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
}

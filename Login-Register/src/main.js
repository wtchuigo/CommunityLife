// List of Users
let users = [{
    username: "sammy",
    email: "testtest",
    password: "codify",
    password: "codify"
}];
const signUp = (e) => {
    e.preventDefault();
    let formData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        password: document.getElementById('password').value
    }
    users.push(formData);
    document.forms[0].reset();
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(users, '\t', 2);

    //saving to localStorage
    localStorage.setItem('MyUsers', JSON.stringify(users));
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', signUp);
});

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
});

function getUser() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < users.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == users[i].username && password == users[i].password) {
            alert("You have successfully logged in.");
            location.reload();
			// stop the function if this is found to be true
			return
		}else {
            if(username == users[i].username && password != users[i].password) {
                alert("Wrong password");
                location.reload();
                // stop the function if this is found to be true
                return
            }
        }
	}
    alert("Username or Password is not correct.");
    location.reload();
}
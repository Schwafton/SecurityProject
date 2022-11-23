let head = document.getElementById("header");
console.log(head);

let button = document.querySelector("button");

let username = document.querySelector("#username");
let password = document.querySelector("#password");
let usernameInput = "";
let passwordInput = "";

username.addEventListener("input", (e) => {
  usernameInput = e.target.value;
  console.log(`usernameInput is ${usernameInput}`);
});
password.addEventListener("input", (e) => {
  passwordInput = e.target.value;
  console.log(`passwordInput is ${passwordInput}`);
});

button.addEventListener("click", async () => {

  const body = { userName: 'poopy', password: passwordInput };

  console.log(body);

  try {
    let response = await fetch("http://localhost:5000/getUsers", {
        method: "PUT",
        body: JSON.stringify(body)
    });
    // let resObj = await response.json();
    // console.log(resObj);
  } catch (error) {
    console.log(error.message);
  }

  //   alert(`you entered ${usernameInput} for username`);
  //   console.log(username.innerText);
});

let head = document.getElementById("header");
console.log(head);

let button = document.querySelector("button");

let username = document.querySelector("#username");
let password = document.querySelector("#password");
usernameInput = "";

username.addEventListener("input", (e) => {
  usernameInput = e.target.value;
  console.log(usernameInput);
});

button.addEventListener("click", async () => {
  try {
    let response = await fetch("http://localhost:5000/getUsers");
    let resObj = await response.json();
    console.log(resObj);
  } catch (error) {
    console.log(error.message);
  }

  //   alert(`you entered ${usernameInput} for username`);
  //   console.log(username.innerText);
});

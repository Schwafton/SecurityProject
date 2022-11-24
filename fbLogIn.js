let head = document.getElementById("header");
console.log(head);

let form = document.querySelector(".fake-form");
let button = document.querySelector(".fake-button");

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let emailInput = "";
let passwordInput = "";

email.addEventListener("input", (e) => {
  emailInput = e.target.value;
  console.log(`usernameInput is ${emailInput}`);
});
password.addEventListener("input", (e) => {
  passwordInput = e.target.value;
  console.log(`passwordInput is ${passwordInput}`);
});

button.addEventListener("click", () => {

  const body = { email: emailInput, password: passwordInput };

  console.log(body);

  try {
    fetch("http://localhost:5000/getUsers", {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    // let resObj = await response.json();
    // console.log(resObj);
  } catch (error) {
    console.log(error.message);
  }
  // form.reset();

  //   alert(`you entered ${usernameInput} for username`);
  //   console.log(username.innerText);
});

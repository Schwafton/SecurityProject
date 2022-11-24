const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.put("/getUsers", (req, res) => {

  //     message: "poopy poops"
  // });
  // let data = req.json();
  // let { userName } = req.body;
  // console.log(`I have received the following data: ${req.body}`);
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`spear phishing server has started on port ${port}`);
});

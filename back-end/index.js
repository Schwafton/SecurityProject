const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from Express");
})

app.get('/getUsers', (req, res) => {
    // fs.open('users.txt', 'w', )
    res.json({
        message: "poopy poops"
    });
    console.log('poopy poops');
})

app.listen(port, () => {
    console.log(`bug tracker server has started on port ${port}`);
})
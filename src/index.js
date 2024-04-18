require('dotenv').config()
const express = require('express');
const cors = require('cors');
const { add } = require("./arithmetica");
const app = express();
app.use(cors());

const port=process.env.PORT;
app.get('/',(req,res)=>{
    res.send('Arithmetic service');
})

app.get('/add/:n/:m', (req, res) => {
    res.json(add(Number(req.params.n),Number(req.params.m)));
});

app.listen(port);
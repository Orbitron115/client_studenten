const express = require('express');

const app = express();
const port = 3000;
let cors = require('cors')
app.use(cors());
app.use(express.json());

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hallo wereld!");
});


app.post('/form', (req, res) => {

    console.log(req.body);

    let subject = req.body.subject;
    let email = req.body.email;
    let description = req.body.description;

    res.json({subject: subject, email : email, description: description});
    
});

app.listen(port, () => console.log(`Data API listening on port ${port}!`))

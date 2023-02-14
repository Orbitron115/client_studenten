import express, { json } from 'express';

const app = express();
const port = 3000;
import cors from 'cors';
app.use(cors());
app.use(json());

import { urlencoded, json as _json } from 'body-parser';

app.use(urlencoded({
    extended: true
}));
app.use(_json());

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

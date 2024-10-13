const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


const nodeData = require('./data/nodejs.json'); 


app.use(bodyParser.json());


app.post('/rke143', (req, res) => {
    const { name, code } = req.body;

    
    if (name === 'rke' && code === '143') {
        res.status(200).json(nodeData); 
    } else {
        res.status(401).json({ message: 'invalid credentials' }); 
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});



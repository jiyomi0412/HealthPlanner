const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/healins', (req, res) => {
    res.send([
        {
        'id':'1',
        'name':'최지영',
        'birth':'940412',
        'gender':'여자',
        'height':'169cm',
        'weight':'55kg'
        },
        {
            'id':'2',
            'name':'최지영',
            'birth':'940412',
            'gender':'여자',
            'height':'169cm',
            'weight':'55kg'
        },
        {
            'id':'3',
            'name':'최지영',
            'birth':'940412',
            'gender':'여자',
            'height':'169cm',
            'weight':'55kg'
        } 
    ]);
    });
    
    
    
app.listen(port, () => console.log(`Listening on port ${port}`));
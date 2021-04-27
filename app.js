const express = require('express')
var ActiveDirectory = require('activedirectory');
const app = express()
app.use(express.json())

app.use('/',(req,res)=>{   

    
    ad.authenticate(username, password, function(err, auth) {
    if (err) {
        console.log('ERROR: '+JSON.stringify(err));
        return;
    }
    
    if (auth) {
        console.log('Authenticated!');
    }
    else {
        console.log('Authentication failed!');
    }

    });
    
    res.send("A")
});

app.listen(4000, () => {})
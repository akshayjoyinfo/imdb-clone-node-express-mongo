const express = require('express');
const config = require('./config/index')
const app = express();


app.get('/',(req, res) => {
    res.send("All Working as expected");
});

app.listen(config.PORT, ()=>{
    console.log("IMDB-APi is listening to "+ JSON.stringify(config));
})


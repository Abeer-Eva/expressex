const { req, res} = require('express');
const express = require('express');
const app =express();
const PORT = 8000 ;

app.use(express.static('frontend'));
// app.get('/', (req, res) => {


//     res.sendFile(__dirname + '/frontend/index.html');
// });

// app.get('/style.css', (req, res) => {

// res.sendFile(__dirname + '/frontend/style.css')
// });

// app.get('/index.js', (req, res) => {

//     res.sendFile(__dirname + '/frontend/index.js')
//     });
    


// app.get('/test', (req, res) => {

//     res.send('test page');
// });


app.listen(PORT,() => {
    console.log(`Server started on port ${PORT}`);
} )
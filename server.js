const { req, res} = require('express');
const express = require('express');
const app =express();
const PORT = 8000 ;

app.use(express.static('frontend'));

const insults=[
    {
        insult: "Never hung poison on a fouler toad",
        play: "Rickard III"
      },
      {
        insult: "He thinks too much: such men are dangerous. ",
        play: "Julius Ceasar"
      }
];
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
app.get('/api/insult', (req, res) => {
const index =Math.floor(Math.random()*2);
const insult = insults[index];

res.send(JSON.stringify(insult));
// res.json(insult);
})

app.listen(PORT,() => {
    console.log(`Server started on port ${PORT}`);
} )
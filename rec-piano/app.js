const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Song=require("./models/song")

const port = process.env.PORT || 3000


app.use(express.json())
app.use(express.static("public"))
app.set("view engine", "ejs")


mongoose.connect("mongodb://localhost/newTone")
    .then(() => {
        console.log('good connection to DB');
    })
    .catch((err) => {
        console.log("bad connection to DB", err) ;
    })

    
app.get('/', (req, res) => {
    res.render('index')
  })
  
  app.post('/songs', async (req, res) => {
    const song = new Song({
      notes: req.body.songNotes
    })
  
    await song.save()
  
    res.json(song)
  })
  
  app.get('/songs/:id', async (req, res) => {
    let song
    try {
      song = await Song.findById(req.params.id)
    } catch (e) {
      song = undefined
    }
    res.render('index', { song: song })
  })
  


app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});






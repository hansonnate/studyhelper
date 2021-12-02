const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost:27017/study', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// Create a model for items in the Collection
const verseSchema = new mongoose.Schema({
  id: String,
  book: String,
  chapter: String,
  verse: String,
  content: String,
  notes: Array,
});


const Verse = mongoose.model('Verse', verseSchema);

// Create a new item to add to collection
app.post('/api/verses', async (req, res) => {
  console.log('Creating Verse');
  const verse = new Verse({
    id: req.body.id,
    book: req.body.book,
    chapter: req.body.chapter,
    verse: req.body.verse,
    content: req.body.content,
    notes: [],
  });
  try {
    console.log("Adding Verse");
   // console.log(verse);
    await verse.save();
    res.send(verse);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

 // Get a list of all of the items in the collection
 app.get('/api/verses', async (req, res) => {
   try {
     let items = await Verse.find();
     res.send(items);
   } catch (error) {
     console.log(error);
     res.sendStatus(500);
   }
 });

//Add a note
app.put('/api/verses/:id', async (req, res) => {
  try {
    let item = await Verse.findOne({
      id: req.params.id
    });
    console.log(req.body.topic);
    newNote = {
      note: req.body.note,
      topic: req.body.topic
    }
    item.notes.push(newNote);
    await item.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Delete a Verse
app.delete('/api/verses/:id', async (req, res) => {
  console.log("Deleting: " + req.params.id);
  try {
    await Verse.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.listen(3030, () => console.log('Server listening on port 3030!'));

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
});

// create a virtual paramter that turns the default _id field into id
verseSchema.virtual('id')
  .get(function() {
    return this._id.toHexString();
  });

verseSchema.set('toJSON', {
  virtuals: true
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

// // Get a list of all of the items in the collection
// app.get('/api/items', async (req, res) => {
//   try {
//     let items = await Item.find();
//     res.send(items);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

app.listen(3030, () => console.log('Server listening on port 3030!'));

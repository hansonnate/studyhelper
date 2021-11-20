import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.config.productionTip = false

let data = {
  verses: mock,
  collection: [],
  notes: {},
  number: 0,
  addedNote: '',
  addedTopic: '',
  addToCollection(id, book, chapter, verse, content) {
    this.collection.push({
      id: id,
      book: book,
      chapter: chapter,
      verse: verse,
      content: content,
      notes: []
      //note: "",
      //topic: "",
    });
  },
  addNote(id, note, topic) {
    for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i].id === id) {
        let newNote = {
          id: "note" + i.toString(),
          note: note,
          topic: topic,
        }
        this.collection[i].notes.push(newNote);
        //this.collection[i].note = note;
        //this.collection[i].topic = topic;
        //this.collection[i]['note'] = note;
        //this.collection[i].topic = topic;
      }
    }
  }
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

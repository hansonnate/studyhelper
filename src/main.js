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
      content: content
    });
  },
  addNote(id, book, chapter, verse) {
    if (!(this.number in this.notes))
      Vue.set(this.notes, this.number, new Array);
    this.notes[this.number].push({
      id: id,
      book: book,
      chapter: chapter,
      verse: verse,
      note: this.addedNote,
      topic: this.addedTopic
    });
  }
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

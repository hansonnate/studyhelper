import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.config.productionTip = false

let data = {
  verses: mock,
  collection: [],
  notes: [],
  addToCollection(id, book, chapter, verse, content) {
    this.collection.push({
      id: id,
      book: book,
      chapter: chapter,
      verse: verse,
      content: content
    });
  },
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

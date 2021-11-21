<template>
<div class="wrapper">
  <div class="verses">
    <div class="verse" v-for="verse in verses" :key="verse.id">
      <div class="info">
        <p>{{verse.book}} {{verse.chapter}}:{{verse.verse}}</p>
        <p>"{{verse.content}}"</p>
      </div>
      <div class="buttonholder">
        <button class="auto" v-on:click="addToCollection(verse.id, verse.book, verse.chapter, verse.verse, verse.content)">Add to Collection</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'VerseResult',
  props: {
    verses: Array
  },
  methods: {
    addToCollection(id, book, chapter, verse, content) {
      this.$root.$data.addToCollection(id, book, chapter, verse, content);
    },
    async addToDatabase(id, book, chapter, verse, content) {
      try {
        await axios.post("/api/verses", {
          id: id,
          book: book,
          chapter: chapter,
          verse: verse,
          content: content,
        });
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
.wrapper {

}

.verses {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.verse {
  //margin: 10px;
  margin-top: 50px;
  max-width: 1000px;
  border: 2px solid #D8BC3F;
}
.info {
  padding: 10px 30px;
}
.buttonholder {
 width: parent;
 margin-bottom: 10px;
 margin-top: -10px;
 //border: 2px solid black;
}
</style>

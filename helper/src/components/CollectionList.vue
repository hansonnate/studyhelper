<template>
<div class="wrapper">
  <div class="collection">
    <div class="verse" v-for="item in items" :key="item.id">
      <div class="info">
        <p>{{item.book}} {{item.chapter}}:{{item.verse}} <button v-on:click="deleteVerse(item)">Delete Verse</button></p>
        <p>"{{item.content}}"</p>
        <div class="addNote">
          <form v-on:submit.prevent="addNoteToDatabase(item.id, item.note, item.topic)">
            <input class="topicinput" v-model="item.topic" placeholder="Note Topic">
            <button type="submit">Save Note</button>
            <textarea v-model="item.note" placeholder="Type Thoughts Here"></textarea><br />
          </form>
          <p style="text-align:left"><u>Notes</u></p>
          <div class="notes" v-for="note in item.notes" :key="note.id">
            <p><i>{{note.topic}}:</i> "{{note.note}}"</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'CollectionList',
  props: {
    collection: Array,
    notes: Array,
    addedNote: String,
    addedTopic: String,

  },
  data() {
    return {
     items: [],
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    getNotes() {
      return this.$root.$data.notes;
    },
    addNote(id, note, topic) {
      this.$root.$data.addNote(id, note, topic);
      this.$root.$data.addedNote = this.addedNote;
      this.$root.$data.addedTopic = this.addedTopic;
      this.$root.$data.number = this.$root.$data.number + 1;
    },
    async addNoteToDatabase(id, note, topic) {
      try {
        await axios.put("/api/verses/" + id, {
          id: id,
          note: note,
          topic: topic,
        });
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async getItems() {
      try {
        let response = await axios.get("/api/verses");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteVerse(verse) {
      try {
        console.log("Deleteing: " + verse.book);
        await axios.delete("/api/verses/" + verse._id);
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.wrapper {

}
.collection {
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
textarea {
  width: 800px;
  height: 100px;

}
.topicinput {
  margin-bottom: 5px;
  margin-right: 2px;
}
.notes p {
  text-align: left;
}

</style>

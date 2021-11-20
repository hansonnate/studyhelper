<template>
<div class="wrapper">
  <div class="collection">
    <div class="verse" v-for="item in collection" :key="item.id">
      <div class="info">
        <p>{{item.book}} {{item.chapter}}:{{item.verse}}</p>
        <p>"{{item.content}}"</p>
        <div class="notes">
          <form v-on:submit.prevent="addNote(item.id, item.note, item.topic)">
            <input class="topicinput" v-model="item.topic" placeholder="Note Topic">
            <button type="submit">Save Note</button><br/>
            <textarea v-model="item.note" placeholder="Type Thoughts Here"></textarea><br />
          </form>
          <p style="text-align:left">Notes: </p>
          <div v-for="note in item.notes" :key="note.id">
            <p>{{note.topic}}: "{{note.note}}"</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CollectionList',
  props: {
    collection: Array,
    notes: Array,
    addedNote: String,
    addedTopic: String,

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
    }
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

</style>

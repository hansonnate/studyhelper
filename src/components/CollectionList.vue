<template>
<div class="wrapper">
  <div class="collection">
    <div class="verse" v-for="item in collection" :key="item.id">
      <div class="info">
        <p>{{item.book}} {{item.chapter}}:{{item.verse}}</p>
        <p>"{{item.content}}"</p>
        <div class="notes">
          <p style="text-align:left">Notes: <button id="addNoteButton">Add a note</button></p>
          <form v-on:submit.prevent="addNote">
            <input v-model="addedTopic" placeholder="Topic">
            <textarea v-model="addedNote"></textarea>
            <br />
            <button type="submit">Submit</button>
          </form>
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
    collection: Array
  },
  methods: {

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

</style>

<template>
  <div class="wrapper">
    <div class="image"><img src="/images/OpenBook.png" height="200px"></div>
    <div class="infocontent">
      <h1><strong>Your Personal Collection</strong></h1>
    </div>
    <CollectionList :collection="collection" />
  </div>
</template>

<script>
import CollectionList from "../components/CollectionList.vue"
export default {
  name: 'Collection',
  components: {
    CollectionList
  },
  data() {
    return {

    }
  },
  computed: {
    collection() {
      return this.$root.$data.collection;
    },
  },
}
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
.infocontent {
  font-family: 'Montserrat', sans-serif;
}

.image {
  margin-top: 50px;
}
</style>

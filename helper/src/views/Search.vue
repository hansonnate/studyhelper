<template>
  <div class="wrapper">
    <div class="image"><img src="/images/OpenBook.png" height="200px"></div>
    <div class="infocontent">
      <h1><strong>Search your favorite scripture</strong></h1>
    </div>
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
    <div v-if="searchText === ''">

    </div>
    <div v-else>
      <VerseResult :verses="verses" />
    </div>
  </div>
</template>

<script>
import VerseResult from "../components/VerseResult.vue"
export default {
  name: 'Search',
  components: {
    VerseResult
  },
  data() {
    return {
      searchText: '',

    }
  },
  computed: {
    verses() {
      return this.$root.$data.verses.filter(verse => verse.book.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
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

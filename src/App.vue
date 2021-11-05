<template>
  <div id="app">
    <div id="menu">
      <div id="brand">
        <router-link to="/">
          <img src="/images/StudyLogo.png">
        </router-link>
      </div>
      <div id="side">
        <router-link to="/">
          <div class="menu-item about">
            <p>Home</p>
          </div>
        </router-link>
        <router-link to="/search">
          <div class="menu-item search">
            <p> Search </p>
          </div>
        </router-link>
        <router-link to="/collection">
          <div class="menu-item collection">
            <p> Collection </p>
          </div>
        </router-link>
      </div>
    </div>
    <router-view/>
    <v-footer>
      <div class="footer">
        <p>© 2021 Study Helper, inc. ALL RIGHTS RESERVED. PROVO, UT <br> <a href="/">Githublink</a></p>
      </div>
    </v-footer>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "brand none side";
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;
  border-bottom: 2px solid #D8BC3F;
}

#menu a {
  color: #1DB6EC;
  font-weight: bold;

}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  //border: 2px solid #D8BC3F;
  border-radius: 10px;
  object-fit: cover;
  width: 225px;
  height: 75px;
}

#side {
  grid-area: side;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

}

#side img {
  width: 50px;

}

.menu-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
}

.menu-item p {
  margin: 0px;
}

.about,
.search,
.collection {
  margin: 0px 5px;
  border-bottom: 2px solid white;
}
.about:hover,
.search:hover,
.collection:hover {
  border-bottom: 2px solid #D8BC3F;
}
a {
  text-decoration: none;
}
.footer {
  width: 100%;
  background-color: white;
}
</style>

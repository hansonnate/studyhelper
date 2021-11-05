<template>
  <div class="home">
    <div class="infocontainer">
      <div class="infobox">
      <div class="cloudimage"><img src="/images/OpenBook.png"></div>
        <div class="infocontent">
          <h1><strong>What is Study Helper?</strong></h1>
          <p>Study Helper is a easy to use scripture collector that allows you to
             easily save your favorite verses. You can also take notes or write down
             thoughts to connect with the verses that you choose.</p>
           <h1><strong>Why Study the Book of Mormon?</strong></h1>
           <p>The Book of Mormon is another testament of Jesus Christ. Prophet
              Joseph Smith once said, "the Book of Mormon was the most correct
              of any book on earth, and the keystone of our religion, and a man
              would get nearer to God by abiding by its precepts, than by any
              other book." If this isn't reason enough to read the book everyday
              The Book of Mormon also includes fulness of the doctrine of Jesus
              Jesus Christ that was lost to the world for many years until this
              book was brought forth. In other words if you are trying to better
              your personal relationship with Christ and God, this book is for you.</p>
          <h1><strong>Study Advice</strong></h1>
          <p>This online portal is designed just for you and your peers who have
            participated in our research so you can access, and interact with,
            the results. Thanks again, we quite literally couldn’t do it without you.</p>
          <h1><strong>Other Resources</strong></h1>
          <p>LDS.org link</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  }
}
</script>
<style>
.infocontainer {
  display: flex;
  padding: 20px 0px;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
}
.infocontainer p {
  font-size: 20px;
}

.infobox {
  display: flex;
  flex-direction: column;
  width: 1200px;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
  margin: auto auto;
}
.infobox img {
  height: 200px;
}

.infocontent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 850px;
}
.infocontent h1 {
  text-align: center;
  border-bottom: 2px solid #D8BC3F;
  padding-bottom: 10px;
}
.infocontent p{
  margin-top: -5px;
  font-weight: bold;
  color: gray;
}


</style>

<template>
  <div class="infobox">
    <img :src="dImg" :alt="title" />
    <div>
      <h3>{{ title }}</h3>
    </div>
    <div>
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitlepageItem',
  props: {
    img: String,
    title: String,
    text: String
  },
  data: function () {
    return {
      dImg: '../assets/' + this.img
    };
  }
};
</script>

<style scoped>
.infobox {
  width: 80%;
  margin: 10px auto;
  padding: 15px;
  border-radius: 20px;
  background-color: #b4d6e1;
}
img {
  width: 200px;
  height: 200px;
  background-color: aqua;
}
h3 {
  font-size: 30px;
  color: #b5b5b5;
  text-shadow: 3px 3px 5px #000000;
}
</style>

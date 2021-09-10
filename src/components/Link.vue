<template>
  <div class="content">
    <span class="item">
      <img :src="getImgUrl(val.img)" alt="Logo" height="30" width="30">
      <a class="itemTitle" :href="val.link" target="_blank">{{ val.plattform }}</a>
    </span>
    <hr v-if="last">
  </div>
</template>

<script>
export default {
  name: 'TitlepageItem',
  props: {
    val: Object,
    last: Boolean,
  },
  data: function () {
    return {
      showContent: false,
    };
  },
  methods: {
    getImgUrl(pic) {
      return require('../assets/'+pic)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/variables/variables";

p {
  margin-top: 10px;
  margin-bottom: 10px;
}
.content {
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
}

img {
  border-radius: 50%;
}

hr{
  background-color: $fontDark ;
  height: 1.5px;
  border-radius: 1px;
  border: 0;
}

.item {
  display: flex;
  cursor: pointer;

  &Title {
    font-weight: bold;
    text-align: left;
    margin: 5px 0 5px 10px;
    width: calc(100% - 20px - 20px);
  }

  &Value {
    text-align: left;
    width: calc(100% - 100px - 40px);
    margin-left: 30px;
  }
}

</style>

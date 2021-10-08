<template>
  <div class="content">
    <span class="item">
      <img src="../assets/icons/Question.svg" alt="Question.svg" height="20" width="20">
      <h3 class="itemTitle">{{ teaser.headline }}</h3>
    </span>
    <p class="itemValue text-justify mr-4">{{ teaser.text }}</p>
  </div>
</template>

<script>
export default {
  name: 'TitlepageItem',
  props: {
    teaser: Object,
  },
  data: function () {
    return {
    };
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
  @apply shadow-xl p-4 mt-8 rounded-2xl;
  width: 48%;
  margin-bottom: 5px;
  background-color: $brand;
}
img {
  margin-top: 6px;
  height: 20px;
}
h3 {
  font-size: 24px;
  line-height: 28px;
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
    margin-left: 30px;
  }
}

</style>

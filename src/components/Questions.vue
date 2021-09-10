<template>
  <div class="content">
    <span class="item" @click="showContent=!showContent">
      <img src="../assets/Question.svg" alt="Question.svg" height="20" width="20">
      <h3 class="itemTitle">{{ val.field }}</h3>
      <img src="../assets/Arrow_Up.svg" alt="Question.svg" height="20" width="20" v-if="!showContent">
      <img src="../assets/Arrow_Down.svg" alt="Question.svg" height="20" width="20" v-if="showContent">
    </span>
    <p class="itemValue" v-if="showContent">{{ val.value }}</p>
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

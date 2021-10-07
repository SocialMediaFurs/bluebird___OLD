<template>
  <div class="contentbox">
    <div v-for="item in obj" class="item" :key="item">
      <p class="itemTitle">{{ item.field }}:&nbsp;</p>
      <p class="itemValue">{{ item.value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitlepageItem',
  props: {
    obj: Object,
  },
  data: function () {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
p {
  margin-top: 10px;
  margin-bottom: 10px;
}

.item {
  margin-bottom: 5px;
  display: flex;

  &Title {
    font-weight: bold;
    text-align: left;
    margin-left: 40px;
    width: 100px;
  }

  &Value {
    text-align: left;
    width: calc(100% - 100px - 40px);
    margin-right: 40px;
  }
}

</style>

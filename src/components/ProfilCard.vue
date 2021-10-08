<template>
  <router-link :to="val.link" class="ml-4">
    <div class="item rounded-2xl text-center pt-4">
      <img :src="getImgUrl(val.img)" alt="Logo" height="80" width="80" class="mx-auto rounded-full">
      <p class="itemTitle mt-4">{{ val.name }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ProfilCard',
  props: {
    val: Object,
  },
  methods: {
    getImgUrl(pic) {
      return require('../assets/'+pic)
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  width: 140px;
  background-color: #E5E5E5AB;
  height: 160px;
}
</style>

<template>
  <h1>Test</h1>
  <a class="itemTitle" :href="val.link" target="_blank">
    <div class="flip-card-container">
      <div class="flip-card">
        <div class="flip-card-front relative">
          <img v-if="val.financialInterest" :src="getImgUrl('icons/payIcon.svg')" alt="payIcon" class="absolute top-0 right-0 w-1/5 z-10">
          <img :src="getImgUrl(val.img)" alt="Logo" class="w-fit">
        </div>
        <div class="flip-card-back">
          <img v-if="val.financialInterest" :src="getImgUrl('icons/payIcon.svg')" alt="payIcon" class="absolute top-0 right-0 w-1/5 z-10">
          {{ val.plattform }}
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'TitlepageItem',
  props: {
    val: Object
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.flip-card-container {
  width: 200px;
  height: 200px;
  perspective: 1000px;

  &:hover .flip-card{
    transform: rotateY(180deg);
  }

  .flip-card {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;

    &-front, &-back {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: $brand;
      backface-visibility: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      border-radius: 20px;
    }

    img {
      border-radius: 20px;
      width: 200px;
    }

    &-back {
      transform: rotateY(180deg);
    }
  }
}
.item {
  display: flex;
  width: 200px;
  cursor: pointer;
}

</style>

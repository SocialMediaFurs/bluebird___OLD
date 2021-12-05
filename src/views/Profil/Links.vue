<template>
  <div>
    <h2>Meine Links</h2>
    <div class="flex flex-row flex-wrap gap-8 justify-center">
      <Link v-for="(val, key) in links" :key="key" :val="val" />
    </div>
  </div>
</template>

<script>
import Link from '../../components/Link.vue';

export default {
  components: {
    Link
  },
  data: function () {
    return {
      links: [
        {
          link: "https://twitter.com/SneakerMaster95",
          img: "logos/twitter.png",
          plattform: "Twitter",
          financialInterest: false
        },
        {
          link: "https://twitter.com/SneakerMaster95",
          img: "logos/darkTwitter.png",
          plattform: "Dark Twitter",
          financialInterest: true
        },
        {
          link: "t.me/noatak95",
          img: "logos/telegram.png",
          plattform: "Telegram",
          financialInterest: false
        },
        {
          link: "https://www.romeo.com/profile/SneakerBoy95",
          img: "logos/romeo.png",
          plattform: "Romeo",
          financialInterest: false
        },
        {
          link: "https://onlyfans.com",
          img: "logos/onlyfans.png",
          plattform: "OnlyFans",
          financialInterest: true
        },
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.questions {
  margin-top: 30px;
}
</style>

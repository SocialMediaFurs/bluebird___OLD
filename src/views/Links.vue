<template>
  <div>
    <h2>Meine Links</h2>
    <div class="contentbox questions">
      <div v-for="(val, key) in links" :key="key">
        <Link :val="val" :last="key !== Object.keys(links).length - 1" />
      </div>
    </div>

  </div>
</template>

<script>
import Link from '../components/Link.vue';

export default {
  components: {
    Link
  },
  data: function () {
    return {
      links: [
        {
          link: "https://twitter.com/SneakerMaster95",
          img: "twitter.png",
          plattform: "Twitter"
        },
        {
          link: "https://twitter.com/SneakerMaster95",
          img: "darkTwitter.png",
          plattform: "Dark Twitter"
        },
        {
          link: "t.me/noatak95",
          img: "telegram.png",
          plattform: "Telegram"
        },
        {
          link: "https://www.romeo.com/profile/SneakerBoy95",
          img: "romeo.png",
          plattform: "Romeo"
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

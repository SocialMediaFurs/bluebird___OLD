<template>
  <div class="about">
    <h1>NSFW Bereich - Fetisch Liste</h1>

    <div class="contentbox questions">
      <div v-for="(val, key) in profileObj.questions" :key="key">
        <Questions :val="val" :last="key !== Object.keys(profileObj).length" />
      </div>
    </div>

    <div class="allKinks">
      <span v-for="(val, key) in profileObj.kinks" :key="key">
        <Kink :val="val"></Kink>
      </span>
    </div>

  </div>
</template>
<script>
import Questions from '../components/Questions.vue';
import Kink from '../components/Kink.vue';

export default {
  components: {
    Kink,
    Questions
  },
  data: function () {
    return {
      profileObj: {
        kinks: [
          {
            field: "Sneaker",
            orientation: 5,
            like: 6,
            pro: [
              'lecken',
              'sniffen',
              'vollwixxen'
            ],
            con: [
              'kaputt machen'
            ],
            disable: true
          },
          {
            field: "Socken",
            orientation: 5,
            like: 6,
            pro: [
              'smell',
              'sniffen',
              'vollwixxen'
            ],
            con: [
              'kaputt machen'
            ],
            disable: true
          },
          {
            field: "Füße",
            orientation: 5,
            like: 6,
            pro: [
              'lecken',
              'sniffen',
              'vollwixxen'
            ],
            con: [],
            disable: true
          },
          {
            field: "Breathplay",
            orientation: 4,
            like: 5,
            pro: [],
            con: [
              'Ohnmacht'
            ],
            disable: true
          },
        ],
        questions: [
          {
            field: "Wer bin ich?",
            value: "Ich bin ..."
          },
          {
            field: "Was sind meine Hobbys?",
            value: "Meine Hobbys sind ...."
          },
          {
            field: "Kann man mich kontaktieren?",
            value: "Ja, du kannst mich sehr gerne Kontaktieren, gucke dabei einfach auf die Seite 'Links'"
          },
        ]
      }
    };
  }
};
</script>

<style scoped lang="scss">
.allKinks {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  span {
    margin: 10px;
  }
}
</style>

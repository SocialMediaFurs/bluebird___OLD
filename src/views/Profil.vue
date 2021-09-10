<template>
  <div>
    <h2>Über Mich</h2>
    <General :obj="profileObj" />
    <div class="contentbox questions">
      <div v-for="(val, key) in profileObj.questions" :key="key">
        <Questions :val="val" :last="key !== Object.keys(profileObj).length" />
      </div>
    </div>

  </div>
</template>

<script>
import Questions from '../components/Questions.vue';
import General from '../components/General.vue';

export default {
  components: {
    Questions,
    General
  },
  data: function () {
    return {
      profileObj: {
        general: [
          {
            field: "Name",
            value: "Akuma oder Noa (kurz für Noatak)"
          },
          {
            field: "Alter",
            value: "25"
          },
          {
            field: "Wohnort",
            value: "Berlin"
          },
          {
            field: "Beruf",
            value: "Ausbildung zum Fachinformatiker Anwendungsentwicklung"
          },
          {
            field: "Sexualität",
            value: "Bi"
          }
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
.questions {
  margin-top: 30px;
}
</style>

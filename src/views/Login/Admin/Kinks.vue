<template>
  <div class="admin">
    <h1>Admin Bereich - Fetisch Liste</h1>
    <span class="p-float-label">
      <InputText id="kinkname" type="text" v-model="value" />
      <label for="kinkname" id="kinkname">Username</label>
    </span>
  </div>
</template>
<script>
import InputText from 'primevue/inputtext';

export default {
  components: {
    InputText
  },
  data: function () {
    return {
      newKink: {
        name: "",
        description: "",

      },
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

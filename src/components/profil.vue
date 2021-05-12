<template>
  <div class="infobox">
    <div :v-for="item in profileObj1" class="item">
      <p>{{ item }}</p>
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
      profileObj1: [
        "Akuma oder Noa (kurz für Noatak)",
        "25",
        "Berlin",
        "Ausbildung zum Fachinformatiker Anwendungsentwicklung",
        "Bi (wobei ich nur Erfahrung mit Männern hatte)"
      ],
      profileObj: [
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
          value: "Bi (wobei ich nur Erfahrung mit Männern hatte)"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.infobox {
  display: none;
  width: 80%;
  height: 330px;
  margin: 10px auto;
  padding: 15px;
  border-radius: 20px;
  background-color: #b4d6e1;
}

.item {
  margin-bottom: 5px;
}

</style>

<template>
  <div class="">
    <h1 class="text-center">SM - Beziehung zwischen</h1>
    <div class="flex">
      <div class="text-center w-1/2">
        <h2 class="text-center">Sklave</h2>
        <p class="text-xl font-bold">{{ relation.slave.name }}</p>
      </div>
      <div class="text-center w-1/2">
        <h2 class="text-center">Master</h2>
        <p class="text-xl font-bold">{{ relation.master.name }}</p>
      </div>
    </div>
    <TeaserBlock :teaser="relation.teaser" class="m-auto"></TeaserBlock>
    <Button label="Neues Regelset erstellen" v-if="relation.rules.length === 0" @click="writeRules = !writeRules"/>
    <div v-if="writeRules" id="myNav" :class="{ 'navbar_open': writeRules, 'navbar': !writeRules }">
      <div>
        <Button label="Neues Regelset speichern" @click="writeRules = !writeRules"/>
      </div>
    </div>
  </div>
</template>

<script>
import TeaserBlock from "../../components/TeaserBlock";
import Button from 'primevue/button';

export default {
  components: {
    TeaserBlock,
    Button
  },
  props: ['id'],
  data: function () {
    return {
      showNavbar: false,
      showNSFW: false,
      writeRules: false,
      relation: {
        slave: {
          name: 'Akuma'
        },
        master: {
          name: 'Zic'
        },
        teaser: {
          headline: '',
          text: 'Dies ist der Teaser Text. Hier steht die Einleitung zur Sklaven-Master Beziehung.'
        },
        rules: [],
        punishment: {

        }
      },
    };
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },
  created() {
  },
  updated() {
  },
};
</script>

<style>
.background-transition {
  background: linear-gradient(360deg, rgba(73, 59, 168, 0.74) 0%, #3362A9 57.29%);
}
</style>

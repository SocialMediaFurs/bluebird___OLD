<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <titlepage-item
      text="Gebe die einfach wichtigsten Infos über dich Preis."
      title="Einfach Vorstellen"
    />
    <titlepage-item
      text="Finde schnell und einfach die Wichtigsten Informationen über die hinterlegten User herraus"
      title="Einfacher Überblick"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import TitlepageItem from '../components/TitlepageItem.vue';

export default {
  name: 'Home',
  components: {
    //  HelloWorld,
    TitlepageItem
  }
};
</script>

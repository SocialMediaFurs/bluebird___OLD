<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Profil></Profil>
    <titlepage-item
      img="test.jpg"
      text="Gebe die einfach wichtigsten Infos über dich Preis."
      title="Einfach Vorstellen"
    />
    <titlepage-item
      img="test.jpg"
      text="Finde schnell und einfach die Wichtigsten Informationen über die hinterlegten User herraus"
      title="Einfacher Überblick"
    />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/Link.vue'
import TitlepageItem from '../../../components/TitlepageItem.vue';
import Profil from "../../../components/General";

export default {
  name: 'Home',
  components: {
    Profil,
    //  HelloWorld,
    TitlepageItem
  }
};
</script>

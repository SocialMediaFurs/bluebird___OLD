<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <titlepage-item img="test2.jpg" text="Gebe die einfach wichtigsten Infos über dich Preis." title="Einfach Vorstellen"/>
    <titlepage-item img="test.jpg" text="Finde schnell und einfach die Wichtigsten Informationen über die hinterlegten User herraus" title="Einfacher Überblick"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TitlepageItem from '../components/TitlepageItem.vue'

export default {
  name: 'Home',
  components: {
  //  HelloWorld,
    TitlepageItem
  }
}
</script>

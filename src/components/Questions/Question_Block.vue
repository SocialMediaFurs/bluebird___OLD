<template>
  <Questions v-for="(val, key) in allQuestions" :key="key" :question="val" class="contentbox questions"/>
</template>

<script>
import Questions from './Questions.vue';

export default {
  components: {
    Questions,
  },
  props: {
    allQuestions: Object,
  }
};
</script>

<style scoped lang="scss">
.questions {
  margin-top: 30px;
}
</style>

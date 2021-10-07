<template>
  <div class="contentbox questions">
    <div v-for="(val, key) in allQuestions" :key="key">
      <Questions :question="val" :last="key !== Object.keys(allQuestions).length" />
    </div>
  </div>
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

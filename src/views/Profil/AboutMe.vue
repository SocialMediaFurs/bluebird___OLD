<template>
  <div>
    <h2>Über Mich</h2>
    <General :obj="profileObj.general" />
    <Question_Block :all-questions="profileObj.questions" />
  </div>
</template>

<script>
import Question_Block from '../../components/Questions/Question_Block.vue';
import General from '../../components/General.vue';
import data from '../../store/data.json';

export default {
  components: {
    Question_Block,
    General
  },
  data: function () {
    return {
      profileObj: {}
    };
  },
  created() {
    data.forEach(element => {
      if(this.$route.params.user.toLowerCase() === element.Name) {
        //this.$store.commit("setCurrentUser", element.Name)
        //this.$store.dispatch("setAllGames");
        this.profileObj = element.ProfilePage;
      }
    })
  },
};
</script>

<style scoped lang="scss">
.questions {
  margin-top: 30px;
}
</style>

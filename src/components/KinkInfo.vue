<template>
  <div class="kinkinfoBox">
    <div class="headline">
      <h3>{{ title }}</h3>
    </div>
    <div class="textBox">
      <p>
        {{ text }}
      </p>
    </div>
    <button>Erfahre mehr</button>
  </div>
</template>

<script>
export default {
  name: "KinkInfo",
  props: {
    title: String,
    text: String
  }
}
</script>

<style scoped>
  .kinkinfoBox {
    margin: 20px;
    padding: 15px;
    width: 300px;
    background-color: #42b983;
  }
  p {
    white-space: pre;
  }
</style>
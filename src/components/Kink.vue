<template>
    <div>
        <table>
            <tbody>
                <tr>
                    <td>
                        <h3>{{ title }}</h3>
                    </td>
                    <td>
                        <table>
                            <tr>
                                <td></td>
                                <td>{{ value * 10 }}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>A</td>
                                <td><input type="range" min="0" max="10" v-model="value" class="slider" id="myRange"></td>
                                <td>B</td>
                            </tr>
                        </table>
                    </td>
                    <td>
                        <table>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: "Kink",
  props: {
    title: String,
  },
  data: function() {
      return {
          value: 10
      }
  },
}
</script>

<style scoped>
    div {
        width: 500px;
        margin: 15px auto;
        background-color: aliceblue;
    }
    table {
        margin: 10px;
    }
</style>
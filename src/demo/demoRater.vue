<template>
  <div>
    <h2>打星</h2>
    <div title="Nomal Usage">
    <rater v-model="data3" slot="value"></rater>
    </div>
    <div title="change color">
      <rater v-model="data3" slot="value" :max="6" active-color="#04BE02"></rater>
    </div>
    <div>
      <rater v-model="data4" slot="value" star="♡" active-color="red" :margin="4"></rater>
      <rater v-model="data5" slot="value" star="☻" active-color="#FF9900" :margin="4"></rater>
      <rater v-model="data5" slot="value" star="✩" active-color="#FF9900" :margin="4"></rater>
      <rater v-model="data5" slot="value" star="囧" active-color="#FF9900" :margin="4"></rater>
    </div>
  </div>
</template>

<script>
  import Rater from "../components/Rater";
  export default {
    name: "demoRater",
    data(){
      return{
        data1: 0,
        data2: 5,
        data3: 5,
        data4: 3,
        data41: 3.7,
        data42: 3.5,
        data5: 3,
        data6: 3
      }
    },
    components:{
      Rater
    }
  }
</script>

<style scoped>
div{
  margin-top: 10px;
}
</style>

<template>
  <div class="radio">
    <h2>单选框</h2>
    <div class="row">
      <h3>基本样式</h3>
      <d-radio label="1" v-model="gender" name="male">男</d-radio>
      <d-radio label="2" v-model="gender" name="female">女</d-radio>
    </div>
    <div class="row">
      <h3>自定义颜色</h3>
      <d-radio label="1" v-model="gender" name="male" color="green"
      >男</d-radio
      >
      <d-radio label="2" v-model="gender" name="female" color="pink"
      >女</d-radio
      >
    </div>
    <div class="row">
      <h3>拟态</h3>
      <d-radio label="1" v-model="gender" name="male" mimicry>男</d-radio>
      <d-radio label="2" v-model="gender" name="female" mimicry>女</d-radio>
    </div>
    <div class="row">
      <h3>radio组</h3>
      <d-radio-group v-model="gender">
        <d-radio label="1" name="male">男</d-radio>
        <d-radio label="2" name="female">女</d-radio>
      </d-radio-group>
    </div>
  </div>
</template>

<script>
  import DRadioGroup from "../components/Radio-group";
  import DRadio from "../components/Radio";
  export default {
    name: "demoRadio",
    data(){
      return {
        gender: '1',
      }
    },
    components:{
      DRadio,
      DRadioGroup
    }
  }
</script>

<style scoped>

</style>

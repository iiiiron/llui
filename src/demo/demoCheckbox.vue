<template>
  <div class="checkout">
    <h2>复选框</h2>
    <div class="row">
      <h3>基础样式</h3>
      <d-checkbox name="read" label="1" v-model="checkboxChoice"></d-checkbox>
    </div>

    <div class="row">
      <h3>自定义颜色</h3>
      <d-checkbox
              name="read"
              label="1"
              v-model="checkboxChoice"
              activeColor="orange"
      ></d-checkbox>
    </div>
    <div class="row">
      <h3>拟物样式</h3>
      <d-checkbox
              name="read"
              label="1"
              v-model="checkboxChoice"
              mimicry
      ></d-checkbox>
    </div>
    <div class="row">
      <h3>禁用</h3>
      <d-checkbox
              name="read"
              label="1"
              v-model="checkboxChoice"
              disabled
      ></d-checkbox>
    </div>
    <div class="checkboxGroup">
    <h2>复选框组</h2>
    <div class="row">
      <d-checkbox-group v-model="checkedArray">
        <d-checkbox name="apple" label="1">苹果</d-checkbox>
        <d-checkbox name="banana" label="2">香蕉</d-checkbox>
        <d-checkbox name="peach" label="3">桃子</d-checkbox>
      </d-checkbox-group>
    </div>
  </div>
  </div>

</template>

<script>
  import DCheckbox from "../components/Checkbox";
  import DCheckboxGroup from "../components/Checkbox-group";
  export default {
    name: "demoCheckbox",
    data(){
      return {
        checkboxChoice: false,
        checkedArray: ['1', '3'],
      }
    },
    components:{
      DCheckbox,
      DCheckboxGroup
    }
  }
</script>

<style scoped>

</style>

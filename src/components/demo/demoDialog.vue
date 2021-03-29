<template>
  <div>
  <div class="row">
    <h3>点击事件</h3>
    <d-button type="primary" @click="sayHello">say hello</d-button>
  </div>
  <div class="dialog">
    <d-button type="primary" @click="dialogVisiable = true"
    >显示对话框</d-button
    >
    <d-dialog
            title="tip"
            top="200px"
            :visiable.sync="dialogVisiable"
    >
      <template v-slot:title>
        <span>提示</span>
      </template>

      <span>这是一段信息</span>
      <template v-slot:footer>
        <d-button @click="dialogVisiable = false">取消</d-button>
        <d-button type="primary" @click="dialogVisiable = false"
        >确定</d-button
        >
      </template>
    </d-dialog>
  </div>
  </div>
</template>

<script>
  import DDialog from "../Dialog";
  import DButton from "../Button"
  export default {
    name: "demoDialog",
    components:{
      DDialog,
      DButton
    },
    data(){
      return {
        dialogVisiable: false,
      }
    },
    methods:{
      sayHello() {
        window.alert('hello')
      },
      closeDialog(value) {
        this.dialogVisiable = value
      }
    }
  }
</script>

<style scoped>
  .row{
    margin-bottom:20px;
  }

</style>


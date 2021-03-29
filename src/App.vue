<template>
  <div id="app">
    <demo-button></demo-button>
    <demo-dialog></demo-dialog>
  </div>
</template>
<script>
  import demoButton from "./components/demo/demoButton";
  import demoDialog from "./components/demo/demoDialog";


  export default {
    data(){
      return {

      }
    },
    components:{
      demoButton,
      demoDialog
    },
    methods:{

    }
  }

</script>

<style lang="scss">

  .input {
    & .d-input {
      width: 18vw;
    }
  }

  .formItem {
    .d-input {
      width: 20vw;
    }
  }
</style>

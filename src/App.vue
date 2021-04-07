<template>
  <div id="app">
    <demo-button></demo-button>
    <demo-dialog></demo-dialog>
    <demo-radio></demo-radio>
    <demo-checkbox></demo-checkbox>
    <demo-rater></demo-rater>
  </div>
</template>
<script>
  import demoButton from "./demo/demoButton";
  import demoDialog from "./demo/demoDialog";
  import demoRadio from "./demo/demoRadio";
  import demoCheckbox from "./demo/demoCheckbox";
  import demoRater from "./demo/demoRater";

  export default {
    data(){
      return {

      }
    },
    components:{
      demoButton,
      demoDialog,
      demoRadio,
      demoCheckbox,
      demoRater,
    },
    methods:{

    }
  }

</script>

<style lang="scss">

</style>

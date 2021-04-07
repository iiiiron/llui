<template>
  <label :class="['d-radio',isChecked ? 'is-Checked' : '']">
    <span class="d-radio__input">
      <span :class="['d-radio__inner', mimicry ? 'is-mimicry' : '']"
            :style="{
          borderColor: color && isChecked ? color : '#dcdfe6',
          backgroundColor: color && isChecked ? color : '#ffffff'
        }"></span>
      <input
              type="radio"
              class="d-radio__original"
              :value="label"
              :name="name"
              v-model="model"
      />
      <span class="d-radio__label">
        <slot>{{label}}</slot>
      </span>
    </span>
  </label>
</template>

<script>
  export default {
    name: "DRadio",
    data(){
      return{}
    },
    methods:{},
    comments:{
    },
    inject:{
      RadioGroup:{
        default:''
      }
    },
    props:{
      label:{
        type:[String,Number,Boolean],
        default: ""
      },
      value:null,
      name:{
        type:String,
        default:''
      },
      color:{
        type:String,
        default:'#409eff'
      },
      mimicry: {
        type: Boolean,
        default: false
      }
    },created() {},
    mounted() {},
    computed:{
      model:{
        get(){
          return this.isGroup ? this.RadioGroup.value : this.value
        },
        set(value){
          this.isGroup
           ? this.RadioGroup.$emit('input',value)
            : this.$emit('input',value)
        }
      },
      isGroup() {
        // 判断是否被radiogroup包裹
        return !!this.RadioGroup
      },
      isChecked() {
        return this.label === this.model
      }
    },
    watch(){}
  }
</script>

<style scoped>

</style>

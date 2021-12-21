<template>
  <span class="default-text">
    {{ scope.row[col.prop]}}
  </span>
</template>
<script>
import {defineComponent, toRefs} from "vue";

export default defineComponent({
  name: 'defaultText',
  props:{
    scope:{
      type: Object,
      default(){
        return {}
      }
    },
    col:{
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup(props){
    const {scope, col} = toRefs(props)
    return {
      scope,
      col
    }
  }
})
</script>

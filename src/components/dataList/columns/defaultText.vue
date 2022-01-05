<template>
  <span class="default-text">{{ scope.row[col.prop] }}</span>
</template>
<script lang="ts">
import { defineComponent, toRefs } from "vue";

interface Iprops {
  scope: any,
  col: any
}

export default defineComponent({
  name: 'defaultText',
  props: {
    scope: {
      type: Object,
      default() {
        return {}
      }
    },
    col: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup(prop: Iprops) {
    const { scope, col } = toRefs(prop)
    
    return {
      scope,
      col
    }
  }
})
</script>

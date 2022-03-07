<template>
  <span class="default-text">{{ scope.row[col.prop] }}</span>
</template>
<script lang="ts" setup>
import { toRefs, defineProps, withDefaults } from "vue";

interface Iprops {
  scope: any,
  col: any
}

const props = withDefaults(defineProps<Iprops>(), {
  scope: {},
  col: {}
})

const { scope, col } = toRefs(props)

</script>

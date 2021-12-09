<template>
    <baseLayout></baseLayout>
</template>

<script>
import {defineComponent} from "vue";
import baseLayout from '@/layout/baseLayout.vue'

export default defineComponent({
  name: 'App',
  components: {
    baseLayout
  }
})
</script>

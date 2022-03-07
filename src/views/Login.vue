<template>
  <XForm></XForm>
</template>

<script lang="ts">
import XForm from "../components/form/xForm.vue"
import { defineComponent } from "vue"
export default defineComponent({
  name: "Login",
  components: {
    XForm
  }
}) 
</script>

<style scoped>
</style>

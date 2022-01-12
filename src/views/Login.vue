<template>
  <h1>登录页面</h1>
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

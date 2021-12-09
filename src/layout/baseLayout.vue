<template>
  <el-container>
    <el-aside width="auto">
      <x-menu></x-menu>
    </el-aside>
    <el-container>
      <el-header>
        <x-header></x-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import xMenu from '@/layout/components/xMenu.vue';
import xHeader from "@/layout/components/xHeader.vue"

export default defineComponent({
  name: 'baseLayout',
  components:{
    xMenu,
    xHeader
  }

})
</script>
<style lang="scss" scoped>
.el-container,el-aside{
  height: 100%;
}
.el-header{
  border-bottom: 1px solid var(--el-border-color-base);
}


</style>

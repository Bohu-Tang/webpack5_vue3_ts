<template>
  <el-menu
    class="el-menu-vertical"
    :default-active="activeRoute"
    :collapse="isCollapsed"
    :router="true"
  >
    <el-menu-item v-for="item in routers" :index="item.path" :route="item" @click="menuItemClick">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>{{ item.meta.title }}</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from "vuex";
import {
  Setting,
} from '@element-plus/icons-vue'
import { routes } from '@/router/index';

const routers: any = ref(routes)

let activeRoute = ref<string>('/')
onMounted(() => {
  let currentRoute = window.location.pathname
  activeRoute.value = currentRoute;
})


// 菜单点击事件
const menuItemClick = (item: any) => {
  console.log(item)
}
// 侧边栏展开收起
const store = useStore();
const isCollapsed = computed(() => store.state.setting.isCollapsed)


</script>

<style lang="scss">
.el-menu {
  height: 100%;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
</style>

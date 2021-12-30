<template>
  <el-menu class="el-menu-vertical" default-active="/" :collapse="isCollapsed" :router="true">
    <el-menu-item v-for="item in routers" :index="item.path" :route="item" @click="menuItemClick">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>{{ item.meta.title }}</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from "vuex";
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
import { routes } from '@/router/index';

export default defineComponent({
  name: 'xMenu',
  components: {
    Location,
    Document,
    Setting,
    IconMenu,
  },
  setup() {
    // 获取所有路由
    const routers = ref(routes)

    // 菜单点击事件
    const menuItemClick = (item: any) => {
      console.log(item)
    }
    // 侧边栏展开收起
    const store = useStore();
    const isCollapsed = computed(() => store.state.setting.isCollapsed)

    return {
      isCollapsed,
      routers,
      menuItemClick
    }
  },
})
</script>

<style lang="scss">
.el-menu {
  height: 100%;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
</style>

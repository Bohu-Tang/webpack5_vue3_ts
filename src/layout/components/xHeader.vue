<template>
  <div class="x-header">
    <div class="collapse-container">
      <!--      展开-->
      <el-icon @click="toggleCollapse" v-show="isCollapsed">
        <expand/>
      </el-icon>
      <!--      收起-->
      <el-icon @click="toggleCollapse" v-show="!isCollapsed">
        <fold/>
      </el-icon>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {defineComponent, computed} from "vue";
import {Expand, Fold} from "@element-plus/icons-vue";
import {useStore} from "vuex";

const store = useStore();

function toggleCollapse():void {
  store.commit('setting/toggleCollapsed')
}

let isCollapsed= computed(()=> store.state.setting.isCollapsed)


defineComponent({
  name: "xHeader",
  components: {
    Expand,
    Fold
  }
})
</script>

<style lang="scss" scoped>
.x-header {
  display: flex;
  height: 100%;
  align-items: center;
}

.collapse-container {
  height: 100%;
  display: flex;
  align-items: center;

  .el-icon {
    width: 30px;
    height: 30px;

    svg {
      width: 30px;
      height: 30px;
    }
  }
}

</style>

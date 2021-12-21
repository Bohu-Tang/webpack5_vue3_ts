<template>
  <div class="data-list">
    列表组件测试
    <el-table :data="data" :style="{width}" :border="true">
      <el-table-column v-for="(col, index) in columns" :key="index" :label="col.label"
                       :width="col.width">
        <template #default="scope">
          <component :is="col.type" :scope="scope" :col="col"></component>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {defineComponent, toRefs} from "vue";
import customColumns from './columns/index';

export default defineComponent({
  name: "dataList",
  components: {
    ...customColumns
  },
  props: {
    // 列表数据
    data: {
      type: Array,
      default() {
        return []
      }
    },
    // 列配置
    columns: {
      type: Array,
      default() {
        return []
      }
    },
    // 表格宽度
    width: {
      type: String,
      default: '100%'
    }
  },
  setup(props) {
    const {data, columns, width} = toRefs(props)
    return {
      columns, // 列配置
      data, // 列表数据
      width, // 列表宽度
    }
  }
})
</script>

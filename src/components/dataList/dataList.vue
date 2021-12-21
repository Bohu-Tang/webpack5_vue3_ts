<template>
  <div class="data-list">
    <el-table
      ref="dataList"
      :data="data"
      :style="{width}"
      v-loading="loading"
      v-bind="attrs"
    >
      <el-table-column v-if="selection" type="selection" width="55"/>
      <el-table-column
        v-for="(col, index) in columns"
        :key="index"
        :label="col.label"
        :width="col.width"
        :show-overflow-tooltip="col.showOverflowTooltip"
      >
        <template #default="scope">
          <component :is="col.type" :scope="scope" :col="col"></component>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {defineComponent, toRefs, ref} from "vue";
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
    },
    // 列表加载状态
    loading: {
      type: Boolean,
      default: false
    },
    // 是否启用多选
    selection: {
      type: Boolean,
      default: false
    }

  },
  setup(props, context) {
    const {data, columns, width, loading, selection} = toRefs(props); // 读取组件参数
    const {attrs} = context; // 读取额外参数
    // const {emit} = context; // 读取方法

    return {
      attrs, // 额外参数(props中没定义的属性参数)
      columns, // 列配置
      data, // 列表数据
      width, // 列表宽度
      loading, // 列表加载状态
      selection, // 是否启用多选功能
    }
  }
})
</script>

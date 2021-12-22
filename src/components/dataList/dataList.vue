<template>
  <div class="data-list">
    <!--    表格-->
    <el-table
      ref="dataList"
      :data="data"
      :style="{width}"
      v-loading="loading"
      v-bind="attrs"
    >
      <!--      列索引-->
      <el-table-column v-if="showIndex" type="index" width="50"/>
      <!--      多选列-->
      <el-table-column v-if="selection" type="selection" width="55"/>
      <!--      普通列-->
      <el-table-column
        v-for="(col, index) in columns"
        :key="index"
        :label="col.label"
        :width="col.width"
        :show-overflow-tooltip="col.showOverflowTooltip"
      >
        <template #default="scope">
          <!--          自定义列组件-->
          <component :is="col.type" :scope="scope" :col="col"></component>
        </template>
      </el-table-column>
    </el-table>
    <!--    分页器-->
    <div v-if="showPage" class="pagination" :style="{justifyContent:pagePosition}">
      <el-pagination
        v-model:currentPage="pageParam.displayStart"
        v-model:page-size="pageParam.displayLength"
        :page-sizes="[10, 30, 50, 100]"
        layout="total, prev, pager, next, sizes, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {defineComponent, toRefs, ref, onUpdated, reactive} from "vue";
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
    },
    // 是否显示索引列
    showIndex: {
      type: Boolean,
      default: false
    },
    // 是否显示分页器
    showPage: {
      type: Boolean,
      default: true
    },
    // 分页器位置
    pagePosition: {
      type: String,
      default: 'right'
    }

  },
  setup(props, context) {
    const {data, columns, width, loading, selection, showIndex, pagePosition, showPage} = toRefs(props); // 读取组件参数
    const {attrs} = context; // 读取额外参数

    // 分页信息处理
    let pageParam = reactive({displayStart: 1, displayLength: 10})
    onUpdated(() => {
      console.log('当前页：', pageParam.displayStart)
      console.log('一页多少条：', pageParam.displayLength)
    })


    return {
      attrs, // 额外参数(props中没定义的属性参数)
      columns, // 列配置
      data, // 列表数据
      width, // 列表宽度
      loading, // 列表加载状态
      selection, // 是否启用多选功能
      showIndex, // 是否显示索引列
      showPage, // 是否显示分页器
      pagePosition, // 分页器位置
      pageParam, // 分页参数
    }
  }
})
</script>
<style>
.pagination {
  display: flex;
  align-items: center;
  height: 50px;
}
</style>

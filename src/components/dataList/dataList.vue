<template>
  <div class="data-list">
    <!--筛选面板-->
    <filter-panel
      v-if="filterGroups.length > 0"
      :groups="filterGroups"
      :auto="autoSearch"
      @search="search"
    />

    <!--表格-->
    <el-table ref="dataList" :data="data" :style="{ width }" v-loading="loading" v-bind="attrs">
      <!--列索引-->
      <el-table-column v-if="showIndex" type="index" width="50" />
      <!--多选列-->
      <el-table-column v-if="selection" type="selection" width="55" />
      <!--普通列-->
      <el-table-column
        v-for="(col, index) in columns"
        :key="index"
        :label="col.label"
        :width="col.width"
        :show-overflow-tooltip="col.showOverflowTooltip"
      >
        <template #default="scope">
          <!--自定义列组件-->
          <component :is="customColumns[col.type]" :scope="scope" :col="col"></component>
        </template>
      </el-table-column>
    </el-table>

    <!--分页器-->
    <div v-if="showPage" class="pagination" :style="{ justifyContent: pagePosition }">
      <el-pagination
        v-model:currentPage="pageParam.displayStart"
        v-model:page-size="pageParam.displayLength"
        :page-sizes="[10, 30, 50, 100]"
        layout="total, prev, pager, next, sizes, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, toRefs, reactive, watch, defineProps, withDefaults, useAttrs } from "vue";
import customColumns from './columns/index';
import filterPanel from "./filterPanel/filterPanel.vue";

interface Iprops {
  filterGroups: any,// 筛选项目配置
  autoSearch: boolean, //自动筛选（没有查询、重置按钮）
  data: any, // 列表数据
  columns: any, // 列配置
  width: string, // 表格宽度
  loading: boolean, // 列表加载状态
  selection: boolean, // 是否启用多选
  showIndex: boolean, // 是否显示索引列
  showPage: boolean, // 是否显示分页器
  pagePosition: string, // 分页器位置
}

const props = withDefaults(defineProps<Iprops>(), {
  filterGroups: [],// 筛选项目配置
  autoSearch: false, //自动筛选（没有查询、重置按钮）
  data: [], // 列表数据
  columns: [], // 列配置
  width: '100%', // 表格宽度
  loading: false, // 列表加载状态
  selection: false, // 是否启用多选
  showIndex: false, // 是否显示索引列
  showPage: true, // 是否显示分页器
  pagePosition: 'right', // 分页器位置
})
// 读取其他剩余参数
const attrs = useAttrs();

 // 读取组件参数
const {
  data,
  columns,
  width,
  loading,
  selection,
  showIndex,
  pagePosition,
  showPage,
  filterGroups,
  autoSearch
} = toRefs(props);

const emit = defineEmits<{
  (event: 'searchMethod', searchParam: any): void
}>()

// 筛选面板数据
let filterParam: any = {}

// 筛选面板查询方法
function search(value: any) {
  Object.keys(value).forEach(key => {
    filterParam[key] = value[key]
  })
  // 调用查询
  if (pageParam.displayStart === 1) {
    // 当页码在第一页的时候直接调用查询方法
    generateSearchParam();
  } else {
    // 当页码不在第一页的时候，将页码改为第一页
    // watch将自动调用查询方法
    pageParam.displayStart = 1
  }

}

// 分页信息处理
let pageParam = reactive({ displayStart: 1, displayLength: 10 })
// 分页发生改变时，调用查询功能
watch(
  () => pageParam,
  (newValue) => {
    generateSearchParam()
  },
  {
    deep: true
  }
)

// 组合查询参数 & 触发页面表格查询
function generateSearchParam() {
  let searchParam = Object.assign({}, filterParam, pageParam)
  emit('searchMethod', searchParam)
}

</script>
<style>
.pagination {
  display: flex;
  align-items: center;
  height: 50px;
}
</style>

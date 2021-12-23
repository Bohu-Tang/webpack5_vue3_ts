<template>
  <div class="data-list">
    <!--筛选面板-->
    <filter-panel
      v-if="filterGroups.length>0"
      :groups="filterGroups"
      :auto="autoSearch"
      @search="search"
    />

    <!--表格-->
    <el-table
      ref="dataList"
      :data="data"
      :style="{width}"
      v-loading="loading"
      v-bind="attrs"
    >
      <!--列索引-->
      <el-table-column v-if="showIndex" type="index" width="50"/>
      <!--多选列-->
      <el-table-column v-if="selection" type="selection" width="55"/>
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
          <component :is="col.type" :scope="scope" :col="col"></component>
        </template>
      </el-table-column>
    </el-table>

    <!--分页器-->
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
import {defineComponent, toRefs, reactive, watch, ref, computed} from "vue";
import customColumns from './columns/index';
import filterPanel from "./filterPanel/filterPanel";

export default defineComponent({
  name: "dataList",
  components: {
    ...customColumns,
    filterPanel
  },
  props: {
    // 筛选项目配置
    filterGroups: {
      type: Array,
      default() {
        return []
      }
    },
    // 自动筛选（没有查询、重置按钮）
    autoSearch: {
      type: Boolean,
      default: false
    },
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
    },


  },
  setup(props, context) {
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
    } = toRefs(props); // 读取组件参数
    const {attrs, emit} = context; // 读取额外参数

    // 筛选面板数据
    let filterParam = {}

    // 筛选面板查询方法
    function search(value) {
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
    let pageParam = reactive({displayStart: 1, displayLength: 10})
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
      filterGroups, // 筛选项配置
      autoSearch, // 是否开启自动查询（没有查询、重置按钮）
      search, // 查询按钮回调方法
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

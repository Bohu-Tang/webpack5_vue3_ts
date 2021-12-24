<template>
  <data-list
    width="100%"
    height="300px"
    :data="tableData"
    :filter-groups="groups"
    :auto-search="false"
    :columns="columns"
    :loading="loading"
    :show-header="true"
    :border="true"
    :selection="true"
    :show-index="true"
    :show-page="true"
    page-position="left"
    @selectionChange="selectionChanged"
    @select="select"
    @searchMethod="getData"
  />

  <el-button @click="addRow">点击加一条数据</el-button>
</template>

<script>
import {defineComponent, ref} from "vue";
import dataList from "@/components/dataList/dataList";
import apiService from "@/apiService";

export default defineComponent({
  name: 'home',
  components: {dataList},
  setup() {
    // 筛选面板配置
    let groups = ref([
      {
        prop: 'name',
        placeholder: '请输入姓名',
        componentName: 'x-input',
        value: '金针菇',
        clearable: false
      },
      {
        prop: 'sex',
        placeholder: '请输入性别',
        componentName: 'x-input',
        value: undefined,
      },
      {
        prop: 'address',
        placeholder: '请输入地址',
        componentName: 'x-input',
        value: undefined
      },
    ])
    // 列配置部分
    let columns = ref([
      {
        prop: 'date',
        label: '日期',
        width: 180,
        type: 'defaultText'
      },
      {
        prop: 'name',
        label: '姓名',
        width: 180,
        type: 'defaultText'
      },
      {
        prop: 'address',
        label: '地址',
        type: 'defaultText',
        showOverflowTooltip: true,
      }
    ]);
    // 列表数据
    let tableData = ref([
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      }
    ])
    // 列表loading状态
    let loading = ref(false);

    // 添加一条数据
    function addRow() {
      loading.value = true;
      setTimeout(() => {
        tableData.value.push({
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        })
        loading.value = false;
      }, 1000)
    }

    // 多选的数据
    let multipleSelection = ref([])

    // 多选数据发生变化时的回调
    function selectionChanged(val) {
      multipleSelection.value = val
    }

    // 当用户手动勾选数据行的 Checkbox 时触发的事件
    function select(selection, row) {
      // selection:已选中的所有数据 row：当前选中行的数据
      console.log(selection, row)
    }

    // 请求数据
    function getData(param) {
      console.log(param)
      // const res = await apiService.demo.getCubes();
      // console.log(res)
    }


    return {
      groups,
      columns,
      tableData,
      loading,
      addRow,
      selectionChanged,
      select,
      getData,
    }
  }

})
</script>

<style scoped>

</style>

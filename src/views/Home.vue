<template>
  <data-list
    :data="tableData"
    :columns="columns"
    width="100%"
    :loading="loading"
    :show-header="true"
    height="300px"
    :border="true"
    :selection="true"
    :show-index="true"
    :show-page="true"
    @selectionChange="selectionChanged"
    @select="select"
  />

  <el-button @click="addRow">点击加一条数据</el-button>
</template>

<script>
import {defineComponent, ref, reactive} from "vue";
import dataList from "../components/dataList/dataList";

export default defineComponent({
  name: 'home',
  components: {dataList},
  setup() {
    // 列配置部分
    let columns = ref([]);
    columns = [
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
        width: 180,
        type: 'defaultText',
        showOverflowTooltip: true,
      }
    ]
    // 列表数据
    let tableData = ref([])
    tableData.value = [
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
    ]
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

    // 多选
    let multipleSelection = ref([])

    function selectionChanged(val) {
      multipleSelection.value = val
    }
    // 当用户手动勾选数据行的 Checkbox 时触发的事件
    function select(selection, row){
      // selection:已选中的所有数据 row：当前选中行的数据
      console.log(selection, row)
    }


    return {
      columns,
      tableData,
      loading,
      addRow,
      selectionChanged,
      select
    }
  }

})
</script>

<style scoped>

</style>

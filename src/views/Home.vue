<template>
  <data-list :data="tableData" :columns="columns" width="500px"></data-list>
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
        type: 'defaultText'
      }
    ]
    // 数据处理部分
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
    function addRow(){
      tableData.value.push({
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      })
    }
    return {
      columns,
      tableData,
      addRow
    }
  }

})
</script>

<style scoped>

</style>

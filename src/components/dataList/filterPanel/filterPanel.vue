<template>
  <el-card>
    <el-row :gutter="20">
      <!--      筛选项-->
      <template v-for="(item, index) in groups" :key="index">
        <el-col :span="item.span||6">
          <component :is="item.componentName" v-bind="item"
                     @valueChange="change(groups,item,index, $event)"></component>
        </el-col>
      </template>
      <!--      按钮-->
      <el-col :span="groups[0].span||6" v-if="!auto">
        <el-button type="primary" @click="search">查询</el-button>
        <el-button type="primary" plain>重置</el-button>
      </el-col>
    </el-row>
  </el-card>

</template>
<script>
import {defineComponent, reactive, toRefs, onBeforeMount} from "vue";
import formComponents from "../../formComponents";

export default defineComponent({
  name: "filterPanel",
  components: {
    ...formComponents
  },
  props: {
    groups: {
      type: Array,
      default() {
        return []
      }
    },
    // 是否开启自动筛选， 开启后隐藏【查询、重置】按钮，筛选项发生改变后自动触发search
    auto: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const {groups, auto} = toRefs(props)
    const {emit} = context

    // 表单项value发生改变时,修改groups内的数据
    function change(groups, item, index, $event) {
      groups[index].value = $event;
    }

    // 处理筛选项数据 --- 生成对象数据
    let data = {}

    function generateData() {
      groups.value.forEach(item => {
        data[item.prop] = item.value
      })
    }

    // 查询按钮事件
    function search() {
      generateData()
      emit('search', data)
    }

    // 渲染之前触发一下search
    onBeforeMount(() => {
      generateData();
      emit('search', data)
    })


    return {
      groups, // 筛选项配置
      auto, // 是否开启自动筛选
      change, // 筛选项value发生改变了
      search, // 查询按钮事件

    }
  }
})
</script>
<style lang="scss" scoped>
.el-card {
  margin-bottom: 20px;

  .el-row {
    margin-bottom: -20px;
  }

  .el-col {
    margin-bottom: 20px;
  }
}
</style>

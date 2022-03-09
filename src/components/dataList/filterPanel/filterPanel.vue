<template>
  <el-card shadow="never">
    <el-row :gutter="20">
      <!--      筛选项-->
      <template v-for="(item, index) in groups" :key="index">
        <el-col :span="item.span || 6">
          <component
            :is="formComponents[item.componentName]"
            v-bind="item"
            @valueChange="change(groups, item, index, $event)"
          ></component>
        </el-col>
      </template>
      <!--      按钮-->
      <el-col :span="groups[0].span || 6" v-if="!auto">
        <el-button type="primary" @click="search">查询</el-button>
        <el-button type="primary" @click="reset" plain>重置</el-button>
      </el-col>
    </el-row>
  </el-card>
</template>
<script lang="ts" setup>
import { defineProps, withDefaults, defineEmits, toRefs, onBeforeMount } from "vue";
import formComponents from "@/components/formComponents/index";

interface IProps {
  groups: any,
  auto: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  groups: [],
  auto: false
})


let { groups, auto } = toRefs(props)
const emit = defineEmits<{
  (event:"search", searchParam: any): void
}>()

// 表单项value发生改变时,修改groups内的数据
function change(groups: any, item: any, index: any, $event: any) {
  groups[index].value = $event;
}

// 处理筛选项数据 --- 生成对象数据
let data: any = {}

function generateData() {
  groups.value.forEach((item: any) => {
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

// 获取原始值---用来给重置时赋值用
const originalValue = groups.value.map((item: any) => item.value)

// 重置
function reset() {
  groups.value.forEach((item: any, index: number) => {
    item.value = originalValue[index]
  })
  search()
}



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

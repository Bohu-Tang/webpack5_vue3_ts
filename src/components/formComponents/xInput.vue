<template>
  <div class="x-input" :style="{width: width}">
    <el-input
      v-model="inputValue"
      v-bind="attrs"
      @input="input"
    ></el-input>
  </div>
</template>
<script>
import {defineComponent, ref, toRefs} from "vue";

export default defineComponent({
  name: 'xInput',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  setup(props, context) {
    let {width} = toRefs(props); // 组件宽度
    let {attrs, emit} = context // 读取额外参数和emit方法
    let {value} = props // 读取value（这个value是非响应式的）
    let inputValue = ref(value) // 定义自己的value用于双向绑定

    // input事件
    function input() {
      emit('valueChange', inputValue.value)
    }

    return {
      inputValue,
      attrs,
      width,
      input
    }
  }
})
</script>

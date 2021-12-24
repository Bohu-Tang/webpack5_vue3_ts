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
import {defineComponent, ref, toRefs, watch} from "vue";

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
    let {width, value: refValue} = toRefs(props);
    let {attrs, emit} = context // 读取额外参数和emit方法

    // 定义自己的value用于双向绑定
    let inputValue = ref('')

    // input事件
    function input() {
      emit('valueChange', inputValue.value)
    }

    // 监听value变化,将传入的value反应在组件内部
    watch(
      refValue,
      (newValue) => {
        inputValue.value = newValue
      },
      {
        immediate: true
      }
    )

    return {
      inputValue,
      attrs,
      width,
      input
    }
  }
})
</script>

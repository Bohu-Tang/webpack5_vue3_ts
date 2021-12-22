<template>
  <el-config-provider :locale="locale">
    <baseLayout></baseLayout>
  </el-config-provider>
</template>

<script>
import {defineComponent} from "vue";
import baseLayout from '@/layout/baseLayout.vue';
// 引入中文语言包
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

export default defineComponent({
  name: 'App',
  components: {
    baseLayout
  },
  setup(){
    return {
      locale: zhCn
    }
  }
})
</script>

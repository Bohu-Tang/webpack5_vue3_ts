<template>
  <el-config-provider :locale="zhCn">
    <baseLayout></baseLayout>
  </el-config-provider>
</template>

<script lang="ts" setup>
import baseLayout from '@/layout/baseLayout.vue';
// 引入中文语言包
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

</script>

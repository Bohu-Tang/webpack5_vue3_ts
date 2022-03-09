<template>
    <div class="icon">
        {{ text }}
        <el-icon
            v-show="col.showIcon(scope.row)"
            :style="{ width: size || '20px', height: size || '20px' }"
        >
            <component :is="icon" :style="{ width: size || '20px', height: size || '20px' }"></component>
        </el-icon>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, toRefs } from "vue";
import { ICol } from './colInterface'

interface IIcon extends ICol {
    icon: string, // 图标名称
    size?: string, // 图标大小
    text?: string | number, // 图标前的文字
    showIcon: (col: any) => boolean // 是否展示图标
}
interface IProps {
    scope: any,
    col: IIcon
}
const props = defineProps<IProps>()
const { col, scope } = toRefs(props)
const { icon, size, text } = col.value
</script>
<style lang="scss">
.icon {
    .el-icon {
        vertical-align: middle;
    }
}
</style>
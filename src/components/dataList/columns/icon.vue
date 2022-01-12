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
<script lang="ts" >
import { defineComponent, toRefs, PropType } from "vue";
import { Icol } from './colInterface'

interface col extends Icol {
    icon: string, // 图标名称
    size?: string, // 图标大小
    text?: string | number, // 图标前的文字
    showIcon(): boolean // 是否展示图标
}

export default defineComponent({
    name: "icon",
    props: {
        col: {
            type: Object as PropType<col>
        },
        scope: {
            type: Object as PropType<any>
        }
    },
    setup(prop: any) {
        const { col, scope } = toRefs(prop)
        const { icon, size, text } = col.value
        console.log(scope);


        return {
            icon,
            col,
            scope,
            size,
            text
        }
    }
})
</script>
<style lang="scss">
.icon {
    .el-icon {
        vertical-align: middle;
    }
}
</style>
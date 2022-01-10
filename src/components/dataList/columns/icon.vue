<template>
    <div class="icon">
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
interface col {
    label: string,
    prop: string,
    type: string,
    [propName: string]: any
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
        const { icon, size } = col.value
        return {
            icon,
            col,
            scope,
            size
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
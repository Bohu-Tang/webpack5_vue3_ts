<template>
    <div class="icon">
        <el-icon v-show="col.showIcon(scope.row)" :style="{ width: size || '20px', height: size || '20px' }">
            <component :is="icon" :style="{ width: size || '20px', height: size || '20px' }"></component>
        </el-icon>
    </div>
</template>
<script lang="ts" >
import { defineComponent, toRefs } from "vue";
export default defineComponent({
    name: "icon",
    props: {
        col: {
            type: Object
        },
        scope: {
            type: Object
        }
    },
    setup(prop: any) {
        console.log(prop);
        
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
</style>
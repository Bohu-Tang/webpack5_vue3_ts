// vue类型声明，防止类型报错
declare module '*.vue' {
    import {defineComponent} from "vue";
    const component: defineComponent<{},{},any>
    export default component
}

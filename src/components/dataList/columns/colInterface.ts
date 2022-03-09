// 列接口 -- 通用属性接口
interface ICol {
    prop: string, // 列绑定的字段
    label: string, // 列名
    type: string, // 列组件类型
    showOverflowTooltip?: boolean, // element原生是否展示超出隐藏泡泡框
    width?: string | number // 列宽
}

export  {ICol}
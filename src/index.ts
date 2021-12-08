import {createApp} from "vue";
import App from './App.vue';
// 按需引入element库
import introduceElement from "@/components/element/element-plus";
// 引入svg组件
import svgIconRegistered from "@/components/common/svg-components";

const app = createApp(App);
// 按需引入element-ui组件
introduceElement(app);
svgIconRegistered(app);
app.mount('#app')

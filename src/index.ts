import {createApp} from "vue";
import App from './App.vue';
// 按需引入element库
import introduceElement from "@/components/element/element-plus";

const app = createApp(App);
// 按需引入element-ui组件
introduceElement(app);
app.mount('#app')

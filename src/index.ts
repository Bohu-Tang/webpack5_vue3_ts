import {createApp} from "vue";
import App from './App.vue';
// 按需引入element库
import introduceElement from "@/components/element/element-plus";
// element图标库
import * as Icons from '@element-plus/icons-vue';
// 引入svg组件
import svgIconRegistered from "@/components/common/svg-components";
// 样式
import '@/styles/index.scss'
// 路由
import router from '@/router/index';
// vuex
import store from '@/store/store';

const app = createApp(App);
// 按需引入element-ui组件
introduceElement(app);
// 挂载所有element图标
Object.keys(Icons).forEach(iconKey=>{
    app.component(iconKey, Icons[iconKey])
})




svgIconRegistered(app);
app.use(router);
app.use(store);
app.mount('#app')

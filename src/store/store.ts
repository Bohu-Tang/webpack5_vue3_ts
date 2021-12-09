import {createStore} from "vuex";
import setting from './setting';
const store = createStore({
  modules:{
    setting: setting
  }
})

export default store;

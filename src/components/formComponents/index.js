import {defineAsyncComponent} from "vue";

export default {
  xInput: defineAsyncComponent(() => import('./xInput'))
}

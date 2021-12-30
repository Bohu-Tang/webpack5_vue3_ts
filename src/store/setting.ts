// state接口
interface state {
  isCollapsed: Boolean
}

const setting = {
  namespaced: true,
  state: () => {
    return {
      isCollapsed: false
    }
  },
  mutations: {
    toggleCollapsed(state: state): void {
      state.isCollapsed = !state.isCollapsed;
    }
  }
}

export default setting

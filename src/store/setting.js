const setting = {
  namespaced: true,
  state: () => {
    return {
      isCollapsed: false
    }
  },
  mutations: {
    toggleCollapsed(state){
      state.isCollapsed=!state.isCollapsed;
    }
  }
}

export default setting

interface stateType{
  isCollapsed: boolean
}

const setting = {
  namespaced: true,
  state: () => {
    return {
      isCollapsed: false
    }
  },
  mutations: {
    toggleCollapsed(state:stateType){
      state.isCollapsed=!state.isCollapsed;
    }
  }
}

export default setting

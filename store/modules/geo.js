const state = () => ({
  position: {
    id: 37,
    name: "深圳",
    spell: "shenzhen",
  },
  article: []
})

const mutations = {
  setPosition(state, val) {
    state.position = val
  },
  setArticle(state, val) {
    state.article = val
  }
}

const actions = {
  setPosition: ({
    commit
  }, position) => {
    commit('setPosition', position)
  },
  setArticle: ({
    commit
  }, article) => {
    commit('setArticle', article)
  }
}

export default { namespaced: true, state, mutations, actions }

import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'
import user from './modules/user'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    geo,
    user
  },
  actions: {
     async nuxtServerInit({
      commit
    }, {req, app}) {
      const {
        status,
        data:{
          code,
          data
        }
      } = await app.$axios
      .post("/geo/article", {
        id: 37,
        type: 0
      })
      commit('geo/setArticle',code===1?data:[])
    }
  }
})

export default store

import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    catalog: []
  },
  getters: {
    getCatalog: state => state.catalogs
  },



  mutations: {
    SET_CATALOG (state, data) {
      state.catalog = data
    }
  },
  actions: {
    async FETCH_CATALOGS_DATA({commit}) {
      const { data } = await axios.get("http://192.168.28.40:4000/catalog")
      console.log(data);
      commit('SET_CATALOG', data)
    }
  },
 
  modules: {
  }
})

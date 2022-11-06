import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    CatalogData: []
  },
  getters: {
    GET_CATALOGS_TITLE: state => state.CatalogData.message.catalogs
  },

  mutations: {
      SET_CATALOG_DATA(state, payload){
        state.CatologData = payload
      }
  },
  actions: {
    async FETCH_CATALOGS_DATA({commit}) {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvb3QiLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTY2NzcxMDYwMSwiZXhwIjoxNjY3Nzk3MDAxfQ.s_X2RjVkvNezmo0NkvW6RXhJpK_bBG4Z2xIj1kNS5Zw"
      const {data} = await axios.get("https://pitsa.herokuapp.com/catalog", {
        headers: {
          'Authorization': `token ${token}`
        }
      })
      commit('SET_CATALOG_DATA', data)
      console.log(data);
      




      // .then((res) => {
      //   // console.log(res.data.message.catalogs)
      //   // const CatologData = res.data.message.catalogs
      //   // this.cardData = CatologData
      //   commit('SET_CATALOG_DATA', res)
      // })
      // .catch((error) => {
      //   console.error(error)
      // })
    }
  },
  modules: {
  }
})

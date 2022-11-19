import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
  // catalog
    catalog: [],
    
  // discount_products
    discountProducts: []
  },


  getters: {
     // catalog
    getCatalogId: state => state.catalog.catalogs.map(item => item.id),

    // discount_products
    getDiscountProducts: state => state.catalog.catalogs.map(item => item),
  },



  mutations: {

  // catalog
    SET_CATALOG (state, data) {
      state.catalog = data
    },


  // discount_products
    SET_DISCOUNT_PRODUCTS (state, data) {
      state.discountProducts = data
    }
  },



  actions: {

    // catalog
    async FETCH_CATALOGS_DATA({commit}) {
      const { data } = await axios.get("http://192.168.28.40:4000/catalog")
      console.log(data);
      commit('SET_CATALOG', data)
    },


    // discount_products
    async FETCH_DISCOUNT_PRODUCTS({commit}) {
      const { data } = await axios.get("http://192.168.28.40:4000/discount_products")
      console.log(data);
      commit('SET_DISCOUNT_PRODUCTS', data)
    }
  },
 

  modules: {
  }
})

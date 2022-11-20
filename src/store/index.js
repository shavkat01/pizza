import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
  // catalog
    catalog: [],
    
  // discount_products
    discountProducts: [],

    // newProducts
    newProducts: [],


    // specoffers
    specOffers: [],


    // articles
    articles: [],

    // popular
    popular: [],


  },


  getters: {
     // catalog
    getCatalogId: state => state.catalog.catalogs.map(item => item.id),

    // discount_products
    getDiscountProducts: state => state.discountProducts.discount_products.map(item => item),

    // newProducts
    getNewProducts: state => state.newProducts.products_new.map(item => item),

    // specoffers
    getSpecOffers: state => state.specOffers.spec_offer.map(item => item),

    // articles
    getArticles: state => state.articles.article.map(item => item),


    // popular
    getPopular: state => state.popular.products.map(item => item),
  },



  mutations: {

  // catalog
    SET_CATALOG (state, data) {
      state.catalog = data
    },


  // discount_products
    SET_DISCOUNT_PRODUCTS (state, data) {
      state.discountProducts = data
    },

    // newProducts
    SET_NEW_PRODUCTS (state, data) {
      state.newProducts = data
    },


    // specOffers
    SET_SPEC_OFFERS (state, data) {
      state.specOffers = data
    },

    // articles
    SET_ARTICLES (state, data) {
      state.articles = data
    },


    // popular
    SET_POPULAR (state, data) {
      state.popular = data
    },

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
        const { data } = await axios.get(`http://192.168.28.40:4000/discount_products?limit=${4}`)
        console.log(data);
        commit('SET_DISCOUNT_PRODUCTS', data)
      },

      // newProducts
      async FETCH_NEW_PRODUCTS({commit}) {
        const { data } = await axios.get(`http://192.168.28.40:4000/products/new?limit=${4}`)
        console.log(data);
        commit('SET_NEW_PRODUCTS', data)
      },

      // specOffers
      async FETCH_SPEC_OFFERS({commit}) {
        const { data } = await axios.get(`http://192.168.28.40:4000/spec_offers?limit=${2}`)
        console.log(data);
        commit('SET_SPEC_OFFERS', data)
    },
      
      // articles
      async FETCH_ARTICLES({commit}) {
        const { data } = await axios.get(`http://192.168.28.40:4000/articles?limit=${3}`)
        console.log(data);
        commit('SET_ARTICLES', data)
    },
      
      // popular
      async FETCH_POPULAR({commit}) {
        const { data } = await axios.get(`http://192.168.28.40:4000/products?limit=${4}`)
        console.log(data);
        commit('SET_POPULAR', data)
      },
  },
 

  modules: {
  }
})
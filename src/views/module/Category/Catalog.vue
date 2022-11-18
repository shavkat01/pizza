<template>
  <layout>
    <div class="container mt-10">
          <h1 class="lg:text-6xl md:text-3xl sm:text-xl font-bold my-10">
        Каталог
      </h1>
      {{catalog}}
      <div class="flex flex-wrap gap-10">
        <div class="" v-for="item in catalog.catalogs" :key="item">
          <router-link to="/cardDetails">
            <Card :data="item" />
          </router-link>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "@/layouts/Layout.vue";
import Card from "./components/Card.vue";
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  components: {
    Layout,
    Card,
  },
  data() {
    return {
      cardData: [],
    };
  },
  computed: {
    ...mapState(['catalog']),


    //   catalogs(){
    //     if( this.$store.state.CatologData){
    //         return this.$store.state.CatologData.message.catalogs
    //     }
    //     else{
    //        return false
    //     }
    //   }
  },
  methods: {
    ...mapActions(["FETCH_CATALOGS_DATA"]),
  },
  mounted() {
    this.FETCH_CATALOGS_DATA();
    // fetch('http://"http://192.168.28.40:4000/discount_products').then(
    //     (res)=> {
    //         console.log(res);
    //     }
    // )
  },
};
</script>

<style>
</style>
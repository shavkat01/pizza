<template>
    <layout>
        <div class="container mt-10">
            <h1 class="lg:text-6xl md:text-3xl sm:text-xl font-bold my-10">
                Каталог
            </h1>
            <div class="flex flex-wrap gap-10">
                <div class="" v-for="item in $store.state.CatologData.message.catalogs" :key="item">
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
    computed:{
      
    },
     methods: {
  },
  mounted(){
  }
};
</script>

<style>
</style>
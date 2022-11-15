<template>
    <layout>
        <div class="container mt-10">
            <h1 class="lg:text-6xl md:text-3xl sm:text-xl font-bold my-10">
                Каталог
            </h1>
            <div class="flex flex-wrap gap-10">
                <div class="" v-for="item in catalogs" :key="item">
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
  },
  mounted(){
    const data = fetch('https://9705-213-230-110-47.eu.ngrok.io/discount_products').then(
        (res)=> {
            console.log(res);
        }
    )
  }
};
</script>

<style>
</style>
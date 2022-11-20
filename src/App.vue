<template>
    <div class="bg-body-color">
        <Header />
        <RouterView class="router-view" v-slot="{ Component }">
            <Transition name="page-opacity" mode="out-in">
                <component :is="Component" />
            </Transition>
        </RouterView>
        <Footer/>
    </div>
</template>

<script>
import Layout from "@/layouts/Layout.vue";
import Header from "@/layouts/header/Header.vue";
import Footer from "@/layouts/footer/Footer.vue";
export default {
    components: {
        Layout,
        Footer,
        Header,
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  font-family: "Rubik", sans-serif;
}
body{
    @apply h-full
}
.page-opacity-enter-active,
.page-opacity-leave-active {
    transition: 300ms ease all;
}
.page-opacity-enter-from,
.page-opacity-leave-to {
    opacity: 0;
}
.main{
    position: relative;
    height: 100vh;
}
.footer{
    position: sticky;
    bottom: 0;
    
}
</style>

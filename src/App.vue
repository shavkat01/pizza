<template>
    <div class="bg-body-color">
        <Header />
        <RouterView class="router-view" v-slot="{ Component }">
            <Transition name="page-opacity" mode="out-in">
                <component :is="Component" />
            </Transition>
        </RouterView>
        <Footer />
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
.page-opacity-enter-active,
.page-opacity-leave-active {
    transition: 300ms ease all;
}
.page-opacity-enter-from,
.page-opacity-leave-to {
    opacity: 0;
}
input:checked ~ .dot {
  transform: translateX(100%);
}
input:checked ~ .line {
  background-color: #70C05B;
}
.space_between{
  justify-content: space-between;
  align-items: center;
}

</style>

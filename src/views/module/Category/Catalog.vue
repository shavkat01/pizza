<template>
    <layout>
        <div class="h-screen">
            <Card class="m-10" :data="cardData" />
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
            cardData: {
                img: require("@/assets/images/catalog/1.png"),
                class: "custom2",
                name: "Хлеб",
            },
        };
    },
};
</script>

<style>
</style>
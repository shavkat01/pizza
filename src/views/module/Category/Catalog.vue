<template>
    <layout>
        <div class="container mt-10">
            <h1 class="text-6xl font-bold my-10">Каталог</h1>
            <div class="flex flex-wrap justify-between gap-10">
                <div class="" v-for="item in cardData" :key="item">
                    <Card :data="item" />
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
            cardData: [
                {
                    img: require("@/assets/images/catalog/3.png"),
                    class: "custom1",
                    name: "Молоко, сыр, яйцо",
                },
                {
                    img: require("@/assets/images/catalog/1.png"),
                    class: "custom2",
                    name: "Хлеб",
                },
                {
                    img: require("@/assets/images/catalog/2.png"),
                    class: "custom1",
                    name: "Фрукты и овощи",
                },
                {
                    img: require("@/assets/images/catalog/4.png"),
                    class: "custom1",
                    name: "Замороженные продукты",
                },
                {
                    img: require("@/assets/images/catalog/6.png"),
                    class: "custom1",
                    name: "Напитки",
                },
                {
                    img: require("@/assets/images/catalog/7.png"),
                    class: "custom1",
                    name: "Кондитерские изделия",
                },
                {
                    img: require("@/assets/images/catalog/8.png"),
                    class: "custom1",
                    name: "Чай, кофе",
                },
                {
                    img: require("@/assets/images/catalog/9.png"),
                    class: "custom1",
                    name: "Бакалея",
                },
                {
                    img: require("@/assets/images/catalog/10.png"),
                    class: "custom1",
                    name: "Здоровое питание",
                },
                {
                    img: require("@/assets/images/catalog/11.png"),
                    class: "custom1",
                    name: "Зоотовары",
                },
                {
                    img: require("@/assets/images/catalog/12.png"),
                    class: "custom1",
                    name: "Детское питание",
                },
                {
                    img: require("@/assets/images/catalog/13.png"),
                    class: "custom1",
                    name: "Мясо, птица, колбаса",
                },
                {
                    img: require("@/assets/images/catalog/14.png"),
                    class: "custom1",
                    name: "Непродовольственные товары",
                },
            ],
        };
    },
};
</script>

<style>
</style>
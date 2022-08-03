<template>
  <layout>
    <div class="corusel h-52 w-full"><Swiper /></div>
    <div class="container">
      <div class="discount">
        <div class="flex justify-between items-end">
          <div class="text-4xl font-bold">Акции</div>
          <div class="flex items-center gap-8 mt-10 cursor-pointer">
            <div class="text-lg">Все акции</div>
            <img class="w-2 h-3 mt-1" src="@/assets/icons/right.png" alt="" />
          </div>
        </div>
        <div class="flex justify-between mt-10 items-stretch">
          <div v-for="item in discount_products" :key="item">
            <ProductCard class="h-full" :product="item" />
          </div>
        </div>
      </div>
      <div class="news">
        <div class="flex justify-between items-end">
          <div class="text-4xl font-bold">Новинки</div>
          <div class="flex items-center gap-8 mt-10 cursor-pointer">
            <div class="text-lg">Все новинки</div>
            <img class="w-2 h-3 mt-1" src="@/assets/icons/right.png" alt="" />
          </div>
        </div>
        <div class="flex justify-between mt-10 items-stretch">
          <div v-for="item in new_products" :key="item">
            <NewProduct class="h-full" :product="item" />
          </div>
        </div>
      </div>
      <div class="more-buy">
        <div class="flex justify-between items-end">
          <div class="text-4xl font-bold">Покупали раньше</div>
          <div class="flex items-center gap-8 mt-10 cursor-pointer">
            <div class="text-lg">Все покупки</div>
            <img class="w-2 h-3 mt-1" src="@/assets/icons/right.png" alt="" />
          </div>
        </div>
        <div class="flex justify-between mt-10 items-stretch">
          <div v-for="item in more_buy" :key="item">
            <NewProduct class="h-full" :product="item" />
          </div>
        </div>
      </div>

      <div class="offers my-32">
        <div class="flex justify-between items-end">
          <div class="text-4xl font-bold">Специальные предложения</div>
        </div>
        <div class="flex justify-between mt-5">
          <div v-for="item in offers" :key="item">
            <OfferCard class="shadow-2xl" :data="item" />
          </div>
        </div>
      </div>
      <div class="branchs">
        <div class="flex justify-between items-end">
          <div class="text-4xl font-bold">Наши магазины</div>
        </div>
        <div class="flex gap-3 mt-4">
          <button class="bg-brand-btn rounded px-9 text-white py-2">
            п.Щельяюр
          </button>
          <button class="bg-brand-btn rounded px-9 text-white py-2">
            д.Вертеп
          </button>
          <button class="bg-brand-btn rounded px-9 text-white py-2">
            с.Краснобор
          </button>
          <button class="bg-brand-btn rounded px-9 text-white py-2">
            д.Диюр
          </button>
        </div>
        <div class="mt-5">
          <iframe
            class="w-full"
            :src="map"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div class="more-buy mt-10">
        <div class="flex justify-between items-end">
          <div class="text-4xl font-bold">Статьи</div>
          <div class="flex items-center gap-8 mt-10 cursor-pointer">
            <div class="text-lg">Все статьи</div>
            <img class="w-2 h-3 mt-1" src="@/assets/icons/right.png" alt="" />
          </div>
        </div>
        <div class="flex justify-between mt-10">
          <div v-for="item in adds_data" :key="item">
            <Adds class="shadow-2xl" :add_data="item" />
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "@/layouts/Layout.vue";
import Swiper from "@/views/module/Home/components/Swiper.vue";
import ProductCard from "@/components/ProductCard.vue";
import NewProduct from "@/components/NewProduct.vue";
import OfferCard from "@/components/OfferCard.vue";
import Adds from "@/components/Adds.vue";
export default {
  components: {
    Layout,
    Swiper,
    ProductCard,
    OfferCard,
    Adds,
    NewProduct,
  },
  data() {
    return {
      discount_products: [
        {
          img: require("@/assets/images/pro1.png"),
          discount: "-50%",
          new_price: "44.50$",
          old_price: "55.50$",
          title: "Г/Ц Блинчики с мясом вес, Россия",
        },
        {
          img: require("@/assets/images/pizza1.jpg"),
          discount: "-50%",
          new_price: "23.50$",
          old_price: "46.50$",
          title: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
        },
        {
          img: require("@/assets/images/pizza3.jpg"),
          discount: "-50%",
          new_price: "78.50$",
          old_price: "99.50$",
          title: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан... ",
        },
        {
          img: require("@/assets/images/pizza4.jpg"),
          discount: "-50%",
          new_price: "60.50$",
          old_price: "90.50$",
          title: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро... ",
        },
      ],
      new_products: [
        {
          img: require("@/assets/images/pro2.png"),
          discount: "-50%",
          new_price: "44.50$",
          title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
        },
        {
          img: require("@/assets/images/pizza2.jpg"),
          discount: "-50%",
          new_price: "44.50$",
          title: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
        },
        {
          img: require("@/assets/images/pro3.png"),
          discount: "-50%",
          new_price: "44.50$",
          title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
        },
        {
          img: require("@/assets/images/pro5.png"),
          discount: "-50%",
          new_price: "44.50$",
          title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
        },
      ],
      more_buy: [
        {
          img: require("@/assets/images/pro1.png"),
          discount: "-50%",
          new_price: "44.50$",
          title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
        },
        {
          img: require("@/assets/images/pro5.png"),
          discount: "-50%",
          new_price: "44.50$",
          title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
        },
        {
          img: require("@/assets/images/pro2.png"),
          discount: "-50%",
          new_price: "44.50$",
          title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
        },
        {
          img: require("@/assets/images/pro3.png"),
          discount: "-50%",
          new_price: "44.50$",
          title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
        },
      ],
      offers: [
        {
          bg_data: " bg-offer-card1",
          title: "Оформите карту «Северяночка»",
          text: "И получайте бонусы при покупке в магазинах и на сайте",
          img: require("@/assets/images/carta.png"),
        },
        {
          bg_data: " bg-offer-card2",
          title: "Покупайте акционные товары",
          text: "И получайте вдвое больше бонусов",
          img: require("@/assets/images/pro-bucket.png"),
        },
      ],
      adds_data: [
        {
          text: "Подробная информация о режимах использования масок и перчаток на территории магазинов 'ЛЕНТА'. Информация обновляется каждый будний день.",
          title: "Режим использования масок и перчаток на территории магазинов",
          time: "05.03.2021",
          img: require("@/assets/images/add1.png"),
        },
        {
          text: "Подробная информация о режимах использования масок и перчаток на территории магазинов 'ЛЕНТА'. Информация обновляется каждый будний день.",
          title: "Режим использования масок и перчаток на территории магазинов",
          time: "05.03.2021",
          img: require("@/assets/images/add2.png"),
        },
        {
          text: "Подробная информация о режимах использования масок и перчаток на территории магазинов 'ЛЕНТА'. Информация обновляется каждый будний день.",
          title: "Режим использования масок и перчаток на территории магазинов",
          time: "05.03.2021",
          img: require("@/assets/images/add3.png"),
        },
      ],
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5993.952157794102!2d69.274724!3d41.309384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81095e06b654b845!2sAmir%20Temur%20Square!5e0!3m2!1sen!2sus!4v1659287831875!5m2!1sen!2sus",
    };
  },
};
</script>

<style>
</style>
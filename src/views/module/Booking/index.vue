<template>
  <layout>
    <div class="container mt-10">
      <h1 class="lg:text-6xl md:text-3xl sm:text-xl font-bold my-10">
        Заказы
      </h1>
      <div>
        <div class="mt-20 flex justify-between">
          <div class="flex gap-10 text-2xl font-bold">
            <h2>01.04.2021</h2>
            <h2>11:00-14:00</h2>
            <p class="text-lg font-normal rounded px-2 bg-[#F3F2F1]">В процессе</p>
          </div>
          <div class="flex gap-7">
            <p class="text-2xl">
              3 006,83 ₽
            </p>
            <button class="flex gap-3 bg-brand-btn px-3 rounded"><img src="@/assets/icons/calendar.png" class="w-[22px] mt-[4px]" alt=""> <p class="text-white text-base mt-[2px]">Когда доставить</p> </button>
          </div>
        </div>
        <div class="flex justify-between gap-10 flex-wrap mt-10 items-stretch">
          <div v-for="item in discount_products" :key="item">
            <ProductCard class="h-full" :product="item"/>
          </div>
        </div>
        <div class="w-ful my-14 flex justify-center">
          <button class="flex gap-2 text-lg font-normal rounded px-3 py-2 bg-[#F3F2F1]"><img src="@/assets/icons/eye.png" class="w-[22px] mt-[4px]" alt=""><p>Просмотреть заказ</p></button>
        </div>
   

<!-- Не доставили -->

        <div class="mt-20 flex justify-between">
          <div class="flex gap-10 text-2xl font-bold">
            <h2>01.04.2021</h2>
            <h2>11:00-14:00</h2>
            <p class="text-lg font-normal rounded px-2 text-white bg-[#D80000]">Не доставили</p>
          </div>
          <div class="flex gap-7">
            <p class="text-2xl">
              3 006,83 ₽
            </p>
            <button class="bg-[#FF6633] px-16 rounded"> <p class="text-white text-base pb-1">Заказать</p> </button>
          </div>
        </div>
        <div class="flex justify-between gap-10 flex-wrap mt-10 items-stretch">
          <div v-for="item in discount_products" :key="item">
            <ProductCard class="h-full" :product="item"/>
          </div>
        </div>
      

<!--Возврат  -->

        <div class="mt-20 flex justify-between">
          <div class="flex gap-10 text-2xl font-bold">
            <h2>01.04.2021</h2>
            <h2>11:00-14:00</h2>
            <p class="text-lg font-normal rounded px-2 text-white bg-[#D80000]">Возврат</p>
          </div>
          <div class="flex gap-7">
            <p class="text-2xl">
              3 006,83 ₽
            </p>
            <button class="bg-[#FF6633] px-16 rounded"> <p class="text-white text-base pb-1">Заказать</p> </button>
          </div>
        </div>
        <div class="flex justify-between gap-10 flex-wrap mt-10 items-stretch">
          <div v-for="item in discount_products" :key="item">
            <ProductCard class="h-full" :product="item"/>
          </div>
        </div>

<!-- Получен -->

        <div class="mt-20 flex justify-between">
          <div class="flex gap-10 text-2xl font-bold">
            <h2>01.04.2021</h2>
            <h2>11:00-14:00</h2>
            <p class="text-lg font-normal rounded px-2 text-white bg-brand-btn">Получен</p>
          </div>
          <div class="flex gap-7">
            <p class="text-2xl">
              3 006,83 ₽
            </p>
            <button class="bg-[#FF6633] px-16 rounded"> <p class="text-white text-base pb-1">Заказать</p> </button>
          </div>
        </div>
        <div class="flex justify-between gap-10 flex-wrap mt-10 items-stretch">
          <div v-for="item in discount_products" :key="item">
            <ProductCard class="h-full" :product="item"/>
          </div>
        </div>
      
        <div class="w-ful my-14 flex justify-center">
          <button class="flex gap-2 text-lg font-normal rounded px-8 py-3 bg-[#F3F2F1]">Показать ещё</button>
        </div>
   
      </div>
    </div>
  

  </layout>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
export default {
  components:{
    ProductCard,
  },
  data(){
    return{
       discount_products: [
        {
          img: require("@/assets/images/pro2.png"),
          discount: "-50%",
          new_price: "44.50$",
          title: "Г/Ц Блинчики с мясом вес, Россия",
          cart_count: 1,
          star: 3,
        },
        {
          img: require("@/assets/images/pro3.png"),
          discount: "-50%",
          new_price: "23.50$",
          title: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
          cart_count: 2,
          star: 3,
        },
        {
          img: require("@/assets/images/pro4.png"),
          discount: "-50%",
          new_price: "78.50$",
          title: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан... ",
          cart_count:  3,
          star: 3,
        },
        {
          img: require("@/assets/images/pro5.png"),
          discount: "-50%",
          new_price: "60.50$",
          title: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро... ",
          cart_count: 4,
          star: 3,
        },
      ],
    }
  }
}
</script>

<style>

</style>
<template>
  <layout>
    <div class="container mt-10">
      <h1 class="lg:text-4xl md:text-xl sm:text-xl font-bold my-8">
        Масло ПРОСТОКВАШИНО сливочное в/с 82% фольга без змж, Россия, 180 г
      </h1>

        <div>
            <div class="mt-10 gap-14 flex">
              <p>
                арт. 371431
              </p>
                <div class="flex gap-3 items-center">
                    <div class="flex">
                        <img v-for="i in 5" :key="i" class="w-5 h-5" src="@/assets/icons/star.png" alt="">
                    </div>
                    <a href="#">3 отзыва </a>
                </div>
                <div class="flex gap-3">
                    <img src="@/assets/icons/share-2.png" alt="">
                    <p>Поделиться</p>
                </div>
                <div class="flex gap-3">
                    <img class="w-7" src="@/assets/icons/Like.png" alt="">
                    <p>В избраное</p>
                </div>
            </div>



            <div class="flex w-full mt-10 gap-6">
                <!-- picture side -->
                <div class="flex w-1/2 gap-5 items-center">
                    <div class="">
                        <img class="w-[130px] bg-white shadow-[1px_2px_4px_rgba(0,0,0,0.1)]" src="@/assets/images/milk/3.png" alt="">
                        <img class="w-[130px] bg-white shadow-[1px_2px_4px_rgba(0,0,0,0.1)] mt-5" src="@/assets/images/milk/3.png" alt="">
                        <img class="w-[130px] bg-white shadow-[1px_2px_4px_rgba(0,0,0,0.1)] mt-5" src="@/assets/images/milk/3.png" alt="">
                        <img class="w-[130px] bg-white shadow-[1px_2px_4px_rgba(0,0,0,0.1)] mt-5" src="@/assets/images/milk/3.png" alt="">
                        <img class="w-[130px] bg-white shadow-[1px_2px_4px_rgba(0,0,0,0.1)] mt-5" src="@/assets/images/milk/3.png" alt="">
                    </div>
                    <div class="bg-white relative shadow-[1px_2px_4px_rgba(0,0,0,0.1)]">
                        <span class="bg-[#FF6633] text-white mb-10 px-2 py-1 top-3 absolute right-3 rounded ">-50%</span>
                         <img class="my-16 w-[700px]" src="@/assets/images/milk/3.png" alt="Here is must be picture">
                    </div>
                </div>


                    <!-- info of picture -->
                <div class="flex w-1/2 gap-5">
                    <div class="w-4/5">

                        <div class="flex  justify-between">
                            <div class="mt-4">
                                <h3 class=" text-2xl">192,69 ₽</h3>
                                <span  class="text-muted mt-2">Обычная цена</span>
                            </div>
                            <div class="flex flex-col items-end">
                                <h4 class="font-extrabold text-4xl">108,99 ₽</h4>
                                <div class="text-muted mt-2 flex gap-3">С картой Северяночки <img src="@/assets/icons/info.png" alt=""></div>
                            </div>
                        </div>
                        <button class="flex w-full gap-2 justify-center mt-10 py-3 text-lg text-white rounded bg-[#FF6633]"><img src="@/assets/icons/shopping-cart1.png" class="mr-4" alt=""><p class="text-2xl">В корзину</p></button>
                        <div class="flex w-full justify-center mt-5 gap-5">
                            <img src="@/assets/icons/bell-off.png" alt="">
                            <p class="text-sm text-[#606060]">Уведомить о снижении цены</p>
                        </div>    
                        <div>
                            <table class="w-full mt-6">
                                <tbody>
                                    <tr class="bg-[#F3F2F1]">
                                        <td class="px-2 py-2">Бренд</td>
                                        <td class="font-bold">ПРОСТОКВАШИНО</td>
                                    </tr>
                                    <tr>
                                        <td class="px-2 py-2">Страна производителя</td>
                                        <td class="font-bold ">Россия</td>
                                    </tr>
                                    <tr class="bg-[#F3F2F1]">
                                        <td class="px-2 py-2">Упаковка</td>
                                        <td class="font-bold ">180 г</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                   </div>
                    <div class="">
                        <p>Похожие</p>
                        <div class="w-full px-4 pb-4 mt-4 rounded shadow-[1px_2px_4px_rgba(0,0,0,0.1)] bg-white">
                            <img src="@/assets/images/product/image.png" alt="">
                            <p class="font-bold mt-3">157,50 ₽</p>
                        </div>
                        <div class="w-full px-4 pb-4 mt-3 rounded shadow-[1px_2px_4px_rgba(0,0,0,0.1)] bg-white">
                            <img src="@/assets/images/product/image-1.png" alt="">
                            <p class="font-bold mt-3">157,50 ₽</p>
                        </div>
                        <div class="w-full px-4 pb-4 mt-3 rounded shadow-[1px_2px_4px_rgba(0,0,0,0.1)] bg-white">
                            <img src="@/assets/images/product/image-2.png" alt="">
                            <p class="font-bold mt-3">157,50 ₽</p>
                        </div>
                        <div class="w-full px-4 pb-4 mt-3 rounded shadow-[1px_2px_4px_rgba(0,0,0,0.1)] bg-white">
                            <img src="@/assets/images/product/image-3.png" alt="">
                            <p class="font-bold mt-3">157,50 ₽</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>


        <!-- С этим товаров мокупают -->


        <div class="mt-24">
            <p class="text-4xl font-bold ">С этим товаров мокупают</p>
            <div class="flex justify-between gap-10 flex-wrap mt-10 items-stretch">
                <div v-for="item in discount_products" :key="item">
                    <ProductCard class="h-full" :product="item"/>
                </div>
            </div>
        </div>



        <!-- Отзывы -->

        <div class="mt-24">
            <p class="text-4xl font-bold ">Отзывы</p>
        </div>

        <!-- Акции -->

         <div class="mt-24">
            <div class="w-full flex justify-between">
                <p class="text-4xl font-bold ">Акции</p>
                <button class="flex text-base items-center text-[#606060] gap-5"><p>Все акции</p> <img class="mt-1" src="@/assets/icons/right.png" alt=""></button>
            </div>
            <div class="flex justify-between gap-10 flex-wrap mt-10 items-stretch">
                <div v-for="item in discount_products" :key="item">
                    <ProductCard class="h-full" :product="item"/>
                </div>
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
          star: 3,
        },
        {
          img: require("@/assets/images/pro3.png"),
          discount: "-50%",
          new_price: "23.50$",
          title: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
          star: 3,
        },
        {
          img: require("@/assets/images/pro4.png"),
          discount: "-50%",
          new_price: "78.50$",
          title: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан... ",
          star: 3,
        },
        {
          img: require("@/assets/images/pro5.png"),
          discount: "-50%",
          new_price: "60.50$",
          title: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро... ",
          star: 3,
        },
      ],
    }
  }
}
</script>

<style>

</style>
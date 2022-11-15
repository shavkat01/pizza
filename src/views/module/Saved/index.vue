<template>
  <layout>
    <div class="container mt-10">
      <div class="flex gap-3 items-center text-[18px]">
        <h3 class="text-text_black">Главная</h3>
        <div>
          <img src="@/assets/icons/right.png" alt="">
        </div> 
          
        <h3 class="text-[#8F8F8F]">Корзина</h3>
      </div>
      <h1 v-if="$route.path == '/cart'"  class="lg:text-6xl text-text_black md:text-3xl sm:text-xl font-bold my-10">
        Корзина
        <span class="bg-[#FF6633] lg:text-xl md:text-3xl sm:text-sm font-normal absolute text-white px-2 ml-3 rounded">3</span>
      </h1>

      <h1 v-else class="lg:text-6xl text-text_black md:text-3xl sm:text-xl font-bold my-10">
        Доставка
        <span class="bg-[#FF6633] lg:text-xl md:text-3xl sm:text-sm font-normal absolute text-white px-2 ml-3 rounded">3</span>
      </h1>


      <div class="flex w-full content-between gap-16">

        <!-- left -->
        <div class="w-full">  
          <router-view></router-view>
        </div>

        <!-- right -->
        <div class="max-w-[370px] bg-white p-5 rounded mt-11 w-full">  
          <div>
            
            <!-- switch -->
            <div class="flex text-[20px] text-text_black w-full">
              <label for="toogleA" class="flex items-center cursor-pointer">
                <div class="relative">
                  <input id="toogleA" type="checkbox" class="sr-only" />
                  <div class="line w-10 h-6 bg-muted rounded-full shadow-inner"></div>
                  <div class="dot absolute w-4 h-4 bg-white rounded-full shadow left-1 top-1 transition"></div>
                </div>
                <div class="ml-4 text-[#414141]">
                  Списать 200 ₽ 
                </div>
              </label>
            </div>
            <div class="mt-4 text-[20px] text-[#8F8F8F]">
                  На карте накоплено 200 ₽ 
            </div>
            <hr class="my-6 text-[#F3F2F1] h-[3px]" />
            <!-- /switch -->
          </div>

          <div>
            <div>
              <div class="w-full flex justify-between">
                <p class="text-[20px] text-[#8F8F8F]"> 3 товара</p>
                <p class=" text-[20px] text-[#414141]">258,10  ₽ </p>
              </div>
              <div class="w-full mt-4 flex justify-between">
                <p class="text-[20px] text-[#8F8F8F]"> Скидка</p>
                <p class=" text-[20px] font-bold text-main-color">-8,01  ₽  </p>
              </div>
            </div>
            <hr class="my-6 text-[#F3F2F1] h-[3px]" />
          </div>
          <div class="w-full mt-4 items-center flex justify-between">
            <p class="text-[20px] text-[#8F8F8F]"> Итог</p>
            <p class=" text-[28px] font-bold text-text_black">250,09 ₽   </p>
          </div>

          <div class="text-center mt-8">
            <div class="bg-[#D80000] rounded-md text-white mt-11 px-2 py-1 inline-block">
              Минимальная сумма заказа 1000р
            </div>
          </div>


          <router-link to="/delivery">
            <div v-if="$route.path == '/cart'" class="bg-[#FCD5BA] cursor-pointer mt-5 text-main-color py-4 rounded text-[30px] text-center"> Оформить заказ</div>
            <div v-else>
              <div class="bg-[#FCD5BA] cursor-pointer mt-5 text-white py-4 rounded text-[30px] text-center"> Оплатить на сайте</div>
              <div class="bg-brand-btn cursor-pointer mt-5 text-white py-2 rounded text-[20px] text-center"> Оплатить при получении</div>
            </div>
          </router-link>
        
        
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
export default {

}
</script>

<style scoped>


</style>
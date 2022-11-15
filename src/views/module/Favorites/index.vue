<template>
  <layout>
    <div class="container mt-10">
      <h1 class="lg:text-6xl md:text-3xl sm:text-xl font-bold my-10">
        Избраное
      </h1>
      <div class="flex gap-10">
        <!-- Left -->
        <div class="h-full flex bg-white p-5 rounded flex-col justify-between max-w-[362px] w-full">
          <div class="bg-[#F3F2F1] p-3 rounded">
            <h1 class="text-base font-bold">Фильтр</h1>
          </div>
          <div class="flex justify-between w-full mt-10">
            <h4 class="text-base font-normal">Цена</h4>
            <button class="text-xs text-[#606060] font-normal bg-[#F3F2F1] p-2 rounded">Очистить</button>
          </div>
          
           
            <!-- double range input -->
          <div class="w-full">

            <DoubleRangeInput/>
          </div>
            <!-- /double range input -->
          <ul class="flex flex-col gap-5 my-10 text-[16px] text-[#414141] font-[400]">
            <li>Молоко</li>
            <li>Сливки</li>
            <li>Яйцо</li>
          </ul>

          <!-- switch -->
          <div class="flex w-full">
            <label 
              for="toogleA"
              class="flex items-center cursor-pointer"
            >
              <!-- toggle -->
              <div class="relative">
                <!-- input -->
                <input id="toogleA" type="checkbox" class="sr-only" />
                <!-- line -->
                <div class="line w-10 h-6 bg-muted rounded-full shadow-inner"></div>
                <!-- dot -->
                <div class="dot absolute w-4 h-4 bg-white rounded-full shadow left-1 top-1 transition"></div>
              </div>
              <!-- label -->
              <div class="ml-3 text-[#414141]">
                В наличии
              </div>
            </label>
          </div>
          <!-- /switch -->


          <button class="mt-5 bg-[#FF6633] text-white py-2 rounded">Применить</button>
        </div>

        <!-- Right -->
        <div class="w-full">
          <div class="flex gap-2">
            <div class="bg-[#70C05B] text-white p-1 px-5 rounded">Цена от 99 до 2599 <span class="ml-3 text-[black]">&#10005;</span></div>
            <div class="bg-[#F3F2F1] text-white p-1 px-5 text-[#606060] rounded">Очистить <span class="ml-3">&#10005;</span></div>
          </div>




          <div class="mt-8 flex justify-between flex-wrap gap-y-24">



            <!-- card -->
            <Card/>

          </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import DoubleRangeInput from '@/components/doubleRangeInput.vue'
import Card from './cards.vue'
export default {
  components:{
    DoubleRangeInput,
    Card
  }
};

</script>


<style lang="scss" scoped>


</style>
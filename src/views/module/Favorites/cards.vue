<template>
    <div v-for="i in 9" :key="i" class="w-[330px] h-[398px] shadow-[1px_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[4px_8px_16px_rgba(255,102,51,0.2)] rounded bg-white p-2">
              <div class="w-full h-[47%] flex relative justify-center">
                <img src="@/assets/images/milk/1.png" alt="">
                <img class="w-[30px] h-[27px] right-0 top-1 bg-[#F3F2F1] p-1 absolute " src="@/assets/icons/Like.png" alt="">
                <span class="bg-[#FF6633] p-1 px-2 absolute rounded-sm text-white left-0 bottom-1">
                  -50%
                </span>
              </div>
              <div class="mt-3">
                <div class="w-full justify-between flex">
                  <p class="text-xl font-bold">
                    69,99 <span>₽</span>
                  </p>
                  
                  <p class="text-lg text-[#606060]">
                    140,50 <span>₽</span>
                  </p>
                </div>
                <div class="w-full justify-between flex">
                  <p class="text-sm text-[#BFBFBF]">
                    С картой
                  </p>
                  
                  <p class="text-sm text-[#BFBFBF]">
                    Обычная
                  </p>
                </div>
                <p class="w-full text-[#414141] mt-3 text-xl">
                  Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...
                </p>
                <div class="flex gap-1 my-1">
                  <img v-for="i in 5" :key="i" class="w-[20px] h-[20px] " src="@/assets/icons/star.png" alt="">
                </div>
                <button class=" border-[#70C05B] border hover:bg-[#FF6633] hover:border-hidden mt-2 w-full hover:text-white ho p-1 py-2 rounded">В корзину</button>
              </div>
            </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
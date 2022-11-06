<template>
    <div class="flex gap-20">
            <div class="flex gap-2">
              <div class=" bg-brand-btn px-1 rounded"> <i class="fa-solid text-white fa-minus"></i> </div>
              <button class="text-[#606060] text-[16px]">Выделить всё</button>
            </div>
            <button class="text-main-color text-[16px]">Удалить выбранные</button>
          </div>


          <!-- card -->
          <div v-for="i in 4" :key="i" class="bg-white hover:shadow-[4px_8px_16px_rgba(255,102,51,0.2)] flex w-full rounded gap-3 mt-6 shadow-[1px_2px_4px_rgba(0,0,0,0.1)]">
            <div class="relative max-h-[100px] w-full  max-w-[120px] w-full ">
              <input class="absolute " type="checkbox">
              <img src="@/assets/images/milk/1.png" class=" w-36 h-20 shadow-[1px_2px_4px_rgba(0,0,0,0.1)]"  alt="">
            </div>
            <div class="w-full flex content-between gap-10 p-2 ">
              <div class="w-full flex gap-44 items-start content-between">
                <div>
                  <div class="text-[20px] text-text_black">Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</div>
                  <div class="flex gap-2 items-center">
                    <div>
                      <div class="flex gap-2 mt-2">
                        <p class="text-[16px] text-text_black font-bold">44,50 ₽</p>
                        <p class="text-[16px] ml-3 text-muted-text">50.67 ₽</p>
                        <p class="text-[16px] text-muted-text">за шт.</p>
                      </div>
                      <div class="flex gap-2">
                        <p class="text-[16px] text-[#BFBFBF]">С картой</p>
                        <p class="text-[16px] text-[#BFBFBF]">Обычная</p>
                      </div>
                    </div>
                    <div>
                      <button class="bg-[#FF6633] text-white py-2 px-2 rounded">-10%</button>
                    </div>
                  </div>

                </div>
                <div class="flex items-center">
                  <button class="bg-brand-btn w-12 h-10 rounded-tl-md rounded-bl-md"><i class="fa-solid text-white fa-minus"></i></button>
                  <div class="bg-brand-btn text-white  h-10 flex items-center">4</div>
                  <button class="bg-brand-btn w-12 h-10 rounded-tr-md rounded-br-md" ><i class="fa-solid text-white fa-plus"></i></button>
                </div>
              </div>
              <div class="w-[80px]">
                <p class="text-[20px] font-bold text-text_black">89,00 ₽</p>
                <p class="text-[17px] text-right font-bold  text-muted-text">89,00 ₽</p>
              </div>  
            </div>
          </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
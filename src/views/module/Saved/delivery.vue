<template>
<div>

   <h3 class="lg:text-4xl text-text_black md:text-xl sm:text-xl font-bold my-9">
        Куда
   </h3>
    <div class="flex space_between">
        <div>
            <label for="countries" class=" block text-[16px] text-[#8F8F8F]">Населенный пункт</label>
            <select id="countries" class="text-text_black  text-sm w-96 h-11 mt-1 rounded bg-white outline-none  focus:outline-none  shadow-[1px_2px_4px_rgba(0,0,0,0.1)] focus:border-hidden p-2.5">
            <option selected>Усть-Ижма</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            </select>
        </div>
        <div>
            <label for="" class=" block text-[16px] text-[#8F8F8F]">Улица</label>
            <input value="Пушкина" class="text-text_black mt-1 border border-[#BFBFBF] text-sm w-96 h-11 mt-1 rounded bg-white outline-none p-2.5" type="text">
        </div>
        <div>
            <label for="" class=" block text-[16px] text-[#8F8F8F]">Дом</label>
            <input value="11" class="text-text_black mt-1 border border-[#BFBFBF] text-sm w-16 h-11 mt-1 rounded bg-white outline-none p-2.5" type="text">
        </div>
        <div>
            <label for="" class=" block text-[16px] text-[#8F8F8F]">Квартира</label>
            <input value="12" class="text-text_black mt-1 border border-[#BFBFBF] text-sm w-20 h-11 mt-1 rounded bg-white outline-none p-2.5" type="text">
        </div>
        <div>
            <label for="" class=" block text-[16px] text-[#8F8F8F]">Дополнительно</label>
            <input value="12" class="text-text_black mt-1 border border-[#BFBFBF] text-sm w-32 h-11 mt-1 rounded bg-white outline-none p-2.5" type="text">
        </div>
    </div>


   <h3 class="lg:text-4xl text-text_black md:text-xl sm:text-xl font-bold my-9">
        Куда
   </h3>
    <div class="flex space_between">
        <div>
            <label for="" class=" block text-[16px] text-[#8F8F8F]">Улица</label>
            <input value="Пушкина" class="text-text_black mt-1 border border-[#BFBFBF] text-sm w-52 h-11 mt-1 rounded bg-white outline-none p-2.5" type="date">
        </div>
        <div class="flex space_between gap-4"> 
            <div>
                <label for="" class=" block text-[16px] text-[#8F8F8F]">Улица</label>
                <input  class="text-text_black mt-1 border border-[#BFBFBF] text-sm w-52 h-11 mt-1 rounded bg-white outline-none p-2.5" type="datetime">
            </div>
            <div>
                <label for="" class=" block text-[16px] text-[#8F8F8F]">Улица</label>
                <input  class="text-text_black mt-1 border border-[#BFBFBF] text-sm w-52 h-11 mt-1 rounded bg-white outline-none p-2.5" type="datetime-local">
            </div>
            <div>
                <label for="" class=" block text-[16px] text-[#8F8F8F]">Улица</label>
                <input  class="text-text_black mt-1 border border-[#BFBFBF] text-sm w-52 h-11 mt-1 rounded bg-white outline-none p-2.5" type="datetime">
            </div>
            <div>
                <label for="" class=" block text-[16px] text-[#8F8F8F]">Улица</label>
                <input  class="text-text_black mt-1 border border-[#BFBFBF] text-sm w-52 h-11 mt-1 rounded bg-white outline-none p-2.5" type="text">
            </div>
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
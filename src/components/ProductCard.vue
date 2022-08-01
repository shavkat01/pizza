<template>
  <div class="w-72 h-96 bg-white flex flex-col rounded-lg shadow-md py-1">
    <div class="head relative">
      <div class="like absolute right-2 top-2 h-40">
        <div class="bg-like-bg p-3 rounded-lg">
          <img src="@/assets/icons/Like.png" alt="" />
        </div>
      </div>
      <div class="img flex justify-center">
        <img src="@/assets/images/image.png" alt="" />
      </div>
      <div class="px-4">
        <div class="bg-main-color w-20 px-5 py-1 rounded-lg">
          <span class="text-white"> -50% </span>
        </div>
      </div>
    </div>
    <div class="price flex justify-between p-4">
      <div class="new">
        <h3 class="font-extrabold text-lg">44,50₽</h3>
        <span class="text-muted">С картой</span>
      </div>
      <div class="old">
        <h4 class="text-lg">50,50₽</h4>
        <span class="text-muted">Обычная</span>
      </div>
    </div>
    <div class="title px-4">
      <p class="text-lg">Г/Ц Блинчики с мясом вес, Россия</p>
    </div>
    <div class="star"></div>
    <div class="flex justify-center my-2">
      <button class="border-brand-btn text-brand-btn w-64 flex justify-center text-2xl rounded-md">В корзину</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.border-brand-btn {
  border: 1px solid rgb(112 192 91);
}
</style>
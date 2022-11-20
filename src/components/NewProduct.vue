<template>
  <div
    class="
      w-[300px]
      bg-white
      flex flex-col
      justify-between
      rounded-lg
      shadow-md
      py-1
      hover:shadow-[4px_8px_16px_rgba(255,102,51,0.2)]
    "
  >
    <div class="head relative">
      <div class="like absolute right-2 top-2 h-40">
        <div class="bg-like-bg p-3 rounded-lg">
          <img src="@/assets/icons/Like.png" alt="product" />
        </div>
      </div>
      <div class="img h-44 flex justify-center">
        <img class="w-full rounded-t" :src="product.photo" alt="product" />
      </div>
      <!-- <div class="px-4">
        <div class="bg-main-color w-20 px-5 py-1 rounded-lg">
          <span class="text-white"> {{ product.price }} </span>
        </div>
      </div> -->
    </div>
    <div class="price flex justify-start p-4">
      <div class="new">
        <h3 class="font-extrabold text-lg">{{ product.price }}</h3>
      </div>
    </div>
    <div class="title px-4">
      <p class="text-lg">{{ product.title }}</p>
    </div>
    <div class="star"></div>
    <div class="flex my-2 px-4">
      <button
        class="
          border-brand-btn
          text-brand-btn
          w-full
          flex
          justify-center
          text-2xl
          rounded-md
          py-2
          hover:bg-main-color
          hover:text-white
          hover:border-white
        "
      >
        В корзину
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style>
.border-brand-btn {
  border: 1px solid rgb(112 192 91);
}
</style>
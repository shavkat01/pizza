<template>
  <div
    class="
      w-[300px]
      bg-white
      flex flex-col
      justify-between
      rounded-lg
      shadow-md
      hover:shadow-[4px_8px_16px_rgba(255,102,51,0.2)]
    "
  >
    <div class="head relative">
      <div  class="absolute left-2 top-2 h-40">
        <div class="flex gap-1 items-center p-3 rounded-lg">
          <img v-if="product.cart_count" src="@/assets/icons/shopping-cart.png" alt="product" />
          <span class="text-lg font-bold">{{product.cart_count}}</span>
        </div>
      </div>
      <div class="like absolute right-2 top-2 h-40">
        <div class="bg-gradient-to-r from-like-bg p-3 rounded-lg">
          <img src="@/assets/icons/Like.png" alt="product" />
        </div>
      </div>
      <div class="img flex justify-center px-[0.5px]">
        <img class="w-full rounded-t h-44" :src="product.img" alt="product" />
      </div>
      <div class="px-4">
        <div class="bg-main-color w-20 px-5 py-1 rounded-lg">
          <span class="text-white"> {{ product.discount }} </span>
        </div>
      </div>
    </div>
    <div class="price flex justify-between p-4">
      <div class="new">
        <h3 class="font-extrabold text-lg">{{ product.new_price }}</h3>
        <span v-if="product.cart_count" class="text-muted">С картой</span>
      </div>
      <div class="old">
        <h4 class="text-lg">{{ product.old_price }}</h4>
        <span v-if="product.cart_count" class="text-muted">Обычная</span>
      </div>
    </div>
    <div class="title px-4">
      <p class="text-lg">{{ product.title }}</p>
    </div>
    <div class="star flex gap-1 mt-2 px-4" v-if="product.star"> <img v-for="i in 5" :key="i" src="@/assets/icons/star.png" alt=""> </div>
    <div class="flex my-2 py-1 px-4">
      <button
        class="
          border-brand-btn
          text-brand-btn
          w-full
          flex
          py-2
          justify-center
          text-xl
          rounded
          hover:bg-main-color
          hover:text-white
          hover:border-none
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
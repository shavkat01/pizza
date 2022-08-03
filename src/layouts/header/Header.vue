<template>
  <div class="shadow-xl h-16 w-full flex header-sticky bg-white">
    <header class="flex justify-between w-5/6 items-center gap-16 container">
      <div class="logo flex w-32 h-full gap-5 items-center cursor-pointer" @click="$router.push('/')">
        <img src="@/assets/icons/logo.svg" width="50" alt="Logo" />
        <div class="brand text-xl tracking-widest font-bold">Pizza</div>
      </div>
      <div class="flex gap-8">
        <div
          class="
            bg-brand-btn
            flex
            gap-4
            rounded
            px-5
            items-center
            cursor-pointer
          "
         @click="$router.push('/catalog')">
          <img src="@/assets/icons/menu.png" class="w-8 h-7" alt="menu" />
          <p class="text-white mr-5">Catalog</p>
        </div>
        <input
          type="text"
          placeholder="Search your pizza"
          class="border border-brand-btn w-96 p-2 rounded focus:outline-none"
        />
        <img
          src="@/assets/icons/search.png"
          alt="search"
          class="relative top-3 h-6 right-16"
        />
      </div>
      <div class="menu-icon flex gap-8 items-end">
        <div
          class="icon flex flex-col justify-center items-center cursor-pointer"
        >
          <img src="@/assets/icons/Like.png" alt="" width="25" class="" />
          <p>Избранное</p>
        </div>
        <div
          class="icon flex flex-col justify-center items-center cursor-pointer"
        >
          <img src="@/assets/icons/six.png" alt="" width="25" />
          <p>Заказы</p>
        </div>
        <div
          class="icon flex flex-col justify-center items-center cursor-pointer"
        >
          <img src="@/assets/icons/shopping-cart.png" alt="" width="25" />
          <p>Корзина</p>
        </div>
      </div>
      <div class="profile flex items-center gap-3 cursor-pointer">
        <img src="@/assets/images/avatar.png" alt="" />
        <div class="profile-name">Алексей</div>
        <img src="@/assets/icons/down.png" class="h-2" alt="" />
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header-sticky {
  position: sticky !important;
  top: 0;
  z-index: 999;
  width: 100%;
  backdrop-filter: blur(55px);
}
</style>

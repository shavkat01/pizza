<template>
  <div class="shadow-xl w-full flex header-sticky bg-white flex-wrap">
    <header class="flex justify-between items-center container py-3">
      <div
        class="flex gap-4 h-full items-center cursor-pointer"
        @click="$router.push('/')"
      >
        <img src="@/assets/icons/logo.svg" width="50" alt="Logo" />
        <div v-if="is_tablet" class="brand text-xl tracking-widest font-bold">
          Pizza
        </div>
      </div>
      <div class="flex gap-8">
        <div
          v-if="is_mobile"
          class="
            catalog-button
            bg-brand-btn
            flex
            gap-4
            rounded
            px-5
            items-center
            cursor-pointer
          "
          @click="changeIsOpen()"
        >
          <img
            v-if="is_open"
            src="@/assets/icons/x-white.png"
            class="lg:w-8 lg:h-7"
            alt="x-icon"
          />
          <img
            v-else
            src="@/assets/icons/menu.png"
            class="lg:w-8 lg:h-7"
            alt="menu"
          />
          <p v-if="is_tablet" class="text-white mr-5 select-none">Catalog</p>
        </div>
        <input
          placeholder="Search your pizza"
          class="
            border border-brand-btn
            lg:w-96
            xsm:w-[250px]
            p-2
            rounded
            focus:outline-none
          "
        />
        <img
          src="@/assets/icons/search.png"
          alt="search"
          class="relative top-3 h-6 right-16"
        />
      </div>
      <div v-if="is_mobile" class="menu-icon flex gap-8 items-end">
        <div
          @click="clickedTab('1'), $router.push('/favorites')"
          class="icon flex flex-col justify-center items-center cursor-pointer"
        >
          <img
            v-if="isFirs"
            src="@/assets/icons/like-main-color.png"
            alt=""
            width="27"
          />
          <img v-else src="@/assets/icons/Like.png" alt="" width="25" />
          <p ref="favorite" :class="{ reds: isFirs }">Избранное</p>
        </div>
        <div
          @click="clickedTab('2'), $router.push('/booking')"
          class="icon flex flex-col justify-center items-center cursor-pointer"
        >
          <img v-if="isSecond" src="@/assets/icons/package.png" alt="" width="25" />
          <img v-else src="@/assets/icons/six.png" alt="" width="25" />
          <p ref="offer" :class="{ reds: isSecond }">Заказы</p>
        </div>
        <div
          @click="clickedTab('3'), $router.push('/cart')"
          class="icon flex flex-col justify-center items-center cursor-pointer"
        >
          <img v-if="isThird" src="@/assets/icons/shopping-cart-main-color.png" alt="" width="25" />
          <img v-else src="@/assets/icons/shopping-cart.png" alt="" width="25" />
          <p ref="cart" :class="{ reds: isThird }">Корзина</p>
        </div>
      </div>
      <div
        v-if="is_mobile"
        class="profile flex items-center gap-3 cursor-pointer"
      >
        <img class="w-10 h-10" src="@/assets/images/avatar.png" alt="" />
        <div v-if="is_tablet" class="flex gap-3 items-center">
          <div class="profile-name">Алексей</div>
          <img src="@/assets/icons/down.png" class="h-2" alt="" />
        </div>
      </div>
    </header>

    <div
      v-if="is_open"
      class="absolute top-[100%] w-full bg-white py-8 shadow-xl"
    >
      <div class="container flex justify-between">
        <div
          v-for="(catalog, index) in downCatalogs"
          :key="index"
          class="flex flex-col gap-4"
        >
          <h4
            class="font-medium cursor-pointer"
            v-if="catalog.first"
            @click="$router.push(`/catalog/${catalog.first.id}`)"
          >
            {{ catalog.first.text }}
          </h4>
          <h4
            class="font-medium cursor-pointer"
            v-if="catalog.second"
            @click="$router.push(`/catalog/${catalog.second.id}`)"
          >
            {{ catalog.second.text }}
          </h4>
          <h4
            class="font-medium cursor-pointer"
            v-if="catalog.third"
            @click="$router.push(`/catalog/${catalog.third.id}`)"
          >
            {{ catalog.third.text }}
          </h4>
          <h4
            class="font-medium cursor-pointer"
            v-if="catalog.fourth"
            @click="$router.push(`/catalog/${catalog.fourth.id}`)"
          >
            {{ catalog.fourth.text }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFirs: false,
      isSecond: false,
      isThird: false,
      is_tablet: true,
      is_mobile: true,
      is_open: false,
      downCatalogs: [
        {
          first: {
            text: "Молоко, сыр, яйцо",
            id: 1,
          },
          second: {
            text: "Хлеб",
            id: 2,
          },
          third: {
            text: "Фрукты и овощи",
            id: 3,
          },
          fourth: {
            text: "Замороженные продукты",
            id: 4,
          },
        },
        {
          first: {
            text: "Напитки",
            id: 5,
          },
          second: {
            text: "Кондитерские изделия",
            id: 6,
          },
          third: {
            text: "Чай, кофе",
            id: 7,
          },
        },
        {
          first: {
            text: "Бакалея",
            id: 8,
          },
          second: {
            text: "Здоровое питание",
            id: 9,
          },
          third: {
            text: "Зоотовары",
            id: 10,
          },
        },
        {
          first: {
            text: "Непродовольственные товары",
            id: 11,
          },
          second: {
            text: "Детское питание",
            id: 12,
          },
          third: {
            text: "Мясо, птица, колбаса",
            id: 13,
          },
        },
      ],
    };
  },
  methods: {
    onResize(e) {
      if (window.innerWidth <= 1280) {
        this.is_tablet = false;
      } else {
        this.is_tablet = true;
      }
      if (window.innerWidth <= 768) {
        this.is_mobile = false;
      } else {
        this.is_mobile = true;
      }
    },
    changeIsOpen() {
      this.is_open = !this.is_open;
    },
    clickedTab(val) {
      if (val == "1") {
        this.isFirs = true;
        this.isSecond = false;
        this.isThird = false;
      }
      if (val == "2") {
        this.isSecond = true;
        this.isThird = false;
        this.isFirs = false;
      }
      if (val == "3") {
        this.isThird = true;
        this.isSecond = false;
        this.isFirs = false;
      }
    },
    // FaVClick(){
    //   this.$refs.favorite.classList.add('reds')
    //   this.$refs.offer.classList.remove('reds')
    //   this.$refs.cart.classList.remove('reds')
    // },
    // OfClick(){
    //   this.$refs.offer.classList.add('reds')
    //   this.$refs.cart.classList.remove('reds')
    //   this.$refs.favorite.classList.remove('reds')

    // },
    // CaClick(){
    //   this.$refs.cart.classList.add('reds')
    //   this.$refs.favorite.classList.remove('reds')
    //   this.$refs.offer.classList.remove('reds')

    // }
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
    console.log(this.$refs.favorite);
  },
};
</script>

<style lang="scss">
.header-sticky {
  position: sticky !important;
  top: 0;
  z-index: 999;
  width: 100%;
  backdrop-filter: blur(55px);
}
.reds {
  color: #ff6633;
}
</style>
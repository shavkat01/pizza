<template>
  <div class="shadow-xl w-full flex header-sticky bg-white flex-wrap">
    <header class="flex justify-between items-center container py-3">
      <router-link to="/">
        <div class="flex gap-4 h-full items-center cursor-pointer">
          <img src="@/assets/icons/logo.svg" width="50" alt="Logo" />
          <div v-if="is_tablet" class="brand text-xl tracking-widest font-bold">
            Pizza
          </div>
        </div>
      </router-link>
      <div class="flex gap-8">
     
        <div
          v-if="is_mobile"
          class="
            catalog-button
            bg-brand-btn
            flex
            gap-4
            rounded
            px-10
            items-center
            cursor-pointer
          "
          @mouseenter="hiddenClass = true"
          @click="changeIsOpen(), $router.push(`/catalog`)"
        >
          <!-- <img
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
          /> -->
            <p v-if="is_tablet" class="text-white select-none">Catalog</p>
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
            v-if="$route.path == '/favorites'" 
            src="@/assets/icons/like-main-color.png"
            alt=""
            width="25"
          />
          <img v-else src="@/assets/icons/Like.png" alt="" width="25" />
          <p ref="favorite" :class="{ reds: $route.path == '/favorites' }">Избранное</p>
        </div>
        <div
          @click="clickedTab('2'), $router.push('/booking')"
          class="icon flex flex-col justify-center items-center cursor-pointer"
        >
          <img
            v-if="$route.path == '/booking'" 
            src="@/assets/icons/package.png"
            alt=""
            width="25"
          />
          <img v-else src="@/assets/icons/six.png" alt="" width="25" />
          <p ref="offer" :class="{ reds: $route.path == '/booking' }">Заказы</p>
        </div>
        <div
          @click="clickedTab('3'), $router.push('/cart')"
          class="icon flex flex-col justify-center items-center cursor-pointer"
        >
          <img
            v-if="$route.path == '/cart'"
            src="@/assets/icons/shopping-cart-main-color.png"
            alt=""
            width="25"
          />
          <img
            v-else
            src="@/assets/icons/shopping-cart.png"
            alt=""
            width="25"
          />
          <p ref="cart" :class="{ reds: $route.path == '/cart' }">Корзина</p>
        </div>
      </div>

      <!-- Profil part -->
      <div
        class="profile flex items-center gap-3 cursor-pointer"
       
      >
        <span class="w-10 h-10 rounded-full" :class="{'bg-brand-btn' : is_not_logged}"></span>
        <img class="w-10 h-10" src="@/assets/images/avatar.png" alt="" />
        <div  class="flex gap-3 items-center">
          <div class="profile-name"  @click="is_auth = !is_auth" >Login</div>
          <div @click="is_profile_open = !is_profile_open">
            <img src="@/assets/icons/down.png" class="h-2" alt="" />
          </div>
        </div>
        <LoginDropDown @toLogin="toLogin" v-if="is_profile_open" />
      </div>
    </header>
    <transition name="fade">
      <DownCatalogs class="" @mouseleave="hiddenClass = false" v-show="$route.path == '/catalog' && hiddenClass"/>
    </transition>
    <Auth v-if="is_auth" @closeModal="closeModal" @submit="submit" />
  </div>
</template>

<script>
import Auth from "@/views/module/Profile/Authentification.vue";
import LoginDropDown from "@/components/LoginDropDown.vue";
import DownCatalogs from "../../views/module/Category/HeaderDownCatalog.vue";
import {mapState, mapActions} from 'vuex'
export default {
  components: {
    DownCatalogs,
    Auth,
    LoginDropDown,
  },
  data() {
    return {
       is_profile_open: false,
      is_not_logged: false,
      is_auth: false,
      hiddenClass: false,
      is_tablet: true,
      is_mobile: true,
      is_open: false,
    };
  },
  computed:{
    ...mapState(['catalog'])
  },
  methods: {
    ...mapActions(['FETCH_DISCOUNT_PRODUCTS', 'FETCH_CATALOGS_DATA']),
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
     closeModal() {
      this.is_auth = false;
    },
    toLogin(){
      this.is_auth = true;
    },
  },
  mounted() {
    window.addEventListener("resize", this.onResize);

    // this.FETCH_DISCOUNT_PRODUCTS()
    this.FETCH_CATALOGS_DATA()
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .7s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
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
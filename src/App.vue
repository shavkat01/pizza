<template>
  <router-view />
  <!-- <RouterView class="router-view" v-slot="{ Component }">
    <Transition name="page-opacity" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView> -->
</template>

<script>
export default {
  components:{
    
  }
};
</script>

<style>
/* .page-opacity-enter-active,
.page-opacity-leave-active {
  transition: 10ms ease all;
}
.page-opacity-enter-from,
.page-opacity-leave-to {
  opacity: 0;
} */
</style>
<template>
  <div
    class="
      w-[8%]
      h-[150%]
      bg-white
      top-[100%]
      absolute
      flex
      justify-center
      items-center
      flex-col
      rounded
    "
  >
    <div
      class="
        w-full
        h-full
        border border-muted
        flex
        justify-center
        items-center
        rounded
      "
      @click="$router.push({ name: 'profile' })"
    >
      <span>Profile</span>
    </div>
    <div
      class="
        w-full
        h-full
        border border-muted border-t-0
        flex
        justify-center
        items-center
        rounded
      "
      @click="toLogin"
    >
      <span>Login</span>
      <span v-if="is_logged">Log out</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      is_logged: false,
      is_auth: false,
    };
  },
  methods: {
    // closeAuthModal() {
    //   this.is_auth = false;
    // },
    toLogin() {
      this.$emit("toLogin");
    },
  }
};
</script>
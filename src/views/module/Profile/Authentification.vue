<template>
  <div class="wrapper w-full absolute bg-modal-bg flex justify-center">
    <div class="modal w-1/4 bg-white mt-[50vh] -translate-y-1/2">
      <span @click="closeModal" class="w-full flex justify-end bg-slate-400">
        <img src="@/assets/icons/x.png" alt="'X' button" />
      </span>
      <div class="main-modal px-10 py-4">
        <div>
          <p class="text-center text-2xl font-bold">Вход</p>
        </div>

        <div class="mt-4">
          <div>
            <p class="text-xl text-gray">Username</p>
            <input
              v-model="data.username"
              class="border-green text-xl px-2 py-1 w-full rounded border"
              type="text"
            />
            <p class="text-xl text-gray">Password</p>
            <input
              v-model="data.password"
              class="border-green text-xl px-2 py-1 w-full rounded border"
              type="text"
            />
          </div>

          <button
            class="bg-red text-2xl mt-2 text-center py-2 rounded w-full"
            @click="submit"
          >
            Вход
          </button>

          <div class="mt-10 flex justify-between align-center">
            <button class="reg rounded py-1 w-1/3">Регистрация</button>
            <a class="" href="#">Забыли пароль?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    submit() {
      this.$emit("submit", this.data);
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: 100vh !important;
}
.border-green {
  border-color: rgb(74 222 128);
}
button.bg-red {
  background-color: #fcd5bad5;
  color: #ff6633;
  border-color: rgb(74 222 128);
}
button.reg {
  color: rgb(74 222 128);
  border: 1px solid rgb(74 222 128);
}
input {
  outline: none;
}
</style>
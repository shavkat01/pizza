<template>
  <div
    class="w-[400px] bg-white flex flex-col rounded-lg shadow-md py-1"
  >
    <div class="head relative w-full">
      <img class="w-full rounded-t" :src="add_data.photo" alt="" />
    </div>
    <div class="price flex justify-between p-4">
      <div class="new">
        <span class="text-muted">{{ add_data.date }}</span>
      </div>
    </div>
    <div class="title px-4">
      <p class="text-2xl font-bold">{{ add_data.title }}</p>
    </div>
    <div class="star px-4">
      {{ add_data.text }}
    </div>
    <div class="flex justify-start my-2 pl-4">
      <button
        class="text-white text-xl text-center rounded bg-brand-btn py-2 px-10"
      >
        Подробнее
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    add_data: Object,
  },
};
</script>

<style>
.border-brand-btn {
  border: 1px solid rgb(112 192 91);
}
</style>
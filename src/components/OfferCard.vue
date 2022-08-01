<template>
  <div
    class="bg-brand-btn w-[600px] h-[220px] flex rounded-md justify-between"
    :class="data.bg_data"
  >
    <div class="info py-8 px-6 my-auto">
      <div class="title text-2xl font-bold">{{ data.title }}</div>
      <div class="text mt-5">
        {{ data.text }}
      </div>
    </div>
    <div class="px-6 w-3/4 my-auto">
      <img class="" :src="data.img" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style>
</style>
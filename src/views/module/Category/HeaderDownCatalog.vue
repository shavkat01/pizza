<template>
  <div class="absolute top-[80%] w-full bg-white py-4 pt-12 shadow-xl">
    <div class="container flex justify-between">
      <div
        class="flex flex-wrap justify-between"
      >
        <h4
          class="font-medium w-80 h-12 cursor-pointer"
          @click="$router.push(`/catalog_info/${catalog._id}`)"
          v-for="(catalog, index) in $store.state.catalog.catalogs"
            :key="index"
        >
          {{ catalog.title }}
        </h4>
      </div>
    </div>
    

  </div>
</template>

<script>

export default {
  data() {
    return {
      
    };
  },
  mounted() {
  },
};
</script>
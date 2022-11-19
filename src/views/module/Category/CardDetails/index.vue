<template>
  <div>
    <h1>
      Details
    </h1>
      <!-- <img class="w-full h-full rounded-md " :src="`http://192.168.28.40:4000${data.photo}`" /> -->

    {{getCatalogId}}
    {{ $route.params.id}}

  </div>
</template>

<script>
import { mapActions, mapGetters} from "vuex";

export default {
    computed: {
    ...mapGetters(['getCatalogId']),
    },
    methods:{

    },
    mounted() {

    }
}
</script>

<style>

</style>
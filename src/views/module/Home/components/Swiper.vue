<template>
  <swiper
    :autoplay="{ delay: 2000 }"
    :modules="modules"
    :loop="true"
    class="mySwiper w-full"
  >
    <swiper-slide>
      <img src="@/assets/images/slider.png" class=" w-full h-52" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/images/slider.png" class=" w-full h-52" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/images/slider.png" class=" w-full h-52" alt="" />
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

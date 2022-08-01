<template>
  <div class="bg-body-color">
    <Header />
    <!-- <mobile-menu /> -->
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>


<script>
import Header from "./header/Header";
import Footer from "./footer/Footer";
// import MobileMenu from "./header/MobileMenu";

export default {
  name: "Layout",
  components: {
    // MobileMenu,
    Footer,
    Header,
  },
};
</script>
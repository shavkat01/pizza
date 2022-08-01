<template>
  <div>
    <Header/>
    <!-- <mobile-menu /> -->
    <main class="bg-body-color">
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
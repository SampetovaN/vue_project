<template>
  <div class="content">
    <div class="content__main">
      <Header />
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: { Footer, Header }
};
</script>

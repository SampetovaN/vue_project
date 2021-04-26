<template>
  <div class="content">
    <div class="content__main">
      <Header />
      <Main />
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
export default {
  components: { Main, Footer, Header }
};
</script>

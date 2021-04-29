<template>
  <div class="content">
    <div class="content__main">
      <Header />
      <main>
        <Intro />
      </main>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";

export default {
  components: { Footer, Header, Intro }
};
</script>

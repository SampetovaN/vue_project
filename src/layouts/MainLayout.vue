<template>
  <div class="content">
    <div class="content__main">
      <Header />
      <main>
        <Intro />
        <AccountList />
      </main>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import AccountList from "@/components/AccountList";

export default {
  components: { AccountList, Footer, Header, Intro }
};
</script>

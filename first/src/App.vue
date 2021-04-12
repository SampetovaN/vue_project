<template>
  <Header></Header>
</template>
<script>
import Header from "@/components/Header";
export default {
  components: {
    Header
  },
  name: "App",
  mounted() {
    console.log(process.env.NODE_ENV); // OUTPUT: production
  }
};
</script>

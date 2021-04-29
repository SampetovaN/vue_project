<template>
  <section class="intro">
    <ul class="intro__list">
      <li v-for="href in hrefs" :key="href.id" class="intro__item">
        <router-link class="intro__link" :to="href.to">
          <p class="intro__desc">
            <span
              class="intro__text"
              v-for="(text, i) in href.texts"
              :key="i"
              >{{ text }}</span
            >
          </p>
        </router-link>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: "Intro",

  data: function() {
    return {
      hrefs: [
        {
          to: "/",
          texts: ["Аккаунты", "minecraft"]
        },
        {
          to: "/catalog",
          texts: ["Каталог", "магазина"]
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.router-link-active {
  cursor: default;
  &:focus,
  &:hover {
    opacity: 1;
  }
  span {
    &:after {
      background: linear-gradient(
        270deg,
        rgba(24, 24, 24, 0) 0%,
        #737be4 75%,
        #c667cd 87.5%,
        #fab55b 100%
      );
    }
  }
}
</style>

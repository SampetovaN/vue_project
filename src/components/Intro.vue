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

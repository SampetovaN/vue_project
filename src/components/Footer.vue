<template>
  <footer class="content__footer footer">
    <ul class="footer__list">
      <li
        v-for="href in FOOTER_LINKS"
        :key="href.href"
        class="footer__list-item"
      >
        <a :href="href.href">{{ href.text }}</a>
      </li>
    </ul>
    <p>
      Платформа для продажи цифровых товаров. Торговый агрегатор по оказанию
      услуг в сфере торговли. Все закупаемые ключи приобретаются у официальных
      поставщиков. Все названия продуктов, компаний и марок, логотипы и товарные
      знаки являются собственностью соответствующих владельцев.
    </p>
  </footer>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Footer",
  computed: {
    ...mapGetters(["FOOTER_LINKS"])
  }
};
</script>

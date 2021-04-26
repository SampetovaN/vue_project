<template>
  <footer class="content__footer footer">
    <ul class="footer__list">
      <li v-for="href in hrefs" :key="href.id" class="footer__list-item">
        <a v-bind:href="href.href">{{ href.text }}</a>
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
export default {
  name: "Footer",
  data: function() {
    return {
      hrefs: [
        { href: "#", text: "Правила возврата" },
        { href: "#", text: "Поддержка" },
        { href: "#", text: "Пользовательское соглашение" },
        { href: "#", text: "YouTube" }
      ]
    };
  }
};
</script>

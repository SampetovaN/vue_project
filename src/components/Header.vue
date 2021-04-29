<template>
  <header class="header">
    <nav class="header__main-nav">
      <ul class="header__list">
        <li class="header__list-item"><a href="#">Мерч заквиеля</a></li>
        <li class="header__list-item"><a href="#">Поддержка</a></li>
        <li class="header__list-item header__list-item--logo">
          <router-link to="/">
            <img
              :src="require('../assets/img/logo.svg')"
              width="74"
              height="84"
              alt="Логотип компании"
            />
          </router-link>
        </li>
        <li class="header__list-item"><a href="#">Правила возврата</a></li>
        <li class="header__list-item"><a href="#">Соглашение</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
.router-link-active {
  cursor: auto;
  img {
    &:hover,
    &:focus,
    &:active {
      opacity: 1;
    }
  }
}
</style>

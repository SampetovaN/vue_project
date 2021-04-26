<template>
  <header class="header">
    <nav class="header__main-nav">
      <ul class="header__list">
        <li class="header__list-item"><a href="#">Мерч заквиеля</a></li>
        <li class="header__list-item"><a href="#">Поддержка</a></li>
        <li class="header__list-item header__list-item--logo">
          <a>
            <logo width="74" height="84" />
          </a>
        </li>
        <li class="header__list-item"><a href="#">Правила возврата</a></li>
        <li class="header__list-item"><a href="#">Соглашение</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import Logo from "@/components/icons/logo";

export default {
  name: "Header",
  components: { Logo }
};
</script>

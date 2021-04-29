<template>
  <div class="accounts__fullImage">
    <p class="accounts__description">
      Хватит сидеть без дела, покупай и играй на официальных серверах Minecraft.
    </p>
    <div class="accounts__img-wrapper">
      <picture>
        <img
          :src="require('../assets/img/logo.svg')"
          width="180"
          height="180"
          alt="Логотип компании"
        />
      </picture>
    </div>
    <p class="accounts__moto">Лучшие предложения магазина от Заквиеля!</p>
  </div>
</template>

<script>
export default {
  name: "AccountList"
};
</script>

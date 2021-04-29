<template>
  <li
    @click="updateUsername"
    :class="[
      'accounts_item account',
      account.isActive ? 'account--active' : ''
    ]"
  >
    <div class="account__wrapper">
      <div :class="'account__icon account__icon--' + accountClass">
        <span>{{ accountSymbol }}</span>
      </div>
      <div class="account__content">
        <h3>{{ account.title }}</h3>
        <p>{{ account.description }}</p>
        <a class="account__button" href="#"
          ><span>Купить за {{ account.price }} ₽ →</span></a
        >
      </div>
    </div>
  </li>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "AccountList",
  props: {
    account: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  computed: {
    accountClass() {
      return this.account.status;
    },
    accountSymbol() {
      return this.account.status.slice(0, 1);
    }
  },
  methods: {
    ...mapMutations(["SET_ACTIVE"]),
    updateUsername() {
      console.log(this.account);
      this.SET_ACTIVE(this.account);
    }
  }
};
</script>

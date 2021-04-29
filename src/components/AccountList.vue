<template>
  <section class="accounts">
    <h2 class="visually-hidden">Список аккаунтов</h2>
    <div class="accounts__wrapper">
      <AccountImage />
      <ul class="accounts__list">
        <AccountItem
          v-for="account in ACCOUNTS"
          :key="account.title"
          :account="account"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import AccountItem from "@/components/AccountItem";
import AccountImage from "@/components/AccountImage";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "AccountList",
  components: { AccountImage, AccountItem },
  computed: {
    ...mapGetters(["ACCOUNTS"])
  },
  methods: {
    ...mapMutations(["SET_STATUS_ACCOUNT"])
  },
  created() {
    this.SET_STATUS_ACCOUNT(false);
  }
};
</script>

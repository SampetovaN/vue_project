import { createStore } from "vuex";

export default createStore({
  state: {
    accounts: [
      {
        title: "Minecraft Silver",
        description:
          "Самый бюджетный вариант для игры на лицензионных серверах.",
        price: "169",
        status: "silver",
        img: "silver.png"
      },
      {
        title: "Minecraft Premium",
        description:
          "Полный доступ, предоставляющий безграниченные возможности.",
        price: "169",
        status: "premium",
        img: "premium.png"
      },
      {
        title: "Minecraft Gold",
        description:
          "Лучшее соотношение цены и возможностей есть возможность смены скина.",
        price: "169",
        status: "gold",
        img: "gold.png"
      }
    ],
    footerLinks: [
      { href: "#", text: "Правила возврата" },
      { href: "#", text: "Поддержка" },
      { href: "#", text: "Пользовательское соглашение" },
      { href: "#", text: "YouTube" }
    ]
  },
  mutations: {
    SET_STATUS_ACCOUNT(state) {
      return state.accounts.map(item => (item.isActive = false));
    },
    SET_ACTIVE(acc) {
      return this.state.accounts.map(account => {
        if (account.name !== acc.name) {
          account.isActive = false;
        } else {
          account.isActive = true;
        }
        return account;
      });
    }
  },
  actions: {},
  getters: {
    ACCOUNTS(state) {
      return state.accounts;
    },
    FOOTER_LINKS(state) {
      return state.footerLinks;
    }
  }
});

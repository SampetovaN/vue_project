export default {
  name: "App",
  data() {
    return {
      mya: false,
      a: `<a>mya</a>`,
      span: `<span>nemya</span>`
    };
  },
  computed: {
    ff() {
      return this.mya ? this.span : this.a;
    }
  }
};

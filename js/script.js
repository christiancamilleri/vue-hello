const { createApp } = Vue

createApp({
  data() {
    return {
      titleText: "Primo esercizio utilizzando VUE",
      titleClass: "",
      input: "",
      img: "img/img.JPG",
    }
  },
  methods: {
    changeTitleClass() {
      this.titleClass = this.input;
    },

  }
}).mount('#app')
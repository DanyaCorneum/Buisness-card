import { defineStore } from "pinia";

export const useProductStorage = defineStore("products", {
  state: () => ({
    products: [
      {
        name: "Book",
        description: "Some description",
        price: "19.99$",
        id: 1,
      },
      {
        name: "Map",
        description: "Some description",
        price: "19.99$",
        id: 2,
      },
      {
        name: "Cup",
        description: "Some description",
        price: "19.99$",
        id: 3,
      },
    ],
  }),
  getters: {
    getProducts: (state) => state.products,
  },
  actions: {
    addProduct(item) {
      this.products.push(item);
    },
  },
});

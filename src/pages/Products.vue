<script setup>
import { useProductStorage } from "@/store/ourProducts";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import InfoBlock from "@/widgets/InfoBlock.vue";

const store = useProductStorage();
const itemData = ref({ name: "", description: "", price: "" });

function addItem() {
  const regex = /^-?\d+(\.\d+)?$/;
  if (regex.test(itemData.value.price)) {
    store.addProduct({ ...itemData.value, price: `${itemData.value.price}$` });
    itemData.value = { name: "", description: "", price: "" };
  } else {
    alert("invalid input");
  }
}
</script>

<template>
  <h1>Products</h1>
  <ul>
    <li v-for="item in store.products">
      <p>
        {{ item.name }};
        {{ item.description }};
        {{ item.price }}
      </p>
    </li>
  </ul>
  <form class="add-to-products">
    <input
      class="add-to-products__input"
      type="text"
      placeholder="name"
      name="name"
      v-model="itemData.name"
    />
    <input
      class="add-to-products__input"
      type="text"
      placeholder="desc"
      name="desc"
      v-model="itemData.description"
    />
    <input
      class="add-to-products__input"
      type="number"
      min="0"
      max="100"
      placeholder="price"
      name="price"
      v-model="itemData.price"
    />
    <button @click.prevent="addItem" class="add-to-products__btn">add</button>
  </form>
</template>

<style lang="scss">
@import "../assets/main.scss";

.add-to-products {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 30%;
  }
}
ul {
  list-style: none;
  padding: 0;
  color: $green;
}
h1 {
  color: $green;
}
</style>

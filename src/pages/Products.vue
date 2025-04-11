<script setup>
import { useProductStorage } from "@/store/ourProducts";
import { storeToRefs } from "pinia";
import InfoBlock from "@/widgets/InfoBlock.vue";

const store = useProductStorage();

</script>

<template>
  <h1>Products</h1>
</template>

<style lang="scss">
@import "../assets/main.scss";
h1 {
  color: $green;
}
</style>

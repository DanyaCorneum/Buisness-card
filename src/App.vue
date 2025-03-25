<script setup>
import { RouterView } from "vue-router";
import Navigation from "./widgets/Navigation.vue";
</script>

<template>
  <main>
    <Navigation />
    <RouterView> </RouterView>
  </main>
</template>

<style>
#app {
  text-align: center;
}
</style>

<script setup>
const props = defineProps({
  className: String,
});
</script>

<template>
  <button @click="onClick" :class="props.className">
    <slot />
  </button>
</template>

<style lang="scss">
@import "/src/assets/main.scss";
button {
  background-color: $green;
  border: none;
  color: $dark-green;
  width: 100%;
  max-width: 200px;
  height: 50px;
  font-size: 1.2rem;
  border-radius: 10px;
}

button:hover {
  cursor: pointer;
}
button:active {
  background-color: rgb(160, 160, 160);
  transition: ease 200ms;
}
</style>

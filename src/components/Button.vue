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
button {
  background-color: rgb(91, 98, 92);
  border: none;
  color: rgb(0, 0, 0);
  width: 100px;
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

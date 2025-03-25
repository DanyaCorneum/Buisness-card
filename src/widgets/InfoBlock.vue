<script setup>
const props = defineProps({
  header: String,
  text: String,
  footer: String,
  className: String,
});
</script>

<template>
  <div :className="props.className">
    <h3>
      <slot name="header"></slot>
    </h3>
    <p>
      <slot name="main"></slot>
    </p>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

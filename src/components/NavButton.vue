<script setup>
import { RouterLink } from "vue-router";
import Button from "@/components/Button.vue";

const props = defineProps({
  link: String,
  class: String,
});
</script>
<template>
  <RouterLink :to="props.link">
    <Button :class-name="`${props.class}`"><slot /></Button>
  </RouterLink>
</template>


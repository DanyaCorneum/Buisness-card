<script setup>
import Button from "@/components/Button.vue";

function login(e) {
  alert("You have login");
}
</script>

<template>
  <input type="text" />
  <Button @on-some-event="login">Log in</Button>
</template>

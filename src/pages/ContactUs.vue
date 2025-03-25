<script setup>
import BackButton from "@/components/BackButton.vue";
import NavButton from "@/components/NavButton.vue";
const ourTeam = [
  { name: "Bob", phone: "8-999-999-99-99" },
  { name: "Alice", phone: "8-999-999-99-99" },
  { name: "John", phone: "8-999-999-99-99" },
];
</script>

<template>
  <RouterView />
  <div class="contact-us">
    <h1>Contact us</h1>
    <div v-for:="i in ourTeam">{{ `${i.name} --- ${i.phone}` }}</div>
  </div>
  <br />
  <BackButton />
  <NavButton link="/contact-us/login">Login</NavButton>
</template>

<style scoped lang="scss">
.contact-us {
  color: rgb(166, 191, 145);
}
</style>

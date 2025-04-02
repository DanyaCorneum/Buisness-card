<script setup>
import NavButton from "../components/NavButton.vue";
</script>

<template>
  <div class="navigation">
    <p class="nav__header">Some company</p>
    <div class="nav__buttons">
      <NavButton :link="`/`" :class="`nav-button`">home</NavButton>
      <NavButton :link="`/about`" :class="`nav-button`">about</NavButton>
      <NavButton :link="`/products`" :class="`nav-button`">products</NavButton>
      <NavButton :link="`/contact-us`" :class="`nav-button`"
        >contuct us</NavButton
      >
      <NavButton :link="`/news`" :class="`nav-button`">news</NavButton>
      <NavButton :link="`/wishes`" :class="`nav-button`">wishes</NavButton>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/main.scss";

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid $green;
  padding: 0.5rem;
}
.nav__buttons {
  padding: 20px;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}
.nav__header {
  color: $green;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
}
.nav-button {
  border-radius: 0;
  background-color: $green;
  color: $dark-green;
  border-top: 5px solid $green;
  border-bottom: 5px solid $green;
  &:hover {
    cursor: pointer;
    transition: border-bottom 200ms ease-in-out;
    border-bottom: 5px solid $light-green;
  }
}
</style>

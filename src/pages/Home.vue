<script setup>
import InfoBlock from "@/widgets/InfoBlock.vue";
</script>

<template>
  <div class="home">
    <InfoBlock class-name="home-info">
      <template #header>
        <h3>Lorem ipsum dolor sit amet.</h3>
      </template>
      <template #main>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
          reprehenderit! Odio esse facilis magni temporibus sapiente quo
          consequatur earum cum? Nemo, rem? Quidem, nobis. Aut tenetur rerum
          minima laboriosam non.
        </p>
      </template>
      <template #footer>
        <p>Lorem ipsum dolor sit amet.</p>
      </template>
    </InfoBlock>
    <InfoBlock class-name="other">
      <template #main>
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </template>
    </InfoBlock>
  </div>
</template>

<style lang="scss">
@import "../assets/main.scss";
.home {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 40px;

  .home-info {
    background-color: $green;
    width: 40%;
    height: 600px;
    display: flex;
    flex-direction: column;
    & * {
      text-align: start;
    }
  }
  .other {
  }
}
</style>

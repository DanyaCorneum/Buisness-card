<script setup>
import InfoBlock from "@/widgets/InfoBlock.vue";
import axios from "axios";
import { ref } from "vue";

const mainHeader = ref("Sorry, no content");
const mainText = ref("Sorry, no content");
const mainFooter = ref("Sorry, no content");
const features = ref([]);

axios
  .get(`http://localhost:3001/home`)
  .then((res) => (mainHeader.value = res.data[0].content));
axios
  .get(`http://localhost:3001/home`)
  .then((res) => (mainText.value = res.data[1].content));
axios
  .get(`http://localhost:3001/home`)
  .then((res) => (mainFooter.value = res.data[2].content));
axios
  .get(`http://localhost:3001/home`)
  .then((res) => (features.value = res.data[3].content));
</script>

<template>
  <div class="home">
    <InfoBlock class-name="home-info">
      <template #header>
        <h3>{{ mainHeader }}</h3>
      </template>
      <template #main>
        <p>
          {{ mainText }}
        </p>
      </template>
      <template #footer>
        <p>{{ mainFooter }}</p>
      </template>
    </InfoBlock>
    <InfoBlock class-name="other">
      <template #main>
        <ul>
          <li v-for="item in features">{{ item !== undefined ? item : "SORRY" }}</li>
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
    display: flex;
    color: $dark-green;
    padding: 10px;
    flex-direction: column;
    border-radius: 10px;
    & * {
      text-align: start;
    }
  }
  .other {
    width: 40%;
    color: $green;
    border: 2px solid $green;
    border-radius: 10px;
    text-align: start;
    padding: 10px;
  }
}
</style>

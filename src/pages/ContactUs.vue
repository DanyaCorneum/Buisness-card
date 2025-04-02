<script setup>
import InfoBlock from "@/widgets/InfoBlock.vue";
import axios from "axios";
import { ref } from "vue";

const personal = ref([]);
axios
  .get("http://localhost:3001/about_us")
  .then((res) => (personal.value = res.data));
</script>

<template>
  <div class="contact-us">
    <InfoBlock v-for="persona in personal" class-name="person">
      <template #header
        ><h3>
          {{ persona.name }}
        </h3></template
      >
      <template #main>
        <p>
          {{ persona.description }}
        </p>
      </template>
      <template #footer>
        <p>
          {{ persona.number }}
        </p>
      </template>
    </InfoBlock>
  </div>
</template>

<style lang="scss">
@import "../assets/main.scss";
.contact-us {
  margin: 50px;
  .person {
    border: 2px solid $green;
    width: 30%;
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 10px;
    color: $green;
  }
}
</style>

<script setup>
import Button from "@/components/Button.vue";
import { ref } from "vue";
import axios from "axios";

const whish = ref("");
const listOfWhishes = ref([]);
axios
  .get("http://localhost:3001/whishes/")
  .then((res) => (listOfWhishes.value = res.data));

function addWhish(e) {
  axios.post("http://localhost:3001/whishes/", { content: whish.value });

  axios
    .get("http://localhost:3001/whishes/")
    .then((res) => (listOfWhishes.value = res.data));

  whish.value = " ";
}
</script>

<template>
  <div class="whishes">
    <h1>Whishes</h1>
    <form @submit.prevent="addWhish">
      <input v-model="whish" type="text" name="" id="" />
      <button class="submit">Apply</button>
    </form>

    <ul class="whishlist">
      <li v-for="w in listOfWhishes">
        {{ w.content }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import "../assets/main.scss";
.whishes {
  color: $green;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    input {
      width: 35%;
      height: 100%;
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
    .submit {
      box-sizing: border-box;
      color: $dark-green;
      background-color: $green;
      height: 100%;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
  }
  li {
    list-style: none;
  }
}
</style>

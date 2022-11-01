<template>
  <div class="main">
    <form @submit.prevent="">
      <input type="text" v-model="account" name="walletAddress" id="" />

      <button type="submit" @click="request">Request Token</button>
    </form>
  </div>
</template>

<script setup>
import { Faucet } from "../stores/Faucet";
import { storeToRefs } from "pinia"

const store = Faucet();
const {} = storeToRefs(store);



async function  request() {
    console.log(await store.requestToken());
}

</script>

<style scoped></style>
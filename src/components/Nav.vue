<template>
  <nav>
    <a href="#"> But_Token Faucet </a>
    <a href="#"> {{ account }} </a>
  </nav>
</template>

<script setup>
import { Faucet } from "../stores/Faucet";

const store = Faucet();

const account = await store.getUser();
</script>

<style scoped>
nav {
  position: relative;
  top: 0;
  max-width: 1280px;
  width: 100%;
  font-size: 1.5em;
  text-align: center;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}
</style>
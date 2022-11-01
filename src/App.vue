<template>
  <div class="">
    <Suspense>
      <Nav />
      
      <template #fallback>
        Loading...
      </template>
    </Suspense>

    <Main />
  </div>
</template>

<script setup>
import Main from "./components/Main.vue";
import Nav from "./components/Nav.vue";

</script>

<style scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
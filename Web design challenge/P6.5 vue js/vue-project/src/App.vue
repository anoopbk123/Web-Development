<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBarVue from "@/components/NavBar.vue";
</script>

<template>
  <NavBarVue title="Learn vue js" />

  <RouterView />
</template>

<style scoped></style>

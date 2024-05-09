<script setup lang="ts">
import Footer from "../components/Footer.vue";
import NavMenu from "../components/NavMenu.vue";
import {onMounted} from "vue";
import {initFlowbite} from "flowbite";
onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <NavMenu/>
  <div class="container-sm bg-gray-100">
    <slot/>
  </div>
  <Footer/>
</template>

<style scoped>

</style>
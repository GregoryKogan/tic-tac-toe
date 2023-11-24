<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAppStore } from "@/store/app";

export default defineComponent({
  name: "App",
  setup() {
    const store = useAppStore();
    return { store };
  },
});
</script>

<style>
body {
  background-color: rgb(var(--v-theme-background));
}
</style>

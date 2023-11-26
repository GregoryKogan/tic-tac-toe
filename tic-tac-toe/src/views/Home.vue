<template>
  <v-container>
    <h1>HelloWorld</h1>
    <v-btn @click="run">RUN</v-btn>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { int_sqrt } from "@/wasm/functions";

export default defineComponent({
  name: "Home",
  methods: {
    run() {
      console.log(int_sqrt(1000000000));

      const wasm_worker = new Worker(
        new URL("@/wasm/very_slow_function.worker.ts", import.meta.url)
      );
      wasm_worker.onmessage = (e) => {
        console.log(e.data);
      };
      wasm_worker.postMessage(10);
    },
  },
});
</script>
@/wasm/wasm_functions

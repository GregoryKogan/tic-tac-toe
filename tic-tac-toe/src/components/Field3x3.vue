<template>
  <div class="field-3x3">
    <Field3x3Cell
      v-for="index in 9"
      :key="index"
      :i="Math.floor((index - 1) / 3)"
      :j="(index - 1) % 3"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Field3x3Cell from "@/components/Field3x3Cell.vue";

export default defineComponent({
  name: "Field3x3",
  components: {
    Field3x3Cell,
  },
});
</script>

<style scoped>
.field-3x3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  aspect-ratio: 1 / 1;

  width: min(95%, 50vh);
}
</style>

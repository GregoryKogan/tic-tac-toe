<template>
  <div @click="onClick" class="field-3x3-cell">
    <v-img
      v-if="store.game3x3.getCell(i, j) == 1"
      src="@/assets/cross.svg"
    ></v-img>
    <v-img
      v-if="store.game3x3.getCell(i, j) == 2"
      src="@/assets/circle.svg"
    ></v-img>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAppStore } from "@/store/app";

export default defineComponent({
  name: "Field3x3Cell",
  setup() {
    const store = useAppStore();
    return { store };
  },
  props: {
    i: {
      type: Number,
      required: true,
    },
    j: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.store.game3x3.makeMove(this.i, this.j);
    },
  },
});
</script>

<style scoped>
.field-3x3-cell {
  border: 1px solid rgb(var(--v-theme-on-background));
}

.field-3x3-cell:hover {
  background-color: rgba(var(--v-theme-surface), 0.5);
}
</style>

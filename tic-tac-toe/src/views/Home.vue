<template>
  <v-row style="width: 100vw; height: 100vh" justify="center" align="center">
    <v-col justify="center" align="center">
      <v-container>
        <v-row justify="center">
          <v-col align="center">
            <Field3x3 />
            <h3>Status: {{ status }}</h3>
            <v-btn @click="store.game3x3.replay()" style="margin-top: 20px"
              >replay</v-btn
            ></v-col
          >
        </v-row>
      </v-container></v-col
    ></v-row
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAppStore } from "@/store/app";
import Field3x3 from "@/components/Field3x3.vue";
import { GameStatus } from "@/game/3x3";

export default defineComponent({
  name: "Home",
  setup() {
    const store = useAppStore();
    return { store };
  },
  components: {
    Field3x3,
  },
  computed: {
    status() {
      const status = this.store.game3x3.getStatus();
      switch (status) {
        case GameStatus.inProgress:
          return "in progress";
        case GameStatus.draw:
          return "draw";
        case GameStatus.player1Won:
          return "crosses won";
        case GameStatus.player2Won:
          return "circles won";
        default:
          return "unknown";
      }
    },
  },
});
</script>

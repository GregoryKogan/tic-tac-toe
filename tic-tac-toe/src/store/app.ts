// Utilities
import { defineStore } from 'pinia';
import { Game3x3 } from '@/game/3x3';

export const useAppStore = defineStore('app', {
  state: () => ({
    game3x3: new Game3x3(),
  }),
});

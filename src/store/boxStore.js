import { defineStore } from 'pinia';

 const useBoxStore = defineStore('box', {
  state: () => ({
    clicks: {}, // Object to track click counts by box index
  }),
  actions: {
    incrementClick(boxIndex) {
      if (!this.clicks[boxIndex]) {
        this.clicks[boxIndex] = 1; // Initialize count if not present
      } else {
        this.clicks[boxIndex]++; // Increment count
      }
    },
    decrementClick(index) {
        if (this.clicks[index] > 0) {
          this.clicks[index]--;
        }
      },
  },
});

export default useBoxStore;

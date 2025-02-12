import { defineStore } from 'pinia';

const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
        if(this.count > 0){
        this.count--;
        }
      },
  },
});
export default useCounterStore;
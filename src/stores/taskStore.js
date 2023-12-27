import { defineStore } from "pinia";
export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "bay some milk", isFav: false },
      { id: 2, title: "play gloomhaven", isFav: true },
    ],
    name:'youshi',
  }),
});

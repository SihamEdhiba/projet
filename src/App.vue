<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>pinia tasks</h1>
    </header>
    <!-- task list -->
    <div class="task kist">
      <div v-for="task in taskStore.tasks" :key="task">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>
<script>
import TaskDetails from "./components/TaskDetails.vue";
import { useTaskStore } from "./stores/taskStore";
export default {
  components: { TaskDetails },
  setup() {
    const taskStore = useTaskStore();
    return { taskStore };
  },
};
</script>

export class taskManager {
  private tasks: string[] = [];

  addTask(tasks: string): void {
    this.tasks.push(tasks);
    console.log(`Task "${tasks}" added.`);
  }

  listTasks(): void {
    if (this.tasks.length === 0) {
      console.log("No tasks available, try to add some tasks.");
    } else {
      console.log("Tasks:");
      this.tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
    }
  }

  removeTask(index: number): void {
    // To remove a index we need to find the specific value in the array
    if (index >= 1 && index <= this.tasks.length) {
      const removedTask = this.tasks.splice(index - 1, 1)[0];
      console.log(`Task "${removedTask}" removed.`);
    } else {
      console.log("Invalid task index.");
    }
  }
  
}
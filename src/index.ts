import * as readline from 'readline';
import { taskManager } from './taskmanager';

const tasks = new taskManager();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayMenu(): void {
  console.log("\nTask Manager Menu:");
  console.log("1. Add Task");
  console.log("2. List Tasks");
  console.log("3. Remove Task");
  console.log("4. Exit");
}

function addTask(): void {
  rl.question("Enter the task: ", (task) => {
    tasks.addTask(task);
    displayMenu();
    main();
  });
}

function listTasks(): void {
  tasks.listTasks();
  displayMenu();
  main();
}

function removeTask(): void {
  rl.question("Enter the task index to remove: ", (index) => {
    tasks.removeTask(parseInt(index));
    displayMenu();
    main();
  });
}

function main(): void {
  rl.question("Enter your choice: ", (choice) => {
    switch (choice) {
      case "1":
        addTask();
        break;
      case "2":
        listTasks();
        break;
      case "3":
        removeTask();
        break;
      case "4":
        console.log("Exiting Task Manager. Goodbye!");
        rl.close();
        break;
      default:
        console.log("Invalid choice. Please try again.");
        displayMenu();
        main();
    }
  });
}

console.log("Welcome to Task Manager!");
displayMenu();
main();
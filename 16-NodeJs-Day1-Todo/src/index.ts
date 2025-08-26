import { addTask, listTasks, toggleTask, removeTask, viewLogs, updateTask, clearTasks } from './todo';

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'add':
    addTask(args.slice(1).join(' '));
    break;
  case 'list':
    listTasks();
    break;
  case 'toggle':
    toggleTask(args[1]);
    break;
  case 'remove':
    removeTask(args[1]);
    break;
  case 'update':
    updateTask(args[1], args.slice(2).join(' '));
    break;
  case 'clear':
    const onlyCompleted = args[1] === '--completed';
    clearTasks(onlyCompleted);
    break;
  case 'logs':
    viewLogs();
    break;
  default:
    console.log(`
Usage:
  add <title>            Add a new task
  list                   List all tasks
  toggle <id>            Toggle done/undone
  remove <id>            Remove a task
  update <id> <title>    Update task title
  clear [--completed]    Clear all tasks or only completed
  logs                   View all logs
    `);
    break;
}

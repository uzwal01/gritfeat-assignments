import { Task, LogAction, LogEntry } from "./types";
import { readJSON, writeJSON, getTime, generateId } from "./utils";


const TODOS_FILE = 'data/todos.json';
const LOGS_FILE = 'data/logs.json';


function logAction(action: string, taskId: string | null, details: string) {
    const logs = readJSON(LOGS_FILE);
    logs.push({ id: generateId(), action, taskId, timestamp: getTime(), details });
    writeJSON(LOGS_FILE, logs);
}

// Add Task
export function addTask(title: string) {
    const todos: Task[] = readJSON(TODOS_FILE);
    const task: Task = { id: generateId(), title, done: false, createdAt: getTime(), updatedAt: getTime() };
    todos.push(task);
    writeJSON(TODOS_FILE, todos);
    logAction('add', task.id, `Added task: ${title}`);
    console.log('Task Added:', title);
}


// List all task
export function listTasks() {
    const todos: Task[] = readJSON(TODOS_FILE);
    if(!todos.length) return console.log('No tasks found!');
    todos.forEach(t => console.log(`${t.done ? 'x' : ' '} [${t.id}] ${t.title}`));
    logAction('list', null, `Listed ${todos.length} tasks`);
}


// Toggle done or not
export function toggleTask(id: string) {
    const todos: Task[] = readJSON(TODOS_FILE);
    const task = todos.find(t => t.id === id);
    if(!task) return console.log('Task not found!');
    task.done = !task.done;
    task.updatedAt = getTime();
    writeJSON(TODOS_FILE, todos);
    logAction('toggle', id, `Toggled to ${task.done ? 'done' : 'todo'}`);
    console.log(`Toggled Task: ${task.title}`);
}


// Remove Task from todo
export function removeTask(id: string) {
    let todos: Task[] = readJSON(TODOS_FILE);
    const task = todos.find(t => t.id === id);
    if(!task) return console.log('Task not found!');
    todos = todos.filter(t => t.id !== id);
    writeJSON(TODOS_FILE, todos);
    logAction('remove', id, `Removed task: ${task.title}`);
    console.log(`Removed: ${task.title}`);
}


// To update Tasks
export function updateTask(id: string, newTitle: string) {
    const todos: Task[] = readJSON(TODOS_FILE);
    const task = todos.find(t => t.id === id);
    if(!task) return console.log('Task not found!');
    const oldTitle = task.title;
    task.title = newTitle;
    task.updatedAt = getTime();
    writeJSON(TODOS_FILE, todos);
    logAction('update', id, `Updated task title from "${oldTitle}" to "${newTitle}"`);
    console.log(`Task updated successfully: ${newTitle}`);
}


// To clear Todo Tasks
export function clearTasks(onlyCompleted = false) {
    let todos: Task[] = readJSON(TODOS_FILE);
    let removedCount: number;
    if (onlyCompleted) {
        removedCount = todos.filter(t => t.done).length;
        todos = todos.filter(t => !t.done);
    } else {
        removedCount = todos.length;
        todos = [];
    }
    writeJSON(TODOS_FILE, todos);
    logAction('remove', null, `Cleared ${removedCount} ${onlyCompleted ? 'completed' : ''} task(s)`);
    console.log(`Cleared ${removedCount} ${onlyCompleted ? 'completed' : ''} task(s)`);
}



// To view logs
export function viewLogs() {
    const logs: LogEntry[] = readJSON(LOGS_FILE);
    if (!logs.length) return console.log('No any logs yet.');
    logs.forEach(l => console.log(`[${l.timestamp}] ${l.action} - ${l.details}`));
}


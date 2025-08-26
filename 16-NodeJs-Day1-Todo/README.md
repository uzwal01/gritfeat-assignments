# Todo CLI - Node.js + TypeScript

A simple command-line Todo List application built with **Node.js** and **TypeScript**.  
Tasks are stored in a JSON file, and every action is logged to a separate JSON file. Perfect for beginners learning Node.js, TypeScript, and file-based storage.

---

## Features

- **Add Task** – Add a new task with a title.  
- **List Tasks** – Display all tasks with status and ID.  
- **Update Task** – Edit a task's title.  
- **Toggle Task** – Mark a task as done/undone.  
- **Remove Task** – Delete a task by ID.  
- **Clear Tasks** – Remove all tasks or only completed tasks.  
- **View Logs** – View a history of all actions performed.

Each task includes:  

- `id` – Unique identifier  
- `title` – Task description  
- `done` – Boolean indicating completion  
- `createdAt` – Timestamp when created  
- `updatedAt` – Timestamp when last updated  

Each log entry includes:  

- `id` – Unique log ID  
- `action` – Action performed (add, update, toggle, remove, clear, list)  
- `taskId` – Related task’s ID (if applicable)  
- `timestamp` – When the action happened  
- `details` – Additional information  

---


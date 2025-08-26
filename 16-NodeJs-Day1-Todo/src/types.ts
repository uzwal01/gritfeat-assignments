export type Task = {
  id: string; // unique id
  title: string; // short description
  done: boolean; // completed or not
  createdAt: string; // ISO format timestamp
  updatedAt: string; // ISO format timestamp
};

export type LogAction = 'add' | 'update' | 'toggle' | 'remove' | 'clear' | 'list';


export type LogEntry = {
  id: string;               // unique id for the log
  action: LogAction;        // action type
  taskId: string | null;    // related task id (if any)
  timestamp: string;        // when the action happened
  details: string;          // extra info (title, counts, etc.)
};

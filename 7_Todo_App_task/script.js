let todos = [];
let currentFilter = "all";

const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const deleteAllBtn = document.getElementById("delete-all-btn");
const searchInput = document.getElementById("search-input");
const filterBtns = document.querySelectorAll(".filters button");

// Add/Create a new todo
addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text == "") {
    return;
  }

  todos = [
    ...todos,
    {
      id: Date.now(),
      text,
      completed: false,
    },
  ];
  input.value = "";
  render();
});

// Render Todos READ
function render() {
  const filtered = getFilteredTodos();
  const searchText = searchInput.value.toLowerCase();

  const visibleTodos = filtered.filter((todo) =>
    todo.text.toLowerCase().includes(searchText)
  );

  list.innerHTML = "";

  visibleTodos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = `todo-item ${todo.completed ? "completed" : ""}`;

    li.innerHTML = `
            <span>${todo.text}</span>
            <div>
                <button onClick="toggleTodo(${todo.id})">✅</button>
                <button onClick="editTodo(${todo.id})">✏️</button>
                <button onClick="deleteTodo(${todo.id})">🗑️</button>
            </div>
        `;

    list.appendChild(li);
  });
}

// toggle complete UPDATE
function toggleTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );

  render();
}

// Edit a todo UPDATE
function editTodo(id) {
  const newText = prompt("Edit your task");
  if (newText) {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );

    render();
  }
}

// Delete a todo
function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);

  render();
}

// Delete All
deleteAllBtn.addEventListener("click", () => {
  todos = [];
  render();
});

// Filter Buttons
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    document.querySelector(".filters .active")?.classList.remove("active");
    btn.classList.add("active");
    render();
  });
});

function getFilteredTodos() {
  if (currentFilter == "pending") {
    return todos.filter((todo) => !todo.completed);
  }
  if (currentFilter == "completed") {
    return todos.filter((todo) => todo.completed);
  }
  return todos;
}

searchInput.addEventListener("input", render);

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
  const searchText = searchInput.value.toLowerCase();
  const filtered = getFilteredTodos().filter((todo) => {
    return todo.text.toLowerCase().includes(searchText)
  })
  
  list.innerHTML = "";

  filtered.forEach((todo) => {
    const li = document.createElement("li");
    li.className = `todo-item ${todo.completed ? "completed" : ""}`;

    // Create checkbox for toggling
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => toggleTodo(todo.id));
    checkbox.style.scale = "1.2";

    //text
    const span = document.createElement("span");
    span.textContent = todo.text;

    //Edit btn
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => editTodo(todo.id));

    //Delete btn
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList = "del-btn";
    delBtn.addEventListener("click", () => deleteTodo(todo.id));

    // Edit + Delete btn Container
    const btnContainer = document.createElement("div");
    btnContainer.append(editBtn, delBtn);
    btnContainer.style.display = "flex";
    btnContainer.style.gap = "6px";

    // checkbox + text in left div
    const leftSide = document.createElement("div");
    leftSide.style.display = "flex";
    leftSide.style.alignItems = "center";
    leftSide.style.gap = "10px";
    leftSide.append(checkbox, span);

    li.append(leftSide, btnContainer);
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
  const newText = prompt("Edit your task:");
  if (!newText) {
    return;
  }
  else {
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

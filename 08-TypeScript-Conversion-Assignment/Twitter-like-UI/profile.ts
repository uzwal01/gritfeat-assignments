// Interfaces
interface User {
  id: number;
  name: string;
  email: string;
  website: string;
  company?: {
    name: string;
  };
}

interface Album {
  userId: number;
  id: number;
  title: string;
}

interface Photo {
  albumId: number;
  id: number;
  title: string;
  thumbnailUrl: string;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// Get userId from query params
const userId: string | null = new URLSearchParams(window.location.search).get("userId");

// Get DOM elements without assertions first
const detailsDiv = document.getElementById("details");
const photosDiv = document.getElementById("photos");
const todosDiv = document.getElementById("todos");
const usernameHeader = document.getElementById("username");

// Check if all required DOM elements and userId exist
if (!userId || !detailsDiv || !photosDiv || !todosDiv || !usernameHeader) {
  throw new Error("Required DOM elements or userId are missing");
}

// Now assign with non-null assertion for TypeScript
const detailsDivEl = detailsDiv as HTMLElement;
const photosDivEl = photosDiv as HTMLElement;
const todosDivEl = todosDiv as HTMLElement;
const usernameHeaderEl = usernameHeader as HTMLElement;

async function loadUserProfile(): Promise<void> {
  const user: User = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  ).then((res) => res.json());

  usernameHeaderEl.innerHTML = `Profile: ${user.name}`;
  detailsDivEl.innerHTML = `
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Company:</strong> ${user.company?.name || "N/A"}</p>
    <p><strong>Website:</strong> ${user.website}</p>
  `;

  const albums: Album[] = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  ).then((res) => res.json());

  for (const album of albums.slice(0, 2)) {
    let photos: Photo[] = [];

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`
      );
      if (!response.ok) throw new Error("Fetch failed");
      photos = await response.json();
    } catch (error) {
      console.error("Error fetching photos:", error);
    }

    const albumDiv = document.createElement("div");
    albumDiv.innerHTML = `
      <h3>${album.title}</h3>
      ${photos
        .slice(0, 5)
        .map(
          (photo) =>
            `<img src="${photo.thumbnailUrl}" alt="${photo.title}" style="margin:5px;">`
        )
        .join("")}
    `;

    photosDivEl.appendChild(albumDiv);
  }

  const todos: Todo[] = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
  ).then((res) => res.json());

  todosDivEl.innerHTML = `
    <h3>Todos</h3>
    <ul>
      ${todos
        .slice(0, 10)
        .map(
          (todo) =>
            `<li>${todo.completed ? "(Completed)" : "(Incomplete)"} ${todo.title}</li>`
        )
        .join("")}
    </ul>
  `;
}

loadUserProfile();

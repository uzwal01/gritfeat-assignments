const userId = new URLSearchParams(window.location.search).get("userId");
const detailsDiv = document.getElementById("details");
const photosDiv = document.getElementById("photos");
const todosDiv = document.getElementById("todos");

async function loadUserProfile() {
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  ).then((res) => res.json());
  document.getElementById("username").innerHTML = `Profile: ${user.name}`;

  detailsDiv.innerHTML = `
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Company:</strong> ${user.company?.name || "N/A"}</p>
        <p><strong>Website:</strong> ${user.website}</p>
    `;

  const albums = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  ).then((res) => res.json());

  for (let album of albums.slice(0, 2)) {
    let photos = [];
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
    albumDiv.innerHTML =
      `
            <h3>${album.title}</h3>
        ` +
      photos
        .slice(0, 5)
        .map(
          (photo) =>
            `<img src="${photo.thumbnailUrl}" alt="${photo.title}" style="margin:5px;">`
        )
        .join("");

    photosDiv.appendChild(albumDiv);
  }

  const todos = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
  ).then((res) => res.json());
  todosDiv.innerHTML = `
        <h3>Todos</h3>
        <ul>
            ${todos
              .slice(0, 10)
              .map(
                (todo) =>
                  `<li>${todo.completed ? "(Completed)" : "(Incomplete)"} ${
                    todo.title
                  }</li>`
              )
              .join("")}
        </ul>
    `;
}

loadUserProfile();

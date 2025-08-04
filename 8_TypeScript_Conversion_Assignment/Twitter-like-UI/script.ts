// Define interfaces
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

// Get feed container element safely
const feedContainer = document.getElementById("feed");

if (!feedContainer) {
  throw new Error("Feed container not found in the DOM.");
}

const feedContainerEl = feedContainer as HTMLElement;

async function fetchData(): Promise<void> {
  const [postsRes, usersRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts"),
    fetch("https://jsonplaceholder.typicode.com/users")
  ]);

  const posts: Post[] = await postsRes.json();
  const users: User[] = await usersRes.json();

  renderFeed(posts, users);
}

function renderFeed(posts: Post[], users: User[]): void {
  posts.slice(0, 10).forEach(async (post) => {
    const user = users.find((u) => u.id === post.userId);

    const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
    const comments: Comment[] = await commentsRes.json();

    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    postDiv.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <p><strong><a href="profile.html?userId=${user?.id ?? ''}">${user?.name ?? 'Unknown User'}</a></strong></p>
      <details>
        <summary>Comments (${comments.length})</summary>
        <ul>
          ${comments.map((c) => `<li><strong>${c.email}</strong>: ${c.body}</li>`).join('')}
        </ul>
      </details>
      <hr>
    `;

    feedContainerEl.appendChild(postDiv); 
  });
}

fetchData();

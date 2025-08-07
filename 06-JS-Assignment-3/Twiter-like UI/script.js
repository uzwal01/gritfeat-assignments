const feedContainer = document.getElementById("feed");

async function fetchData() {
    const [postsRes, usersRes] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/users")
    ]);

    const posts = await postsRes.json();
    const users = await usersRes.json();

    renderFeed(posts, users);
}

function renderFeed(posts, users) {
    posts.slice(0,10).forEach(async (post) => {
        const user = users.find(u => u.id == post.userId);
        const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
        const comments = await commentsRes.json();

        const postDiv = document.createElement("div");
        postDiv.classList.add("post");

        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <p><strong><a href="profile.html?userId=${user.id}">${user.name}</a></strong></p>
            <details>
                <summary>Comments (${comments.length})</summary>
                <ul>
                    ${comments.map((c) => `<li><strong>${c.email}</strong>: ${c.body}</li>`).join('')}
                </ul>
            </details>
            <hr>
        `;

        feedContainer.appendChild(postDiv);
    });
}

fetchData();
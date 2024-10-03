let postIndex = 1;  
const limit = 3;    

function fetchPosts() {
    fetch(`https://jsonplaceholder.typicode.com/posts?_start=${postIndex}&_limit=${limit}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Error fetching posts: " + response.status);
        }
        return response.json();
    })
    .then(posts => {
        let container = document.getElementById("postsContainer");
        posts.forEach(post => {
            const article = document.createElement("post");
            const title = document.createElement("h2");
            title.textContent = post.title;
            const body = document.createElement("p");
            body.textContent = post.body;
            article.appendChild(title);
            article.appendChild(body);
            container.appendChild(article);
        });
        postIndex++  
    })
}

fetchPosts();
fetchPosts();

function handleScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        fetchPosts();
    }
}

window.onload = () => {
    fetchPosts();
};


window.addEventListener('scroll', handleScroll);


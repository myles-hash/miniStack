const but = document.querySelector('button');

but.addEventListener('click', () => {
    console.log('Button clicked!');
});

const app = document.querySelector('#app');

const isLoggedIn = true;

if (isLoggedIn) {
    app.innerHTML = '<h1>Welcome back</h1>';
} else {
    app.innerHTML = '<h1>Please log in </h1>'
}

const appTwo = document.getElementById('appTwo');

async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    return posts;
}

async function main() {
    const posts = await getPosts();
    app.innerHTML = `
    <ul>
        ${posts.map((post) => `<li>${post.title}</li>`).join("")}
    </ul>
    `;
}

main();

const appThree = document.getElementById('appThree');

let count = 0;

appThree.innerHTML = `
<p>You clicked ${count} times</p>
<button id="but2">Click me</button>
`;

const but2 = document.getElementById('but2');

but2.addEventListener('click', () => {
    count ++;
    document.querySelector('#appThree p').textContent = `You clicked ${count} times`;
});
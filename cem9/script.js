const data = JSON.parse(dataInfo);

const content = document.querySelector('.content');

data.forEach(element => {
    const joke = document.createElement('div');
    const img = document.createElement('img');
    const setup = document.createElement('p');
    const punchline = document.createElement('h3');
    const id = document.createElement('h1');

    img.src = element.image;
    setup.textContent = element.setup;
    punchline.textContent = element.punchline;
    id.textContent = element.id;

    content.appendChild(joke);
    joke.appendChild(id);
    joke.appendChild(setup);
    joke.appendChild(punchline);
    joke.appendChild(img);
});




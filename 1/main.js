const createSpan = (text, index) => {
    const node = document.createElement("span");

    node.textContent = text;
    node.style.setProperty('--index', index);

    return node;
}

const splitWord = (text) => {
    return text.split(' ').map(createSpan);
}

(() => {
    const textTargets = document.querySelectorAll("[animated-text]");

    textTargets.forEach(node => {
        const childNodes = splitWord(node.innerText);
        node.replaceChildren(...childNodes);
    })
})()

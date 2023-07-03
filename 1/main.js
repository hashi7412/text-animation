const animeFlag = 1;

const animeTypes = [
	
]

const createSpan = (text, index) => {
  const node = document.createElement("span");

  node.textContent = text;
  node.style.setProperty("--index", index);

  node.addEventListener("mouseover", () => {
	node.classList.add("hovered");
  })

  return node;
};

const splitWays = [
  (text) => {
    return text.split(" ").map(createSpan);
  },
  (text) => {
    const arr = text.split("");
    return arr.map((i) => createSpan(i === " " ? " " : i))
  }
];

(() => {
  const textTargets = document.querySelectorAll("[animated-text]");

  textTargets.forEach((node) => {
    const childNodes = splitWays[animeFlag](node.innerText);
    node.replaceChildren(...childNodes);
  });
})();

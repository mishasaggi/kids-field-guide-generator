const sensoryCategories = {
  sight: [
    "something green",
    "something yellow"
  ],
  sound: [
    "a quiet sound",
    "a distant sound",
    "a sound you can't identify"
  ],
  light: [
    "a shadow that looks like something",
    "light through something",
    "a reflection"
  ],
  movement: [
    "something moving fast",
    "something barely moving",
    "something moved by wind"
  ],
  texture: [
    "something rough",
    "something smooth",
    "something that feels surprising"
  ],
  pattern: [
    "something repeating",
    "a pattern in the ground",
    "a pattern in the sky"
  ]
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateGrid(size = 4) {
  const allPrompts = Object.values(sensoryCategories).flat();

  const selected = [];
  while (selected.length < size * size) {
    const item = randomItem(allPrompts);
    if (!selected.includes(item)) {
      selected.push(item);
    }
  }
  return selected;
}

function renderGrid() {
  const grid = document.getElementById("grid");
  const prompts = generateGrid(4);

  prompts.forEach(text => {
    const div = document.createElement("div");
    div.className = "cell";
    div.textContent = text;
    grid.appendChild(div);
  });
}

renderGrid();

const button: HTMLElement = document.querySelector("#theme");
const root = document.documentElement;
root.className = "dark";
button.addEventListener("click", () => {
  const evalTheme = (root.className == "dark") ? "light" : "dark";
  setTheme(evalTheme);
});

function setTheme(theme: string) {
  button.innerHTML = `<span class="material-symbols-outlined">${theme}_mode</span>`;
  root.className = theme;
}


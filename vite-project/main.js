import "./style.css";

document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
<div class="toggle-container">
  <button
    class="theme-btn light"
    onclick="setTheme('light')"
    title="Light mode"
  ></button>
  <button
    class="theme-btn dark"
    onclick="setTheme('dark')"
    title="Dark mode"
  ></button>
</div>;

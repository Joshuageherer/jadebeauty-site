document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("dark-toggle").addEventListener("click", () => {
    document.documentElement.toggleAttribute("data-theme", "dark");
  });
});

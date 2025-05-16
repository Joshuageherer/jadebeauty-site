
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dark-toggle");
  toggle.addEventListener("click", () => {
    document.documentElement.toggleAttribute("data-theme", "dark");
  });
});

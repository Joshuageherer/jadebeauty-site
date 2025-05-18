document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkToggle");
  const body = document.body;

  // Lade Zustand aus localStorage
  if (localStorage.getItem("darkmode") === "on") {
    body.classList.add("darkmode");
  }

  // Toggle beim Klick
  toggle?.addEventListener("click", () => {
    body.classList.toggle("darkmode");
    localStorage.setItem("darkmode", body.classList.contains("darkmode") ? "on" : "off");
  });
});

const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme") || "light";
root.setAttribute("data-theme", savedTheme);
if (themeToggle) {
  themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
  themeToggle.addEventListener("click", () => {
    const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    themeToggle.textContent = nextTheme === "dark" ? "☀️" : "🌙";
  });
}

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    menuToggle.textContent = open ? "✕" : "☰";
  });
  mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";
  }));
}

const projects = [
  { title: "The Celebration Edit", category: "Brand & Design · Concept", description: "A coordinated invitation and RSVP concept for a modern event.", image: "your-image1.png", alt: "The Celebration Edit event invitation and RSVP design" },
  { title: "Studio North", category: "Web Design · Concept", description: "A clean portfolio concept for a creative independent business.", image: "your-image2.jpg", alt: "Studio North fashion and creative website design" },
  { title: "The Good Notes", category: "Digital Products · Concept", description: "A digital planning collection with daily pages, weekly layouts, notes and goal-setting templates.", image: "your-image3.png", alt: "The Good Notes digital planner and stationery concept" }
];

const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const fallback = document.getElementById("imageFallback");
const closeButton = document.getElementById("modalClose");

document.querySelectorAll(".project-open").forEach(button => {
  button.addEventListener("click", () => {
    const project = projects[Number(button.dataset.project)];
    if (!project || !modal) return;
    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalCategory").textContent = project.category;
    document.getElementById("modalDescription").textContent = project.description;
    modalImage.hidden = false;
    fallback.hidden = true;
    modalImage.alt = project.alt;
    modalImage.src = project.image;
    modalImage.onerror = () => {
      modalImage.hidden = true;
      fallback.hidden = false;
    };
    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
  });
});

function closeProjectModal() {
  if (modal && typeof modal.close === "function") modal.close();
  else if (modal) modal.removeAttribute("open");
}
if (closeButton) closeButton.addEventListener("click", closeProjectModal);
if (modal) {
  modal.addEventListener("click", event => {
    if (event.target === modal) closeProjectModal();
  });
}
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal && modal.open) closeProjectModal();
});

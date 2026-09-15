const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const backTop = document.getElementById("backTop");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.textContent = navLinks.classList.contains("open") ? "×" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

const publicationSearch = document.getElementById("publicationSearch");
const filters = document.querySelectorAll(".filter");
const publicationCards = document.querySelectorAll(".publication-card");
const emptyPublications = document.getElementById("emptyPublications");
let selectedYear = "all";

function filterPublications() {
  const search = publicationSearch.value.toLowerCase().trim();
  let visible = 0;

  publicationCards.forEach(card => {
    const matchesYear = selectedYear === "all" || card.dataset.year === selectedYear;
    const matchesSearch = card.dataset.search.includes(search);
    const show = matchesYear && matchesSearch;
    card.style.display = show ? "" : "none";
    if (show) visible++;
  });

  emptyPublications.style.display = visible ? "none" : "block";
}

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(item => item.classList.remove("active"));
    filter.classList.add("active");
    selectedYear = filter.dataset.year;
    filterPublications();
  });
});

publicationSearch.addEventListener("input", filterPublications);

const modal = document.getElementById("courseModal");
const modal1 = document.getElementById("courseModal1");
const modalTitle = document.getElementById("modalTitle");
const modalTitle1 = document.getElementById("modalTitle1");
const modalDescription = document.getElementById("modalDescription");
const modalDescription1 = document.getElementById("modalDescription1");
const modalClose = document.getElementById("modalClose");
const modalClose1 = document.getElementById("modalClose1");

const descriptions = {
  "Metodología de la Investigación": "Curso orientado al desarrollo de competencias para formular preguntas, objetivos, metodologías y proyectos de investigación.",
  "Fundamentos de Innovación": "Espacio para comprender procesos de innovación, ideación, prototipado y solución de problemas.",
  "Tecnología y Educación": "Curso dedicado a analizar y aplicar herramientas digitales para enriquecer experiencias de enseñanza y aprendizaje."
};

document.querySelectorAll(".course-btn").forEach(button => {
  button.addEventListener("click", () => {
    const course = button.dataset.course;
    modalTitle.textContent = course;
    modalDescription.textContent = descriptions[course] || "Información académica del curso.";
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});

document.querySelectorAll(".course-btn1").forEach(button => {
  button.addEventListener("click", () => {
    const course = button.dataset.course;
    modalTitle1.textContent = course;
    modalDescription1.textContent = descriptions[course] || "Información académica del curso.";
    modal1.classList.add("open");
    modal1.setAttribute("aria-hidden1", "false");
  });
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function closeModal1() {
  modal1.classList.remove("open");
  modal1.setAttribute("aria-hidden1", "true");
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

modalClose1.addEventListener("click", closeModal1);
modal1.addEventListener("click", e => {
  if (e.target === modal1) closeModal1();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal1();
});

window.addEventListener("scroll", () => {
  backTop.classList.toggle("visible", window.scrollY > 500);
});

backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

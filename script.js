const projects = [
  {
    number: "01",
    title: "Brasil com S",
    badge: "Projeto da faculdade",
    description: "Página sobre cultura e paisagens do Brasil com galeria, mapa, vídeo e formulário.",
    category: "css",
    tags: ["HTML5", "CSS3"],
    demoUrl: "./sites/udf-site01/index.html",
    repoUrl: "https://github.com"
  },
  {
    number: "02",
    title: "Halloween Brasil",
    badge: "Tema & Bootstrap",
    description: "Site temático em laranja e preto com carrossel, cards, acordeão, modal e offcanvas.",
    category: "css",
    tags: ["HTML5", "CSS3", "Bootstrap"],
    demoUrl: "./sites/atividade02_front/index.html",
    repoUrl: "https://github.com"
  },
  {
    number: "03",
    title: "Olho vivo",
    badge: "Portal de notícias",
    description: "Estrutura de portal com navbar, dropdown, grid de notícias, cards e acordeão.",
    category: "js",
    tags: ["HTML5", "Bootstrap", "Grid"],
    demoUrl: "./sites/Front-End/Front-End/index.html",
    repoUrl: "https://github.com"
  },
  {
    number: "04",
    title: "A História do Basquete",
    badge: "Multipage & JS",
    description: "Site informativo sobre o basquete com páginas extras, listas de fundamentos e botão interativo em JavaScript.",
    category: "js",
    tags: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "./sites/projeto-de-interface-03/projetoInterfaceEX02/index.html",
    repoUrl: "https://github.com"
  },
  {
    number: "05",
    title: "Archecture",
    badge: "Estúdio & Bootstrap",
    description: "Site institucional de arquitetura e design com carrossel principal, acordeão, serviços, depoimentos e páginas internas.",
    category: "css",
    tags: ["HTML5", "CSS3", "Bootstrap 5"],
    demoUrl: "./sites/site-archecture/archecture-site/index.html",
    repoUrl: "https://github.com"
  }
];

const projectsGrid = document.getElementById("projectsGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderProjects(filter = "todos") {
  const list =
    filter === "todos"
      ? projects
      : projects.filter((project) => project.category === filter);

  projectsGrid.innerHTML = list
    .map(
      (project) => `
      <article class="project-card">
        <div>
          <div class="card-top">
            <span class="card-num">#${project.number}</span>
            <span class="card-tag-mini">${project.badge}</span>
          </div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>

        <div>
          <div class="card-stack-line">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="card-links">
            <a href="${project.demoUrl}" class="primary-link" rel="noopener">Abrir site ↗</a>
            <a href="${project.repoUrl}" target="_blank" rel="noopener">GitHub</a>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = document.getElementById("name").value.trim();
  formStatus.textContent = `Valeu pela mensagem, ${nameInput}!`;
  contactForm.reset();
});

renderProjects();
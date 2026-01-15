const gitRepos = "https://api.github.com/users/Callum-Jones230893/repos"

let isMoving = false;
const CLICK_INTERVAL = 400;

const showContent = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hidden = document.querySelectorAll(`.hidden`);
hidden.forEach((el) => showContent.observe(el));

const carouselContainer = document.querySelector(`.carousel-container`);
const carouselItemContainer = document.querySelector(`.carousel`);
const carouselBtnContainer = document.querySelector(`.carousel-buttons`);
const carouselButtons = [`left`, `right`];
const carouselItems = document.querySelectorAll(`.carousel-item`);
const criteriaToggleBtn = document.querySelector(".criteria-toggle");
const criteriaSection = document.querySelector(".criteria");

class Carousel {
  constructor(container, item, buttons) {
    this.container = container;
    this.item = Array.from(item);
    this.buttonArray = buttons;
  }

  updateCarousel() {
    this.item.forEach(img => {
      img.classList.remove(`item-1`, `item-2`, `item-3`, `item-4`, `item-5`);
    });

    this.item.slice(0, 5).forEach((img, i) => {
      img.classList.add(`item-${i + 1}`);
    });
  }

  buttonPosition(position) {
    if (position.classList.contains(`carousel-button-left`)) {
      this.item.unshift(this.item.pop());
    } else {
      this.item.push(this.item.shift());
    }
    this.updateCarousel();
  }

  controlClick() {
    const click = Array.from(carouselBtnContainer.childNodes);
    click.forEach(button => {
      button.addEventListener(`click`, e => {
        e.preventDefault();
        this.buttonPosition(button);
      });
    });
  }
}

function Project(index, title, imgSrc, bio, challenges, learning, improvements, criteriaBtn, criteria, techniques, gitLink, vercel
) {
  this.index = index;
  this.title = title;
  this.imgSrc = imgSrc;
  this.bio = bio;
  this.challenges = challenges;
  this.learning = learning;
  this.improvements = improvements;
  this.criteriaBtn = criteriaBtn;
  this.criteria = criteria;
  this.techniques = techniques;
  this.gitLink = gitLink;
  this.vercel = vercel;
}

const projects = [
  new Project(
    1,
    "Responsive Website",
    "img1.png",
    "This assignment was to make a responsive website using HTML and CSS, testing our skills that we had learnt up until that point.",
    "One of the main challenges was implementing a grid-based layout with limited prior experience. I overcame this by researching CSS Grid techniques and experimenting with different approaches until achieving a clean, responsive result.",
    "Skills developed/improved:",
    ["Layout of webpages", "Navigational menus"],
    "Criteria",
    ["grading"],
    "technique",
    "",
    ""
  ),
  new Project(
    2,
    "JavaScript Game",
    "img2.png",
    "This assignment was to create a JS text based game, using concepts such as variables, arrays, loops, conditional logic, and nesting.",
    "",
    "Skills developed/improved:",
    ["improvements"],
    "Criteria",
    ["grading"],
    "technique",
    `<a href="https://github.com/Callum-Jones230893/First-Game-2025"><i class="fa-brands fa-github"></i></a>`,
    ""
  ),
  new Project(
    3,
    "Australia Zoo Group Project",
    "./images/zoo_assignment.png",
    "This assignment was our first major group assignment, where we were in a group of up to four people. We had to work together using agile methodology, SCRUM, aswell as the JS, HTML and CSS that we had learnt up to this point, including objects and constructors.",
    "A key challenge was collaborating effectively within a team using SCRUM and GitHub. Learning to communicate clearly, compromise on implementation decisions, and adapt to team workflows helped streamline development and improve the final outcome.",
    "Skills developed/improved:",
    ["Agile Methodology", "SCRUM", "GitHub"],
    "Criteria",
    [
      "Multi-page website built with HTML, CSS, and JavaScript",
      "Dynamic content rendering based on user interaction",
      "Structured data handling for multiple entities",
      "Single active state logic",
      "Fully responsive layout"
    ],
    "technique",
    `<a href="https://github.com/Callum-Jones230893/Group-zoo-assignment"><i class="fa-brands fa-github"></i></a>`,
    "https://group-zoo-assignment-frucqach2-callum-jones-projects.vercel.app/"
  ),
  new Project(
    4,
    "Visualized JS Game",
    "./images/visualized_game_preview.png",
    "This assignment was to make a responsive web game, this time visualized and using DOM manipulation, event listeners and all of the previous methods that we had learnt.",
    "The main challenges involved creating a dynamic grid layout and implementing character movement using DOM manipulation.",
    "Skills developed/improved:",
    ["DOM manipulation", "Precise searching for solutions", "Pseudo coding"],
    "Criteria",
    [
      "Event-driven JavaScript game logic",
      "Dynamic DOM manipulation",
      "Responsive UI",
      "Session-based data tracking"
    ],
    "technique",
    `<a href="https://github.com/Callum-Jones230893/Visualized-game-2025-Nov"><i class="fa-brands fa-github"></i></a>`,
    "https://visualized-game-2025-mrgwqqt5z-callum-jones-projects.vercel.app/"
  ),
  new Project(
    5,
    "API Fetching Website",
    "./images/API_group_assignment.png",
    "This assignment was to make a web page in small groups, connecting to an API and demonstrating the ability to fetch specific data from the API that we selected.",
    "A key challenge was researching and implementing API data fetching with limited prior experience.",
    "Skills developed/improved:",
    ["Fetching data from APIs"],
    "Criteria",
    [
      "API integration using fetch()",
      "JSON handling",
      "Dynamic DOM rendering",
      "Error handling",
      "localStorage usage"
    ],
    "technique",
    `<a href="https://github.com/Callum-Jones230893/API-group-assignment"><i class="fa-brands fa-github"></i></a>`,
    `"https://api-group-assignment-qd6cla0w0-callum-jones-projects.vercel.app/`
  ),
];

carouselItemContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".carousel-item");
  if (!clicked) return;

  if (isMoving) return;

  if (clicked.classList.contains("item-1") || clicked.classList.contains("item-2")) {
    isMoving = true;
    carousel.item.unshift(carousel.item.pop());
    carousel.updateCarousel();

    setTimeout(() => (isMoving = false), CLICK_INTERVAL);
    return;
  }

  if (clicked.classList.contains("item-4") || clicked.classList.contains("item-5")) {
    isMoving = true;
    carousel.item.push(carousel.item.shift());
    carousel.updateCarousel();

    setTimeout(() => (isMoving = false), CLICK_INTERVAL);
    return;    
  }

  if (!clicked.classList.contains("item-3")) return;

  const index = Number(clicked.dataset.index);
  const project = projects.find(p => p.index === index);

  if (!project) return;

  
  function keyImprovements() {

    const improvementList = document.createElement("ul");
    improvementList.classList.add("improvements");

    project.improvements.forEach(i => {

      const impList = document.createElement("li");
      impList.textContent = i;
      impList.classList.add("imp-list");
      improvementList.appendChild(impList);
      
      const projectLearning = document.querySelector(".project-learning");
      projectLearning.appendChild(improvementList);
    })
  }

  const overlay = document.querySelector(".project__overlay");

  overlay.querySelector(".project-name").textContent = project.title;
  overlay.querySelector("img").src = project.imgSrc;
  overlay.querySelector(".project-bio").textContent = project.bio;
  overlay.querySelector(".project-challenges").textContent = project.challenges;
  overlay.querySelector(".project-learning").textContent = project.learning;
  overlay.querySelector(".criteria-toggle").textContent = project.criteriaBtn;
  overlay.querySelector(".techniques").textContent = project.techniques;
  overlay.querySelector(".git-repo").innerHTML = `${project.gitLink}`;
  overlay.querySelector(".production-page").innerHTML = project.vercel;

  const criteria = overlay.querySelector(".criteria");
  criteria.innerHTML = "";

  const criteriaList = document.createElement("ul");
  criteriaList.classList.add("criteria-list");

  project.criteria.forEach(i => {
    const criteria = document.createElement("li");
    criteria.textContent = i;
    criteria.classList.add("project-criteria");
    criteriaList.appendChild(criteria);
  });

  criteria.appendChild(criteriaList);
  criteria.classList.add("hide");

  overlay.classList.remove("hide");
  overlay.classList.add("display");
  keyImprovements();
});

criteriaToggleBtn.addEventListener("click", () => {
  criteriaSection.classList.toggle("hide");
});

document.querySelector(`.project__overlay`).addEventListener(`click`, (e) => {
  const overlay = e.currentTarget;
  if (e.target === overlay || e.target.classList.contains(`close`)) {
    overlay.classList.remove(`display`);
    overlay.classList.add(`hide`);
  }
});

const gitApi = async () => {
  try {
    const response = await fetch(gitRepos);

    if (!response.ok) {
      throw new Error("Please try again later.");
    }

    const data = await response.json();
    const repoUrls = [];

    for (let i = 0; i < data.length; i++) {
      repoUrls.push(data[i].url);
    }
    return repoUrls;

  } catch (error) {
    result.innerHTML = `<div>${error.message}</div>`;
  }
};

const showRepos = document.createElement("div");
const repoSection = document.querySelector(".repos")
showRepos.classList.add("repo-list")
repoSection.appendChild(showRepos);

const populateRepos = async () => {
  const repoUrls = await gitApi();

  if (!repoUrls) return;

  showRepos.innerHTML = repoUrls.join("<br>");
};

const repoToggle = document.querySelector(".repo-toggle");

repoToggle.addEventListener("click", () => {
  showRepos.classList.toggle("hidden");
});

const carousel = new Carousel(carouselBtnContainer, carouselItems, carouselButtons);

populateRepos();
carousel.controlClick();
carousel.updateCarousel();

// animation api
// favicon
// add multiple breakpoints
// icons for coding languages
// add substring and links to api display
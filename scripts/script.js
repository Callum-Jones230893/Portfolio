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

const carouselItemContainer = document.querySelector(`.carousel`);
const carouselItems = document.querySelectorAll(`.carousel-item`);
const criteriaToggleBtn = document.querySelector(".criteria-toggle");
const criteriaSection = document.querySelector(".criteria");

class Carousel {
  constructor(item) {
    this.item = Array.from(item);
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
}

function Project(index, title, imgSrc, bio, challenges, learning, improvements, criteriaBtn, criteria, techniques, gitLink, vercel) {
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
    "./images/first-webpage.png",
    "This assignment was to make a responsive website using HTML and CSS, testing our skills that we had learnt up until that point.",
    "One of the main challenges was implementing a grid-based layout with limited prior experience. I overcame this by researching CSS Grid techniques and experimenting with different approaches until achieving a clean, responsive result.",
    "Skills developed/improved:",
    ["Layout of webpages", "Navigational menus"],
    "Criteria",
    [
      "Multi-page website built with HTML and CSS",
      "Fully functional contact form",
      "Responsive design so that it is functional on both desktop and mobile",
      "Semantic HTML, with consistent code style"
    ],
    `<i class="fa-brands fa-css"></i></i><i class="fa-brands fa-html5"></i>`,
    `<a href="https://github.com/Callum-Jones230893/First-webpage-assignment"><i class="fa-brands fa-github"></i></a>`,
    `<a href="https://vercel.com/callum-jones-projects/first-webpage-assignment/">Vercel</a>`
  ),
  new Project(
    2,
    "JavaScript Game",
    "./images/prompt-game.png",
    "This assignment was to create a JS text based game, using concepts such as variables, arrays, loops, conditional logic, and nesting.",
    "",
    "Skills developed/improved:",
    ["Conditional / Nested logic", "Handling of cancellation"],
    "Criteria",
    [
      "Use of varibales, arrays, and loops",
      "Dynaically collect user input through prompts",
      "Validation of user input",
      "Conditional logic where user input determines win or loss",
      "Nested logic",
      "Handling of cancel actions and invalid inputs"
    ],
    `<i class="fa-brands fa-js"></i></i><i class="fa-brands fa-html5"></i>`,
    `<a href="https://github.com/Callum-Jones230893/First-Game-2025"><i class="fa-brands fa-github"></i></a>`,
    `<a href="https://vercel.com/callum-jones-projects/first-game-2025/">Vercel</a>`
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
    `<i class="fa-brands fa-js"></i><i class="fa-brands fa-css"></i><i class="fa-brands fa-html5"></i>`,
    `<a href="https://github.com/Callum-Jones230893/Group-zoo-assignment"><i class="fa-brands fa-github"></i></a>`,
    `<a href="https://group-zoo-assignment-frucqach2-callum-jones-projects.vercel.app/">Vercel</a>`
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
    `<i class="fa-brands fa-js"></i><i class="fa-brands fa-css"></i><i class="fa-brands fa-html5"></i>`,
    `<a href="https://github.com/Callum-Jones230893/Visualized-game-2025-Nov"><i class="fa-brands fa-github"></i></a>`,
    `<a href="https://visualized-game-2025-mrgwqqt5z-callum-jones-projects.vercel.app/">Vercel</a>`
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
    `<i class="fa-brands fa-js"></i><i class="fa-brands fa-css"></i><i class="fa-brands fa-html5"></i>`,
    `<a href="https://github.com/Callum-Jones230893/API-group-assignment"><i class="fa-brands fa-github"></i></a>`,
    `<a href="https://api-group-assignment-qd6cla0w0-callum-jones-projects.vercel.app/">Vercel</a>`
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
  overlay.querySelector(".criteria-toggle").innerHTML = `${project.criteriaBtn} <img class="arrow"src="./images/Icons/arrow-down.png" alt="expand arrow">`;
  overlay.querySelector(".techniques").innerHTML = `${project.techniques}`;
  overlay.querySelector(".git-repo").innerHTML = `${project.gitLink}`;
  overlay.querySelector(".production-page").innerHTML = `${project.vercel}`;

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
    if (criteriaSection.classList.contains("hide")) {
    criteriaToggleBtn.innerHTML = `Criteria <img class="arrow" src="./images/Icons/arrow-up.png" alt="retract arrow">`
  } else {
    criteriaToggleBtn.innerHTML = `Criteria <img class="arrow" src="./images/Icons/arrow-down.png" alt="expand arrow">`
  }
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
      repoUrls.push(data[i].html_url);
    }
    return repoUrls;

  } catch (error) {
    repoSection.innerHTML = `<div>${error.message}</div>`;
  }
};

const showRepos = document.createElement("div");
const repoSection = document.querySelector(".repos")
showRepos.classList.add("repo-list")
repoSection.appendChild(showRepos);

const populateRepos = async () => {
  const repoUrls = await gitApi();

  if (!repoUrls) return;

  showRepos.innerHTML = "";

  if (showRepos.classList.contains("hidden")) {
    showRepos.classList.remove("hidden");
  } else {
    showRepos.classList.add("hidden");
  }
  
  repoUrls.forEach(url => {
    let repoName = url.split(`/`).pop();
    let repo = document.createElement("div");
    repo.classList.add("repo-div")
    repo.innerHTML = `<a href="${url}" target="_blank">${repoName}</a>`;
    showRepos.appendChild(repo);
  })
};

const repoToggle = document.querySelector(".repo-toggle");

repoToggle.addEventListener("click", () => {
  
  if (showRepos.classList.contains("hidden")) {
    repoToggle.innerHTML = `My projects <img class="arrow" src="./images/Icons/arrow-up.png" alt="retract arrow" width="20px" height="auto">`
  } else {
    repoToggle.innerHTML = `My projects <img class="arrow" src="./images/Icons/arrow-down.png" alt="expand arrow" width="20px" height="auto">`
  }
  showRepos.classList.toggle("hidden");
});

const carousel = new Carousel(carouselItems);

populateRepos();
carousel.updateCarousel();

const canvas = document.getElementById(`background_effect`);
const draw = canvas.getContext(`2d`);
const fontSize = 12;
let falling = new Array(Math.floor(canvas.width / fontSize)).fill(1);

function canvasDimensions() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  const columns = Math.floor(canvas.width / fontSize);
  falling = new Array(columns).fill(1);
}

canvasDimensions();
window.addEventListener(`resize`, canvasDimensions);

const fallingCharacters = [
  `ア`, `イ` ,`ウ`, `エ`, `オ`, `カ`, `キ`,
  `ク`, `ケ` ,`コ`, `サ`, `シ`, `ス`, `セ`,
  `ソ`, `タ`, `チ`, `ツ`, `テ`, `ト` ,`ナ`,
  `ニ`, `ヌ`, `ネ`, `ノ`, `ハ`, `ヒ`, `フ`,
  `ヘ`, `ホ`, `マ`, `ミ`, `ム`, `メ`, `モ`,
  `ヤ`, `ユ`, `ヨ`, `ラ`, `リ`, `ル`, `レ`,
  `ロ`, `ワ`, `ヲ`, `ン`
];

function fill() {
  draw.fillStyle = `rgba(10, 17, 29, 0.06)`;
  draw.fillRect(0, 0, canvas.width, canvas.height);
  draw.font = `${fontSize}px Audiowide-regular, monospace`
  draw.fillStyle = `#38bdf840`;

  for (let j = 0; j < falling.length; j++) {
    const y = falling[j];

    const character = fallingCharacters[Math.floor(Math.random() * fallingCharacters.length)];

    const x = j * fontSize;
    const currentY = y * fontSize;

    draw.fillText(character, x, currentY);

    if (currentY > canvas.height && Math.random() > 0.9) {
        falling[j] = 0;
    }

    falling[j] += 0.4 + Math.random() * 0.3;
  }
};

const interval = setInterval(fill, 80 + Math.random() * 40);

if (typeof anime !== 'undefined') {
  anime({
    targets: canvas,
    opacity: [0.12, 0.09, 0.16, 0.11],
    duration: 5000,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
  });
}

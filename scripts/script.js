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
const carouselItemContainer = document.querySelector(`.carousel`)
const carouselBtnContainer = document.querySelector(`.carousel-buttons`);
const carouselButtons = [`left`, `right`];
const carouselItems = document.querySelectorAll(`.carousel-item`);
const criteriaToggleBtn = document.querySelector(".criteria-toggle");
const criteriaSection = document.querySelector(".criteria");

class Carousel {

  constructor(container, item, buttons) {
    this.container = container,
    this.item = Array.from(item);
    this.buttonArray = buttons
  }

  updateCarousel(){
    // console.log(this.item)
    this.item.forEach(img => {
      img.classList.remove(`item-1`);
      img.classList.remove(`item-2`);
      img.classList.remove(`item-3`);
      img.classList.remove(`item-4`);
      img.classList.remove(`item-5`);
    });

    this.item.slice(0, 5).forEach((img, i) => {
      img.classList.add(`item-${i+1}`);
    });
  }
  

  buttonPosition(position){
    if(position.classList.contains(`carousel-button-left`)){
      this.item.unshift(this.item.pop());
    } else {
      this.item.push(this.item.shift());
    }
    this.updateCarousel();
  }

  controls(){
    this.buttonArray.forEach(button => {
      const btn = document.createElement(`button`);
      btn.className = `carousel-button carousel-button-${button}`;
      btn.innerHTML = button === `left` ? `◀` : `▶`;
      carouselBtnContainer.appendChild(btn);
    });
  };

  controlClick() {
    const click = Array.from(carouselBtnContainer.childNodes);
    // console.log(click)
    click.forEach(button => {
      button.addEventListener(`click`, e => {
        e.preventDefault();
        // console.log("blabla")
        this.buttonPosition(button);
      })
    })
  }
};

function Project(index, title, imgSrc, bio, challenges, learning, improvements, criteriaBtn, criteria, techniques, gitLink, vercel) {
  this.index = index,
  this.title = title,
  this.imgSrc = imgSrc,
  this.bio = bio,
  this.challenges = challenges,
  this.learning = learning,
  this.improvements = improvements,
  this.criteriaBtn = criteriaBtn
  this.criteria = criteria,
  this.techniques = techniques,
  this.gitLink = gitLink,
  this.vercel = vercel
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
    "https://github.com/Callum-Jones230893/First-Game-2025",
    ""
  ),
  new Project(
    3, 
    "Australia Zoo Group Project", 
    "img3.png", 
    "This assignment was our first major group assignment, where we were in a group of up to four people. We had to work together using agile methodology, SCRUM, aswell as the JS, HTML and CSS that we had learnt up to this point, including objects and constructors.", 
    "A key challenge was collaborating effectively within a team using SCRUM and GitHub. Learning to communicate clearly, compromise on implementation decisions, and adapt to team workflows helped streamline development and improve the final outcome.",
    "Skills developed/improved:",
    ["Agile Methodology", "SCRUM", "GitHub"],
    "Criteria",
    ["Multi-page website built with HTML, CSS, and JavaScript​", "Dynamic content rendering based on user interaction​", "Structured data handling for multiple entities (animals & team members)", "Single active state logic for sidebar interactions", "Conditional rendering of summaries and detailed views", "Fully responsive layout with shared page structure" ],
    "technique",
    "https://github.com/Callum-Jones230893/Group-zoo-assignment",
    "https://group-zoo-assignment-frucqach2-callum-jones-projects.vercel.app/"
  ),
  new Project(
    4, 
    "Visualized JS Game", 
    "img4.png", 
    "This assignment was to make a responsive web game, this time visualized and using DOM manipulation, event listeners and all of the previous methods that we had learnt.",
    "The main challenges involved creating a dynamic grid layout and implementing character movement using DOM manipulation. Through research, testing, and iteration, I was able to reach a functional solution while identifying areas for future improvement.",
    "Skills developed/improved:",
    ["DOM manipulation", "Precise searching for solutions", "Psuedo coding"],
    "Criteria",
    ["Event-driven JavaScript game logic", "Dynamic DOM manipulation and state management", "Responsive UI with real-time feedback", "Session-based data tracking", "Deployed via GitHub Pages / Vercel"],
    "technique",
    "https://github.com/Callum-Jones230893/Visualized-game-2025-Nov",
    "https://visualized-game-2025-mrgwqqt5z-callum-jones-projects.vercel.app/"
  ),
  new Project(
    5, 
    "API Fetching Website", 
    "img5.png", 
    "This assignment was to make a web page in small groups, connecting to an API and demonstrating the ability to fetch specific data from the API that we selected.",
    "A key challenge was researching and implementing API data fetching with limited prior experience, while coordinating effectively within a new team. By collaborating on planning and responsibilities, we were able to fetch, manage, and display the required data successfully.",
    "Skills developed/improved:",
    ["Fetching data from APIs"],
    "Criteria",
    ["API integration using fetch() triggered by user interaction", "JSON data handling and dynamic DOM rendering", "Display of multiple data properties per request", "Clean, maintainable code structure", "Version control with meaningful GitHub commits", "Robust error handling for failed or invalid API requests", "Multiple API requests per user flow", "localStorage for persisting user data or preferences"],
    "technique",
    "https://github.com/Callum-Jones230893/API-group-assignment",
    "https://api-group-assignment-qd6cla0w0-callum-jones-projects.vercel.app/"
  ),
];

document.querySelector(`.carousel`).addEventListener(`click`, (e) => {
  const clicked = e.target;
  // console.log(clicked)
  if (!clicked.classList.contains(`item-3`)) 
    return;

  const index = Number(clicked.dataset.index);
  const project = projects.find(p => p.index === index);

  if (!project)
    return;

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

  const overlay = document.querySelector(`.project__overlay`);

  overlay.querySelector(`.project-name`).textContent = project.title;
  overlay.querySelector(`img`).src = project.imgSrc;
  overlay.querySelector(`.project-bio`).textContent = project.bio;
  overlay.querySelector(`.project-challenges`).textContent = project.challenges;
  overlay.querySelector(`.project-learning`).textContent = project.learning;
  overlay.querySelector(`.criteria-toggle`).textContent = project.criteriaBtn
  overlay.querySelector(`.criteria`).textContent = project.grading;
  overlay.querySelector(`.techniques`).textContent = project.techniques;
  overlay.querySelector(`.git-repo`).textContent = project.gitLink;
  overlay.querySelector(`.production-page`).textContent = project.vercel;

  function populateCriteria() {
    const criteria = document.querySelector(".criteria");
    criteria.innerHTML = "";

    const criteriaList = document.createElement("ul");
    criteriaList.classList.add("criteria-list");

    project.criteria.forEach(i => {
      const projectCriteria = document.createElement("li");
      projectCriteria.textContent = i;
      projectCriteria.classList.add("project-criteria");
      criteriaList.appendChild(projectCriteria);
    });

    criteria.appendChild(criteriaList);
  }

  const criteria = overlay.querySelector(".criteria");
  criteria.classList.add("hide");
  overlay.classList.remove(`hide`);
  overlay.classList.add(`display`);
  populateCriteria();
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

const carousel = new Carousel(carouselBtnContainer, carouselItems, carouselButtons);

carousel.controls();
carousel.controlClick();
carousel.updateCarousel();


// finish constructors
// finish html bio about myself and other details
// add images to carousel
// change movement of carousel to read left and right images
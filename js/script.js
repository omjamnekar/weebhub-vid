import {
  subanime,
  dataDictionary,
  dataDictionarysub,
  dataDictionarydub,
  cardsmain,
  photoUrls,
} from "../js/data/subcard.js";

const p1 = document.querySelectorAll(".p-number");
const seeMoreLessContainers = document.querySelectorAll(".ww");

p1.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    const container = seeMoreLessContainers[index]; // Get the corresponding container

    // Loop through all containers and remove the "active" class from other containers
    seeMoreLessContainers.forEach((container, i) => {
      if (i !== index) {
        container.classList.remove("active");
      }
    });

    // Toggle the "active" class on the clicked container
    container.classList.toggle("active");
  });
});

const container2 = document.querySelectorAll(".cards-former");
const re = document.querySelector(".re");

function increaseSize(element) {
  element.classList.add("active");
  re.classList.remove("active");
}

function resetSize(element) {
  element.classList.remove("active");
  re.classList.add("active");
}

function increaseSize1(element) {
  element.classList.add("active");
}
// import
function resetSize1(element) {
  element.classList.remove("active");
}

const p2 = document.querySelectorAll(".btn-ani");
const seeMoreLessContainers1 = document.querySelectorAll(".ww1");
const card_ofe = document.querySelectorAll(".card-list-con");

p2.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    const container = seeMoreLessContainers1[index]; // Get the corresponding container
    const container1 = card_ofe[index];
    // Loop through all containers and remove the "active" class from other containers
    seeMoreLessContainers1.forEach((container, i) => {
      if (i !== index) {
        container.classList.remove("active");
      }
    });
    card_ofe.forEach((container, i) => {
      if (i !== index) {
        container.classList.remove("active");
      }
    });

    // Toggle the "active" class on the clicked container
    container.classList.toggle("active");
    container1.classList.toggle("active");
  });
});

function createHtmlContainer1(
  imageSrc,
  animeName,
  starRate,
  episodeCount,
  releaseDate,
  description,
  otherNames,
  airedDate,
  status,
  genres
) {
  return `
    <div class="card-anim" onmouseover="increaseSize(this)" onmouseout="resetSize(this)">
      <img src="${imageSrc}" alt="" />
      <div class="text-card-in-box">
        <aside class="info-side">
          <p>cc <span>${starRate}</span></p>
          <p class="episode-no"><span>${episodeCount}EPS</span></p>
        </aside>
        <div class="name-if-anime-cards">
          <h4>${animeName}</h4>
          <p>
            TV
            <span>${releaseDate}</span>
          </p>
        </div>
      </div>
      <aside class="main-aside">
        <h4>${animeName}</h4>
        <div class="subline-anime">
          <p>
            <span class="star-rate"><i class="bx bxs-star"></i>${starRate}</span>
            <span class="bolok">PG13</span><span class="bolok">HD</span>
          </p>
          <span>TV</span>
        </div>
        <p>
          ${description}
          <span class="" style="display: none">
            under attack by fearsome pirates. Despite being a
            naive-looking teenager, he is not to be underestimated.
            Unmatched in batt...
          </span>
        </p>
        <div class="info-side-ani">
          <p>Other names: <span>${otherNames}</span></p>
          <p>Aired: <span>${airedDate}</span></p>
          <p>Status: <span>${status}</span></p>
          <p>
            Genres:
            <span>${genres}</span>
          </p>
        </div>
        <div class="btn-container-for-side">
          <button><i class="bx bx-play"></i> Watch Now</button>
          <div><i class="bx bx-plus"></i></div>
        </div>
      </aside>
    </div>`;
}

var containerElements2 = document.getElementsByClassName("card-let-dy");

// Loop through the data dictionary and set HTML content for each element
for (var i = 0; i < dataDictionary.length; i++) {
  var createHtmlContainer1in = createHtmlContainer1(
    dataDictionary[i].imageSrc,
    dataDictionary[i].animeName.toUpperCase(),
    dataDictionary[i].starRate,
    dataDictionary[i].episodeCount,
    dataDictionary[i].releaseDate,
    dataDictionary[i].description,
    dataDictionary[i].otherNames.toUpperCase(),
    dataDictionary[i].airedDate,
    dataDictionary[i].status,
    dataDictionary[i].genres
  );

  containerElements2[i].innerHTML = createHtmlContainer1in;
}

var containerElements3 = document.getElementsByClassName("card-let-dy-1");

// Loop through the data dictionary and set HTML content for each element
for (var i = 0; i < dataDictionary.length; i++) {
  var createHtmlContainer1in = createHtmlContainer1(
    dataDictionarysub[i].imageSrc,
    dataDictionarysub[i].animeName.toUpperCase(),
    dataDictionarysub[i].starRate,
    dataDictionarysub[i].episodeCount,
    dataDictionarysub[i].releaseDate,
    dataDictionarysub[i].description,
    dataDictionarysub[i].otherNames.toUpperCase(),
    dataDictionarysub[i].airedDate,
    dataDictionarysub[i].status,
    dataDictionarysub[i].genres
  );

  containerElements3[i].innerHTML = createHtmlContainer1in;
}

var containerElements4 = document.getElementsByClassName("card-let-dy-2");

// Loop through the data dictionary and set HTML content for each element
for (var i = 0; i < dataDictionary.length; i++) {
  var createHtmlContainer1in = createHtmlContainer1(
    dataDictionarydub[i].imageSrc,
    dataDictionarydub[i].animeName.toUpperCase(),
    dataDictionarydub[i].starRate,
    dataDictionarydub[i].episodeCount,
    dataDictionarydub[i].releaseDate,
    dataDictionarydub[i].description,
    dataDictionarydub[i].otherNames.toUpperCase(),
    dataDictionarydub[i].airedDate,
    dataDictionarydub[i].status,
    dataDictionarydub[i].genres
  );

  containerElements4[i].innerHTML = createHtmlContainer1in;
}

function createBackblur() {
  const backblurContainer = document.createElement("div");
  backblurContainer.className = "backblur";

  const backblurContent = `
    <img src="../img/logo/logo1.png" alt="" />
    <h2>Jujutsu Kaisen</h2>
    <h3>Enter the Realm of Curses and Sorcery - Embrace the Power of Jujutsu Kaisen!</h3>
    <p>Category: <span>Anime / Television Series</span></p>
    <p>Genre: <span>Action, Supernatural, Horror, Adventure, Fantasy, School</span></p>
    <p>Summery:</p>
    <div class="more-less-container">
      <p>Jujutsu Kaisen, Yuji Itadori, an ordinary high school student...</p>
      <i>seemore</i>
      <i>seeless</i>
    </div>
  `;

  backblurContainer.innerHTML = backblurContent;
  document.body.appendChild(backblurContainer);
}

window.addEventListener("DOMContentLoaded", function () {
  var genres = [
    "Action",
    "Adventure",
    "Avant Garde",
    "Boys Love",
    "Comedy",
    "Demons",
    "Drama",
    "Ecchi",
    "Fantasy",
    "Girls Love",
    "Gourmet",
    "Harem",
    "Horror",
    "Isekai",
    "Iyashikei",
    "Josei",
    "Kids",
    "Magic",
    "Mahou Shoujo",
    "Martial Arts",
    "Mecha",
    "Military",
    "Music",
    "Mystery",
    "Parody",
    "Psychological",
    "Reverse Harem",
    "Romance",
    "School",
    "Sci-Fi",
    "Seinen",
    "Shoujo",
    "Shounen",
    "Slice of Life",
    "Space",
    "Sports",
    "Super Power",
    "Supernatural",
    "Suspense",
    "Thriller",
    "Vampire",
  ];

  var buttonContainer = document.querySelector(".button-container");
  genres.forEach(function (genre) {
    var genreButton = document.createElement("button");
    genreButton.textContent = genre;
    buttonContainer.appendChild(genreButton);
  });
});

window.addEventListener("DOMContentLoaded", function () {
  const btnless = document.querySelector(".btn-seeless-gen");
  const btnmore = document.querySelector(".btn-seemore-gen");
  const btncon = document.querySelector(".card-genera-container");

  btnmore.addEventListener("click", () => {
    btncon.classList.toggle("active");
  });

  btnless.addEventListener("click", () => {
    btncon.classList.remove("active");
  });
});

const p3 = document.querySelectorAll(".btn-mos-vie");
const seeMoreLessContainers2 = document.querySelectorAll(".btn-vies");

p3.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    const container = seeMoreLessContainers2[index]; // Get the corresponding container

    // Loop through all containers and remove the "active" class from other containers
    seeMoreLessContainers2.forEach((container, i) => {
      if (i !== index) {
        container.classList.remove("active");
      }
    });

    // Toggle the "active" class on the clicked container
    container.classList.toggle("active");
  });
});

const p4 = document.querySelectorAll(".btn-mos-vie");
const seeMoreLessContainers4 = document.querySelectorAll(".most-list-con-1");

p4.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    const container = seeMoreLessContainers4[index]; // Get the corresponding container

    // Loop through all containers and remove the "active" class from other containers
    seeMoreLessContainers4.forEach((container, i) => {
      if (i !== index) {
        container.classList.remove("active");
      }
    });

    // Toggle the "active" class on the clicked container
    container.classList.add("active");
  });
});

// Array of photo URLs
const photoElements = document.querySelectorAll(".photo-main"); // Check the class name

let currentIndex = 0;

function changePhoto() {
  const nextIndex = (currentIndex + 1) % photoUrls.length;

  // Hide the current photo
  if (photoElements[currentIndex]) {
    // Check if the element exists
    photoElements[currentIndex].style.opacity = 0;
  }

  // Show the next photo
  if (photoElements[nextIndex]) {
    // Check if the element exists
    photoElements[nextIndex].style.opacity = 1;
  }

  currentIndex = nextIndex;
}

// Set initial photo sources and visibility
photoElements.forEach((photoElement, index) => {
  photoElement.src = photoUrls[index];
  if (index !== currentIndex) {
    photoElement.style.opacity = 0;
  }
});

// Call the changePhoto function every 8 seconds after the initial display
setInterval(changePhoto, 8000);

function createMostViewCard(number, imgSrc, title, viewsCount, likesCount) {
  const mostViewCard = `
    <div>
      <h1>${number}</h1>
      <div>
        <img src="${imgSrc}" alt="" />
      </div>
      <aside>
        <h2>${title}</h2>
        <div>
          <p><i class="bx bxs-low-vision"></i><span>${viewsCount}</span></p>
          <p><i class="bx bxs-heart"></i><span>${likesCount}</span></p>
        </div>
      </aside>
    </div>
  `;

  return mostViewCard;
}

window.addEventListener("DOMContentLoaded", function () {
  // Example usage: Insert the content into a container
  const contentContainer = document.querySelectorAll(".most-view-card");

  for (var i = 0; i < contentContainer.length; i++) {
    var animet = createMostViewCard(
      mostview[i].id,
      mostview[i].imagePath,
      mostview[i].title,
      mostview[i].views,
      mostview[i].likesCount
    );

    contentContainer[i].innerHTML = animet;
  }
});

window.addEventListener("DOMContentLoaded", function () {
  // Example usage: Insert the content into a container
  const contentContainer = document.querySelectorAll(".most-view-card-w");

  for (var i = 0; i < contentContainer.length; i++) {
    var animet = createMostViewCard(
      mostvieww[i].id,
      mostvieww[i].imagePath,
      mostvieww[i].title,
      mostvieww[i].views,
      mostvieww[i].likesCount
    );

    contentContainer[i].innerHTML = animet;
  }
});

window.addEventListener("DOMContentLoaded", function () {
  // Example usage: Insert the content into a container
  const contentContainer = document.querySelectorAll(".most-view-card-y");

  for (var i = 0; i < contentContainer.length; i++) {
    var animet = createMostViewCard(
      mostviewy[i].id,
      mostviewy[i].imagePath,
      mostviewy[i].title,
      mostviewy[i].views,
      mostviewy[i].likesCount
    );

    contentContainer[i].innerHTML = animet;
  }
});

function createListItem(imageSrc, animeName, episodeNumber) {
  const listItem = `
    <div class="list-item">
      <img src="${imageSrc}" alt="" />
      <div class="nameanime">
        <p>${animeName}</p>
        <a href="">${episodeNumber}</a>
      </div>
      <div class="link-hover-card"></div>
    </div>
  `;

  return listItem;
}

window.addEventListener("DOMContentLoaded", function () {
  const listItemContainers = document.querySelectorAll(".list-item-container");

  if (listItemContainers.length === subanime.length) {
    listItemContainers.forEach((container, i) => {
      const animet = createListItem(
        cards[i].imageSrc,
        cards[i].animeName,
        cards[i].episodeNumber
      );
      container.innerHTML = animet;
    });
  }
});

function createBackblurHtml(imageSrc, animeTitle, animeDescription) {
  return `
    <div class="backblur">
      <img src="${imageSrc}" alt="" />
      <h2>${animeTitle}</h2>
      <h3>${animeDescription}</h3>
      <p>Category: <span>Anime / Television Series</span></p>
      <p>Genre: <span>Action, Supernatural, Horror, Adventure, Fantasy, School</span></p>
      <p>Summery:</p>
      <div class="more-less-container">
        <p>${animeDescription}</p>
        <i>seemore</i>
        <i>seeless</i>
      </div>
    </div>`;
}

// Array of data objects
const animeData = [
  {
    imageSrc: "../img/logo/logo1.png",
    title: "Jujutsu Kaisen",
    description:
      "Enter the Realm of Curses and Sorcery - Embrace the Power of Jujutsu Kaisen!",
  },
  {
    imageSrc: "../img/logo/3.png",
    title: "Another Anime",
    description: "A description for Another Anime.",
  },
  {
    imageSrc: "../img/logo/4.png",
    title: "Another Anime",
    description: "A description for Another Anime.",
  },
  {
    imageSrc: "../img/logo/2.png",
    title: "Another Anime",
    description: "A description for Another Anime.",
  },
  {
    imageSrc: "../img/logo/7.png",
    title: "Another Anime",
    description: "A description for Another Anime.",
  },

  {
    imageSrc: "../img/logo/9.png",
    title: "Another Anime",
    description: "A description for Another Anime.",
  },
  {
    imageSrc: "../img/logo/10.png",
    title: "Another Anime",
    description: "A description for Another Anime.",
  },
  {
    imageSrc: "../img/logo/6.png",
    title: "Another Anime",
    description: "A description for Another Anime.",
  },

  // Add more data objects as needed
];

let currentIndex1 = 0;
const backblurContainer = document.querySelector(".overlap-container");

function changeData() {
  const data = animeData[currentIndex1];
  const backblurHtml = createBackblurHtml(
    data.imageSrc,
    data.title,
    data.description
  );

  const backblurContent = document.createElement("div");
  backblurContent.className = "overlap-content";
  backblurContent.innerHTML = backblurHtml;

  // Fade out the current content
  backblurContainer.style.opacity = 0;

  setTimeout(() => {
    // Replace content and fade in the new content after updating
    backblurContainer.innerHTML = "";
    backblurContainer.appendChild(backblurContent);
    backblurContainer.style.opacity = 1;
  }, 500); // Wait for the fade-out transition (0.5 seconds) before updating

  currentIndex1 = (currentIndex1 + 1) % animeData.length;
}

// Display the first data quickly
changeData();

// Call the changeData function every 8 seconds after the initial quick display
setInterval(changeData, 8000);

const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const wwElements = document.querySelectorAll(".ww");
const listsubcontainer = document.querySelectorAll(".listofcontainer-pack");
let activeIndex = 0; // Initialize the active index

// Function to toggle the 'active' class
function toggleActiveClass(index) {
  wwElements.forEach((ww, i) => {
    if (i === index) {
      ww.classList.add("active");
    } else {
      ww.classList.remove("active");
    }
  });
  listsubcontainer.forEach((ww, i) => {
    if (i === index) {
      ww.classList.add("active");
    } else {
      ww.classList.remove("active");
    }
  });
}

rightArrow.addEventListener("click", () => {
  wwElements.forEach((wwElement, index) => {
    const pNumber = wwElement.querySelector(".p-number");

    // Check if the content of the element is a dot (.)
    if (pNumber.textContent === ".") {
      // Increment the numbers accordingly
      if (index === 0) {
        pNumber.textContent = parseInt(pNumber.textContent) + 2;
      } else if (index === 2) {
        pNumber.textContent = parseInt(pNumber.textContent) + 3;
      }
    }
  });
});

leftArrow.addEventListener("click", () => {
  activeIndex = Math.max(0, activeIndex - 1); // Decrease active index, but keep it >= 0
  toggleActiveClass(activeIndex);
});

rightArrow.addEventListener("click", () => {
  activeIndex = Math.min(wwElements.length - 1, activeIndex + 1); // Increase active index, but keep it <= length - 1
  toggleActiveClass(activeIndex);
});

// Initial activation of the first element
toggleActiveClass(activeIndex);

function createListItem1(imageSrc, animeName, episodeNumber) {
  const listItem = `
    <div class="list-item">
      <img src="${imageSrc}" alt="" />
      <div class="nameanime">
        <p>${animeName}</p>
        <a href="">${episodeNumber}</a>
      </div>
      <div class="link-hover-card"></div>
    </div>
  `;

  return listItem;
}

const listItemContainers = document.querySelectorAll(".list-item-c");

// Make sure listItemContainers matches the number of elements in cardsmain
cardsmain.forEach((cards, index) => {
  const animet = createListItem1(
    cards.imgSrc,
    cards.animeName,
    cards.episodeNumber
  );

  // Check if listItemContainers[index] is defined before setting innerHTML
  if (listItemContainers[index]) {
    listItemContainers[index].innerHTML = animet;
  } else {
    console.error(`Element at index ${index} not found.`);
  }
});

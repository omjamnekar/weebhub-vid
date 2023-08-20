import {
  subanime,
  dataDictionary,
  dataDictionarysub,
  dataDictionarydub,
  cardsmain,
  photoUrls,
  mostvieww,
  mostviewy,
  mostview,
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

function createHtmlContainer12(
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
    <div class="card-anim cardwe" onmouseover="increaseSize(this)" onmouseout="resetSize(this)">
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

window.addEventListener("DOMContentLoaded", function () {
  var re = document.querySelectorAll(".card-let-dy-de"); // Added a dot (.) before the class name

  for (var i = 0; i < dataDictionary.length; i++) {
    var ces = createHtmlContainer12(
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
    if (re[i] != null) {
      // Check if the element exists before setting innerHTML
      re[i].innerHTML = ces;
    }
  }
});

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
    "Hentai",
    "Horror",
    "Avant Garde",
    "Girls Love",
    "Ecchi",
    "Suspense",
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
    // Add other genres here
  ];

  var buttonContainer = document.querySelector(".button-container");
  genres.forEach(function (genre) {
    var genreButton = document.createElement("button");
    genreButton.textContent = genre;
    genreButton.addEventListener("click", function () {
      window.location.href = "genre.html?genre=" + encodeURIComponent(genre);
    });
    buttonContainer.appendChild(genreButton);
  });
});

// var buttonContainer = document.querySelector(".button-container");

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

const imageElement1 = document.getElementById("slideshow-image1");
let currentImageIndex1 = 0;
let slideshowInterval1;

function showImage(index) {
  imageElement1.src = photoUrls[index];
  imageElement1.classList.add("active");
  currentImageIndex1 = index;
}

function startSlideshow() {
  showImage(currentImageIndex1);

  slideshowInterval1 = setInterval(() => {
    imageElement1.classList.remove("active");

    setTimeout(() => {
      let nextImageIndex1 = (currentImageIndex1 + 1) % photoUrls.length;
      showImage(nextImageIndex1);
    }, 500); // Transition time
  }, 8000); // Change image every 3 seconds
}

startSlideshow(); // Automatically start the slideshow

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
    title: "My Hero Academia",
    description:
      "The story follows Izuku Midoriya, a boy born without superpowers in a world where they are the norm, but who still dreams of becoming a superhero himself",
  },
  {
    imageSrc: "../img/logo/4.png",
    title: "Attack On Titan",
    description:
      " dreams of becoming a superhero himself, and is scouted by the world's greatest hero.",
  },
  {
    imageSrc: "../img/logo/2.png",
    title: "Tokyo Ghoul",
    description:
      "A college student is attacked by a ghoul, He later receives an organ transplant from the ghoul, becoming part monster himself.",
  },
  {
    imageSrc: "../img/logo/7.png",
    title: "Bleach",
    description:
      "A college student is attacked by a ghoul, a being that feeds on human flesh. ",
  },

  {
    imageSrc: "../img/logo/9.png",
    title: "One Piece",
    description:
      "ONE PIECE is a legendary high-seas quest unlike any other. Luffy is a young adventurer who has longed for a life of freedom ever since he can remember.",
  },
  {
    imageSrc: "../img/logo/10.png",
    title: "One Punch man",
    description:
      "Saitama, the protagonist, is an exceptionally powerful hero who easily defeats the monsters or other villains with a single punch. ",
  },
  {
    imageSrc: "../img/logo/6.png",
    title: "Mob Psycho 100",
    description:
      "Shigeo Kageyama is an average middle school-aged boy, nicknamed Mob. Although he looks like an inconspicuous person.",
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

function stopSlideshow() {
  clearInterval(slideshowInterval);
  imageElement.classList.remove("active");
}

window.addEventListener("scroll", function () {
  // Get the scroll position
  const scrollPosition = window.scrollY;

  // Define the position at which you want to add the "active" class
  const targetPosition = 600;

  // Get the element with the class "rep"
  const repElement = document.querySelector(".header-1");

  // Add or remove the "active" class based on the scroll position
  if (scrollPosition > targetPosition) {
    repElement.classList.add("active");
  } else {
    repElement.classList.remove("active");
  }
});

// Start adding and removing 'active' class after page load
window.addEventListener("DOMContentLoaded", toggleActiveClass1);

function generateListComeItem(
  imageSrc,
  animeName,
  watchCount,
  viewCount,
  rating
) {
  return `
    <div class="list-come">
      <div class="aside-content">
        <img src="${imageSrc}" alt="">
        <div class="info-text-aside-1">
          <h2 class="text-head">${animeName}</h2>
          <aside>
            <p class="watch">${watchCount}:watch</p>
            <p class="view-e">${viewCount}:view</p>
            <p class="rating"><span>${rating}</span>Rating</p>
          </aside>
        </div>
      </div>
      <button>Watch</button>
    </div>
  `;
}

// Example dataset
const cardsinfo = [
  {
    imageSrc: "../img/myhero.jpeg",
    animeName: "My Hero Academia",
    watchCount: "23k",
    viewCount: "20,333",
    rating: "7.8",
  },
  {
    imageSrc: "../img/beyblademetal.jpeg",
    animeName: "Beyblade metal master",
    watchCount: "29k",
    viewCount: "25,333",
    rating: "7.7",
  },

  {
    imageSrc: "../img/jjk.webp",
    animeName: "Jujutsu kaisen",
    watchCount: "36k",
    viewCount: "20,333",
    rating: "7.3",
  },

  {
    imageSrc: "../img/onepunch.jpg",
    animeName: "One Punch man",
    watchCount: "44k",
    viewCount: "20,333",
    rating: "7.1",
  },
  {
    imageSrc: "../img/fairytail.webp",
    animeName: "Fairytail",
    watchCount: "13k",
    viewCount: "20,333",
    rating: "7.7",
  },

  {
    imageSrc: "../img/classroom.jpeg",
    animeName: "Classroom Assasians",
    watchCount: "43k",
    viewCount: "20,333",
    rating: "8.8",
  },

  {
    imageSrc: "../img/titan.webp",
    animeName: "Attack on Titan",
    watchCount: "73k",
    viewCount: "20,333",
    rating: "9.8",
  },

  // Add more items to the dataset as needed
];

const listComeContainer = document.querySelector(".list-dy-com");
cardsinfo.forEach((item) => {
  const listItemHtml = generateListComeItem(
    item.imageSrc,
    item.animeName,
    item.watchCount,
    item.viewCount,
    item.rating
  );
  listComeContainer.innerHTML += listItemHtml;
});

function generateAnimeInfoCard(
  animeName,
  viewCount,
  votesCount,
  episodeCount,
  seasonCount,
  completionPercentage
) {
  return `
   
      <div class="text-conta-change">
        <h2 class="name-text">${animeName}</h2>
        <div class="subline-w">
          <div>
            <p><span>${viewCount}</span>view</p>
            <p><span>${votesCount}</span>votes</p>
          </div>
          <p class="tv"><span>TV</span></p>
        </div>
        <div class="season">
          <p>Episode:<span>${episodeCount}</span></p>
          <p>Season:<span>${seasonCount}</span></p>
        </div>
        <div class="btn-e">
          <button><i class='bx bxs-right-arrow'></i>Watch</button>
          <button>Follow anime</button>
        </div>
        <div class="line-video">
          <div class="fill-con-value" style="width: ${completionPercentage}%;"></div>
          <div class="ter">
            <p><span>${completionPercentage}%</span>completed</p>
          </div>
        </div>
      </div> 
    
  `;
}

// Now you can insert the 'animeInfoHtml' into your document wherever you need

var recentanime = [
  // "../img/cards/.jpg",
  // "../img/.jpg",
  // "../img/.jpg",
  // "../img/titan.webp",
  // "../img/bleach.webp",
  // "../img/free.webp",
  // "../img/deathnote.jpeg",
  // "../img/sweetReincarnation.jpg",
  // "../img/classroom.jpeg",
  // "../img/fairytail.webp",
  // Add more image URLs
  {
    animeName: "TheDreamboy",
    viewCount: "34k",
    votesCount: "23,345",
    episodeCount: "4",
    seasonCount: "2",
    completionPercentage: "30",
  },

  {
    animeName: "TONIKAWA",
    viewCount: "44k",
    votesCount: "63,345",
    episodeCount: "3",
    seasonCount: "5",
    completionPercentage: "50",
  },
  {
    animeName: "Parasyte",
    viewCount: "64k",
    votesCount: "53,345",
    episodeCount: "3",
    seasonCount: "2",
    completionPercentage: "20",
  },

  {
    animeName: "Attack On Titan",
    viewCount: "54k",
    votesCount: "13,345",
    episodeCount: "13",
    seasonCount: "3",
    completionPercentage: "60",
  },
  {
    animeName: "Bleach",
    viewCount: "35k",
    votesCount: "55,345",
    episodeCount: "2",
    seasonCount: "6",
    completionPercentage: "70",
  },

  {
    animeName: "Free!",
    viewCount: "36k",
    votesCount: "23,345",
    episodeCount: "5",
    seasonCount: "3",
    completionPercentage: "30",
  },
  {
    animeName: "Deathnote",
    viewCount: "34k",
    votesCount: "23,345",
    episodeCount: "4",
    seasonCount: "2",
    completionPercentage: "40",
  },
  {
    animeName: "Sweet Reincarnation",
    viewCount: "34k",
    votesCount: "23,345",
    episodeCount: "4",
    seasonCount: "2",
    completionPercentage: "20",
  },
  {
    animeName: "Classroom Assassination",
    viewCount: "34k",
    votesCount: "23,345",
    episodeCount: "4",
    seasonCount: "2",
    completionPercentage: "60",
  },
  {
    animeName: "Fairy Tail",
    viewCount: "34k",
    votesCount: "23,345",
    episodeCount: "4",
    seasonCount: "2",
    completionPercentage: "80",
  },
];

var e = document.querySelector(".wer");
var currentIndex3 = 0;

function updateRecentAnimeContent() {
  const currentItem = recentanime[currentIndex3];
  const listItemHtml = generateAnimeInfoCard(
    currentItem.animeName,
    currentItem.viewCount,
    currentItem.votesCount,
    currentItem.episodeCount,
    currentItem.seasonCount,
    currentItem.completionPercentage
  );
  e.innerHTML = listItemHtml;

  currentIndex3 = (currentIndex3 + 1) % recentanime.length;
}

// Initial update
updateRecentAnimeContent();

// Set interval to update content every 8 seconds
setInterval(updateRecentAnimeContent, 8000);

const imageUrls = [
  "../img/cards/TheDreamboy.jpg",
  "../img/TONIKAWA.jpg",
  "../img/Parasyte.jpg",
  "../img/titan.webp",
  "../img/bleach.webp",
  "../img/free.webp",
  "../img/deathnote.jpeg",
  "../img/sweetReincarnation.jpg",
  "../img/classroom.jpeg",
  "../img/fairytail.webp",
  // Add more image URLs
];

const imageElement = document.getElementById("slideshow-image");
let currentImageIndex = 0;
let slideshowInterval;

function showImage1(index) {
  imageElement.src = imageUrls[index];
  imageElement.classList.add("active");
  currentImageIndex = index;
}

function startSlideshow1() {
  showImage1(currentImageIndex);

  slideshowInterval = setInterval(() => {
    imageElement.classList.remove("active");

    setTimeout(() => {
      let nextImageIndex = (currentImageIndex + 1) % imageUrls.length;
      showImage1(nextImageIndex);
    }, 700); // Transition time
  }, 8000); // Change image every 3 seconds
}

startSlideshow1(); // Automatically start the slideshow

// Get the arrow icons and card containerconst cardList = document.querySelector(".card-list-e");
const cardList = document.querySelector(".card-list-e");
let currentIndex = 0;
const cardElements = document.querySelectorAll(".card-let-dy-de");
const leftArrow1 = document.getElementById("leftArrow2");
const rightArrow1 = document.getElementById("rightArrow2");

leftArrow1.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateCardListTransform();
});

rightArrow1.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex + 1, cardElements.length - 1);
  updateCardListTransform();
});

function updateCardListTransform() {
  const cardWidth = cardList.children[0].offsetWidth;
  const translateX = -currentIndex * cardWidth;
  cardList.style.transform = `translateX(${translateX}px)`;
}

function toggleActiveClass1() {
  cardElements.forEach((card, index) => {
    setTimeout(() => {
      const previousActive = cardList.querySelector(".active");
      if (previousActive) {
        previousActive.classList.remove("active");
      }
      card.classList.add("active");
      currentIndex = (currentIndex + 1) % cardElements.length;
    }, index * 8000); // Add and remove 'active' class every 4 seconds
  });
}

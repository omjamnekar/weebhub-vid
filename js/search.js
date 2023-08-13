const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("results");
const showMoreButton = document.getElementById("showMore");
const seePreviousButton = document.getElementById("seePrevious");

let firstData = [];
let secondTitles = [];
let displayedResults = 0;
let previousResults = [];
let resultList;

const resultsPerPage = 10;
let searchResults = []; // Declare at a higher scope

// Fetch the second JSON data and store titles in a separate array
Promise.all([
  fetch(
    "https://raw.githubusercontent.com/omjamnekar/animejson1/master/weebhub_animelist.json"
  ).then((response) => response.json()),
  fetch(
    "https://raw.githubusercontent.com/omjamnekar/animejson1/master/animebigFinal_animedataset.json"
  ).then((response) => response.json()),
])
  .then(([secondData, firstData]) => {
    const secondTitles = secondData.map((item) => item.title);

    // Update the searchResults array with combined data
    searchResults = [...firstData, ...secondTitles];
  })
  .catch((error) => console.log("Error fetching JSON data:", error));

searchInput.addEventListener("input", () => {
  // Reset displayedResults when new search is initiated
  seePreviousButton.style.display = "none";
  updateResults();
});

function updateResults() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  if (searchTerm.length > 0) {
    // Filter searchResults based on the searchTerm
    const filteredResults = searchResults.filter((item) => {
      if (typeof item === "string") {
        // For second JSON data (titles)
        return item.toLowerCase().includes(searchTerm);
      } else if (typeof item === "object") {
        // For first JSON data
        return (
          (item.Name &&
            typeof item.Name === "string" &&
            item.Name.toLowerCase().includes(searchTerm)) ||
          (item.Genres &&
            typeof item.Genres === "string" &&
            item.Genres.toLowerCase().includes(searchTerm)) ||
          (item.Producers &&
            typeof item.Producers === "string" &&
            item.Producers.toLowerCase().includes(searchTerm))
        );
      }
      return false;
    });

    displayResults(filteredResults);
  } else {
    // Clear results when search input is empty
    resultsContainer.innerHTML = "";
  }
}

function displayResults(results) {
  resultsContainer.innerHTML = "";

  if (results.length === 0) {
    resultsContainer.innerHTML = "<p>No results found.</p>";
    return;
  }

  const resultList = document.createElement("ul");
  results.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("data-anime-index", index);

    if (typeof item === "string") {
      listItem.innerHTML = `
        <div class="cards-of-search">
          <img class="img-round" src='../img/images-copy.png'>
          <strong>Title:</strong> ${item}<br>
          <hr>
        </div>
      `;
    } else if (typeof item === "object" && item.Name) {
      listItem.innerHTML = `
        <div class="cards-of-search">
          <div class="img-cone">
            ${
              item["Image URL"]
                ? `<img class="img-round" src="${item["Image URL"]}" alt="${item.Name} Image"><br>`
                : ""
            }
          </div>
          <div class="text-search-put">
            <p><strong>Name:</strong> ${item.Name}</p>
            <p><strong>Genres:</strong> ${item.Genres}</p>
            <p><strong>Producers:</strong> ${item.Producers}</p>
          </div>
        </div>
        <hr>
      `;
    }

    resultList.appendChild(listItem);
  });

  resultsContainer.appendChild(resultList);
}

var searchInput1 = document.querySelector(".check");
var expandablew = document.querySelector(".expandable-input");

searchInput1.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent the click from propagating to document
  if (this.value === "") {
    expandablew.classList.add("expanded");
  }
});

expandablew.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent the click from propagating to document
});

document.addEventListener("click", function (event) {
  if (
    !searchInput1.contains(event.target) &&
    !expandablew.contains(event.target) &&
    searchInput1.value === ""
  ) {
    expandablew.classList.remove("expanded");
  }
});

searchInput.addEventListener("input", () => {
  displayedResults = 0; // Reset displayedResults when new search is initiated
  seePreviousButton.style.display = "block"; // Show the "See Previous" button
  updateResults();
});

searchInput.addEventListener("input", () => {
  displayedResults = 0; // Reset displayedResults when new search is initiated

  // Check if there's any text in the search input
  if (searchInput.value.trim() === "") {
    resultsContainer.innerHTML = ""; // Clear the results container
    showMoreButton.style.display = "none"; // Hide "Show More" button
    seePreviousButton.style.display = "none"; // Hide "See Previous" button
  } else {
    seePreviousButton.style.display = "block"; // Show "See Previous" button
    updateResults();
  }
});

const searchButtonDiv = document.querySelector(".btn-search-con-s");

searchInput.addEventListener("input", () => {
  if (searchInput.value.trim() !== "") {
    searchButtonDiv.style.display = "block"; // Display the div when input is not blank
  } else {
    searchButtonDiv.style.display = "none"; // Hide the div when input is blank
  }
});

searchInput.addEventListener("input", () => {
  displayedResults = 0; // Reset displayedResults when new search is initiated
  updateResults();
});

seePreviousButton.addEventListener("click", () => {
  if (previousResults.length > 0) {
    resultsContainer.innerHTML = previousResults.pop(); // Retrieve and display previous results
    displayedResults -= 10;
    updateResults();
  }
});
showMoreButton.addEventListener("click", () => {
  previousResults.push(resultsContainer.innerHTML); // Store the current results
  displayedResults += 10;
  updateResults();
});

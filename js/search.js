const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("results");
const showMoreButton = document.getElementById("showMore");
const seePreviousButton = document.getElementById("seePrevious");

let searchResults = [];
let currentPage = 1;
const resultsPerPage = 10;
let filteredResults = [];

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
    searchResults = [...firstData, ...secondTitles];
  })
  .catch((error) => console.log("Error fetching JSON data:", error));

function updateResults() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  if (searchTerm.length > 0) {
    filteredResults = searchResults.filter((item) => {
      if (typeof item === "string") {
        return item.toLowerCase().includes(searchTerm);
      } else if (typeof item === "object") {
        for (const prop in item) {
          if (
            typeof item[prop] === "string" &&
            item[prop].toLowerCase().includes(searchTerm)
          ) {
            return true;
          }
        }
      }
      return false;
    });

    displayPageResults(currentPage);
  } else {
    resultsContainer.innerHTML = "";
    showMoreButton.style.display = "none";
    seePreviousButton.style.display = "none";
  }
}

function displayPageResults(page) {
  const start = (page - 1) * resultsPerPage;
  const end = start + resultsPerPage;
  const pageResults = filteredResults.slice(start, end);

  displayResults(pageResults);

  seePreviousButton.style.display = page > 1 ? "block" : "none";
  showMoreButton.style.display =
    end < filteredResults.length ? "block" : "none";
}

// ... Rest of your code ...

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

    listItem.addEventListener("click", () => {
      // Convert the filteredResults array to a JSON string and encode it as a parameter
      const filteredResultsJSON = encodeURIComponent(
        JSON.stringify(filteredResults)
      );

      // Navigate to details.html with the selected record's index and filteredResults as parameters
      window.location.href = `details.html?index=${index}&filteredResults=${filteredResultsJSON}`;
    });

    resultList.appendChild(listItem);
  });
  resultsContainer.appendChild(resultList);
}

// Inside your displayResults function

seePreviousButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage -= 1;
    displayPageResults(currentPage);
  }
});

showMoreButton.addEventListener("click", () => {
  if (currentPage < Math.ceil(filteredResults.length / resultsPerPage)) {
    currentPage += 1;
    displayPageResults(currentPage);
  }
});

searchInput.addEventListener("input", () => {
  currentPage = 1;
  updateResults();
});

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

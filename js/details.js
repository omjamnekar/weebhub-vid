// Get the detailsContainer element
const detailsContainer = document.getElementById("detailsContainer");

// Function to fetch and display details of a selected record
function displayDetails() {
  // Parse the index parameter from the URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const index = parseInt(urlParams.get("index"));

  // Assuming your filteredResults array holds both strings and objects
  if (filteredResults && index >= 0 && index < filteredResults.length) {
    const selectedRecord = filteredResults[index];

    // Clear the container before displaying new details
    detailsContainer.innerHTML = "";

    if (typeof selectedRecord === "string") {
      // Handle displaying details for string records (titles)
      const titleDetails = document.createElement("div");
      titleDetails.innerHTML = `
        <h2>Title: ${selectedRecord}</h2>
        <!-- Add any additional details you want to display -->
      `;
      detailsContainer.appendChild(titleDetails);
    } else if (typeof selectedRecord === "object" && selectedRecord.Name) {
      // Handle displaying details for object records (anime details)
      const animeDetails = document.createElement("div");
      animeDetails.innerHTML = `
        <h2>Name: ${selectedRecord.Name}</h2>
        <p>Genres: ${selectedRecord.Genres}</p>
        <p>Producers: ${selectedRecord.Producers}</p>
        <!-- Add more details here -->
      `;
      detailsContainer.appendChild(animeDetails);
    }
  } else {
    // Display an error message or handle invalid index case
    detailsContainer.innerHTML =
      "<p>Error: Invalid index or record not found.</p>";
  }
}

// Display details for the selected record
displayDetails();

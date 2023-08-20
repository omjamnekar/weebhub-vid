import { dataDictionary } from "../js/data/subcard.js";

function generateAnimeCard(
  imageSrc,
  animeName,
  description,
  starRate,
  episodeCount,
  releaseDate,
  status,
  genres
) {
  return `
      <div class="slide-card-his">
        <div class="img0e">
          <img src="${imageSrc}" alt="" />
        </div>
        <div class="his-text">
          <h2>${animeName}</h2>
          <p>${description}</p>
          <div class="aside-items">
            <p>starRate: ${starRate}</p>
            <p>episodeCount: ${episodeCount}</p>
            <p>releaseDate: ${releaseDate}</p>
          </div>
          <p>status: ${status}</p>
          <p>genres: ${genres}</p>
        </div>
        <div class="watch-btn-his">
          <button>Watch from your left</button>
          <div>
          <h2>Remainind EP</h2>
          <details class="custom-select">
          
          <summary class="radios">
            <input
              type="radio"
              name="item"
              id="default"
              title="Remaining Episodes"
              checked
            />
            <input type="radio" name="item" id="item1" title="Item 1" />
            <input type="radio" name="item" id="item2" title="Item 2" />
            <input type="radio" name="item" id="item3" title="Item 3" />
            <input type="radio" name="item" id="item4" title="Item 4" />
            <input type="radio" name="item" id="item5" title="Item 5" />
          </summary>
          <ul class="list">
            <li>
              <label for="item1">
                0Episode
                <span></span>
              </label>
            </li>
            <li>
              <label for="item2">1Episode</label>
            </li>
            <li>
              <label for="item3">2Episode</label>
            </li>
            <li>
              <label for="item4">3Episode</label>
            </li>
            <li>
              <label for="item5">4Episode</label>
            </li>
            <li>
              <label for="item5">5Episode</label>
            </li>
            <li>
              <label for="item5">6Episode</label>
            </li>
            <li>
              <label for="item5">7Episode</label>
            </li>
          </ul>
        </details>
        </div>
        </div>
      </div>`;
}

function generateAnimeCards(data) {
  let html = "";
  for (const dataDictionary of data) {
    html += generateAnimeCard(
      dataDictionary.imageSrc,
      dataDictionary.animeName,
      dataDictionary.description,
      dataDictionary.starRate,
      dataDictionary.episodeCount,
      dataDictionary.releaseDate,
      dataDictionary.status,
      dataDictionary.genres
    );
  }
  return html;
}

// Generate HTML for all anime cards and insert it into the container
const allAnimeCardsHTML = generateAnimeCards(dataDictionary);
document.getElementById("your-container").innerHTML = allAnimeCardsHTML;

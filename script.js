const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result, searchTerm));
}

function displayResults(result, searchTerm) {
    resultPlaylist.classList.add("hidden");
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = ''; // Limpa os resultados anteriores    

    const filteredArtists = result.filter(artist => artist.name.toLowerCase().includes(searchTerm) );


  filteredArtists.forEach(artist => {    
      const artistCard = document.createElement('div');
      artistCard.classList.add('artist-card');

      artistCard.innerHTML = `
          <div class="card-img">
              <img class="artist-img" src="${artist.urlImg}" />
              <div class="play">
                  <span class="fa fa-solid fa-play"></span>
              </div>
          </div>
      <div class="card-text">              
              <span class="artist-name">${artist.name}</span>
              <span class="artist-categorie">Artista</span>
          </div>
      `;
       gridContainer.appendChild(artistCard);
  });

  resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtist.classList.add('hidden');
        return;
    }

    requestApi(searchTerm);
});

document.addEventListener('DOMContentLoaded', () => {
    const sejaPremium = document.querySelector('#sejaPremium');
    const btn_x = document.querySelector('.btn_x');

    if (sejaPremium && btn_x) {
        btn_x.addEventListener('click', () => {
            sejaPremium.style.display = 'none';
        });
    } else {
        console.error('Elementos não encontrados');
    }
});



/*const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result, searchTerm))
        .catch((error) => console.error('Erro:', error));
    
}

function displayResults(result, searchTerm) {
    resultPlaylist.classList.add("hidden")
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = '';
   
    const filteredElements = result.filter((artist) => artist.name.toLowerCase().includes(searchTerm));

    filteredElements.forEach((artist) => {
        const artistCard = document.createElement('div');
        artistCard.className = 'artist';
        artistCard.innerHTML = `
            <div class="card-img">
                <img class="artist-img" src="${artist.urlImg}" alt="${artist.name}">
                <div class="play"> 
                    <span class="fa fa-solid fa-play"></span>
                </div>
            </div>

            <div class="card-text">
                <span class="artist-name">${artist.name}</span>
                <span class="artist-categories"> Artista </span>
            </div>
        `;
        gridContainer.appendChild(artistCard);
    });
    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return
    }
    
    requestApi(searchTerm);
}) */







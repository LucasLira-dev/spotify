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

    const filteredArtists = result.filter(artist => artist.name.toLowerCase().includes(searchTerm) );// Filtra os artistas que contém o termo de busca


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
            if(sejaPremium.style.display === 'none') {
                const playlistContainer = document.querySelector('.playlist-container');
                playlistContainer.style.marginTop = '80px';
            }
        }); 
    } else {
        console.error('Elementos não encontrados');
    }



   
  
});

document.addEventListener('DOMContentLoaded', () => {
  const iframes= [
    `
     <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/3p7PcrEHaaKLJnPUGOtRlT?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,
    `
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/6aoGgTKGqtsjj48ymcNs4Z?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,
    `
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/1elUiq4X7pxej6FRlrEzjM?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,
    `
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/1SXhEXzOTF7YeuQX59m7pT?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,
    `
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/6vTqEFbTtTRJsuIpzZgjxi?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,
    `
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO2pDoLC?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,
    `
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4RjOODnT7VzuwMJQk7apEG?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,
    `
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/0XyeA6udE98G42ZRUxOmOK?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,
    `
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5CP84pfi4AFe95UTACFWrk?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,
    `
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5FVM8teszzq7kZyIjkI4Vu?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,
    `
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6UuPk9eKMZBEr0HizvV2Wy?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,
    `
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5Cs1VjhgG8FmA5rv5iXe3r?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,
    `
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1E4vBpx0Xzo36y?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,
    `
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1E4zSKKxLmC9qB?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,
    `
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1E4vTHVDH1FT3Y?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,
    `
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1E4vyndvGUp4dP?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,
    `
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1E4CKbVFrOVjvq?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,
    `
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1E4oAyYponYvIe?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `

  ]

  const imagens= document.querySelectorAll('img');

  
  const mainContainer= document.querySelector('.main-container');

    imagens.forEach((img) => {
        img.addEventListener('click', () => {
            const index = img.getAttribute('data-index');

            if(index !=='999') {
                mainContainer.setAttribute('style', 'display: flex; justify-content: space-between; align-items: center; height: 100vh; width: 100vw; background-color: #000;');
                mainContainer.innerHTML = iframes[index];
               
    
                history.pushState({ page: 2 }, "title 2", "?page=2");
           
                function restoreOriginalHTML() {
          
                    location.reload();
                   
                }
            
    
                // Adiciona um ouvinte para o evento popstate
                window.addEventListener('popstate', (event) => {
                restoreOriginalHTML();
                
                }); //fim
            }
        
           
           

        });
    });

});



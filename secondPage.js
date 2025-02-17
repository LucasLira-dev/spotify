document.addEventListener('DOMContentLoaded', function() {
    const originalHTML = document.documentElement.innerHTML;

const btn_pesquisarMobile= document.getElementById('btn_pesquisarMobile');


btn_pesquisarMobile.addEventListener('click', () => {
      
    // Salva o estado atual no histórico
    history.pushState({ page: 2 }, "title 2", "?page=2");

    

    // Remove o conteúdo atual da página
    document.head.innerHTML = '';
    document.body.innerHTML = '';

    document.documentElement.innerHTML = `<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Spotify Imersão </title>
        <link rel="stylesheet" href="src/styles/SearchStyle.css"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/solid.css"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/fontawesome.css"/>
    </head>
    <body>
        <header class="header">
            <h1> Buscar </h1>
            <div class="search">
                <img src="src/assets/icons/lupa_pesquisa.png" alt="Buscar"/>
                <input type="text" id="search-input" placeholder="O que você quer ouvir?"/>
            </div>
        </header>

        <main class="container_principal">
            <h2> Navegar por todas as seções </h2>

            
                      <!-- LIST DE CARDS -->
                      <div class="offer__scroll-container">
                        <div class="offer__list">
                            <section class="offer__list-item">
                                <!-- CARD 1 -->
                                <a href="" class="cards">
                                    <div class="cards card1">
                                        <img src="./src/assets/playlist/1.jpeg" alt="" />
                                        <span>Boas festas</span>
                                    </div>
                                </a>

                                <!-- CARD 2 -->
                                <a href="" class="cards">
                                    <div class="cards card2">
                                        <img src="./src/assets/playlist/2.png" alt="" />
                                        <span>Feitos para você</span>
                                    </div>
                                </a>

                                <!-- CARD 3 -->
                                <a href="" class="cards">
                                    <div class="cards card3">
                                        <img src="./src/assets/playlist/3.jpeg" alt="" />
                                        <span>Lançamentos</span>
                                    </div>
                                </a>

                                <!-- CARD 4 -->
                                <a href="" class="cards">
                                    <div class="cards card4">
                                        <img src="./src/assets/playlist/4.jpeg" alt="" />
                                        <span>Creators</span>
                                    </div>
                                </a>

                                <!-- CARD 5 -->
                                <a href="" class="cards">
                                    <div class="cards card5">
                                        <img src="./src/assets/playlist/5.jpeg" alt="" />
                                        <span>Para treinar</span>
                                    </div>
                                </a>

                                <!-- CARD 6 -->
                                <a href="" class="cards">
                                    <div class="cards card6">
                                        <img src="./src/assets/playlist/6.jpeg" alt="" />
                                        <span>Podcasts</span>
                                    </div>
                                </a>

                                <!-- CARD 7 -->
                                <a href="" class="cards">
                                    <div class="cards card7">
                                        <img src="./src/assets/playlist/7.jpeg" alt="" />
                                        <span>Sertanejo</span>
                                    </div>
                                </a>

                                <!-- CARD 8 -->
                                <a href="" class="cards">
                                    <div class="cards card8">
                                        <img src="./src/assets/playlist/8.jpeg" alt="" />
                                        <span>Samba e pagode</span>
                                    </div>
                                </a>

                                <!-- CARD 9 -->
                                <a href="" class="cards">
                                    <div class="cards card9">
                                        <img src="./src/assets/playlist/9.jpeg" alt="" />
                                        <span>Funk</span>
                                    </div>
                                </a>

                                <!-- CARD 10 -->
                                <a href="" class="cards">
                                    <div class="cards card10">
                                        <img src="./src/assets/playlist/10.jpeg" alt="" />
                                        <span>MPB</span>
                                    </div>
                                </a>

                                <!-- CARD 11 -->
                                <a href="" class="cards">
                                    <div class="cards card11">
                                        <img src="./src/assets/playlist/11.jpeg" alt="" />
                                        <span>Rock</span>
                                    </div>
                                </a>

                                <!-- CARD 12 -->
                                <a href="" class="cards">
                                    <div class="cards card12">
                                        <img src="./src/assets/playlist/12.jpeg" alt="" />
                                        <span>Hip Hop</span>
                                    </div>
                                </a>

                                <!-- CARD 13 -->
                                <a href="" class="cards">
                                    <div class="cards card13">
                                        <img src="./src/assets/playlist/13.jpeg" alt="" />
                                        <span>Indie</span>
                                    </div>
                                </a>

                                <!-- CARD 14 -->
                                <a href="" class="cards">
                                    <div class="cards card14">
                                        <img src="./src/assets/playlist/14.jpeg" alt="" />
                                        <span>Relax</span>
                                    </div>
                                </a>

                                <!-- CARD 15 -->
                                <a href="" class="cards">
                                    <div class="cards card15">
                                        <img src="./src/assets/playlist/15.jpeg" alt="" />
                                        <span>Música Latina</span>
                                    </div>
                                </a>
                            </section>
                        </div>  
            
        </main>
    </body>
    </html>`

       // Função para restaurar o HTML original
       function restoreOriginalHTML() {
      
        location.reload();
       
    }

    // Adiciona um ouvinte para o evento popstate
    window.addEventListener('popstate', (event) => {
      restoreOriginalHTML();
       
    });

});

});
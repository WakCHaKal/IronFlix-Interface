$('.owl-carousel').owlCarousel({ /*$ significa jquery - Aqui onde está o efeito do carrousel*/
    loop:true, /*efeito pra nunca terminar a rolagem de filmes (false=desativa)*/
    margin:10, /*margem entre os filmes*/
    nav:true, /*botões de navegação (false=desativa)*/
    responsive:{ /*responsividade é quando tudo se adapta ao tam da tela*/
        0:{/*indica q quando a tela tiver muiito próx de 0px, aparece 1 item por vez*/
            items:1
        },
        600:{ /*indica q quando a tela tiver 600px ou menos, aparece 5 itens por vez*/
            items:3
        },
        1000:{ /*indica q quando a tela tiver 1000px ou mais, aparece 5 itens por vez*/
            items:5
        }
    }
})

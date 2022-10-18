const containerTrait = document.querySelector('.container-trait');
const containerMenu = document.querySelector('.container-menu');
const interieur = document.querySelector('.interieur');
const exterieur = document.querySelector('.exterieur');
let compteur = 0;

containerTrait.addEventListener('click', function(e){
    e.stopPropagation();
    interieur.classList.toggle('interieur-change');
    exterieur.classList.toggle('exterieur-change');
    switch (compteur) {
        case  0:
            compteur++;
            containerMenu.classList.add('container-change');
            break;
        case  1:
            containerMenu.classList.add('container-change2');
            setTimeout(() => {
            location.reload();
            },2750);
            break;
    }
});


const btn = document.querySelector('#btn');
const img = document.getElementById('img');


// btn.addEventListener('click', () =>{
// })
// façon de l'écrire
// quand on btn est ('#btn') 
btn.addEventListener('click', function(){
    // ajoute la classe show
    // img.classlist.add('show')
    // enlever la classe show
    // img.classList.remove('show')
    img.classList.toggle('show');
})
// ---------------------------------------

const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
// créer un évenement de la souris quand on est dans le rectangque on veut capter l'évenement
mouseEvent.addEventListener('mousemove', (e) => {
    // console.log('yes !')
    // console.log('event') on pourra voir tous les informations concernant le mouvement de la souris sur l'écran
    // console.log('e') meme que event si je met e ne pas oublier de le mettre dans la fonction
    horizontal.innerHTML = e.x;
    vertical.innerHTML = e.y;
    // injecter du style
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";
// si le mouvement x et superieur à 500px alors flou
    if(e.x > 500){
        document.body.style.filter = "blur(3px)";
// en revanche si x et inférieur à 500 px alors pas de flou
    }else{
        document.body.style.filter = "none";
    }


})

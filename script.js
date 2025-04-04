// SELETTORI

    // ham buttons
const hamButtonOpen = document.querySelector('.ham-button-open');
const hamButtonClose = document.querySelector('.ham-button-close');

const header = document.querySelector('.header')

    // link navbar
const headerLinks = document.querySelectorAll('.header_nav_li_a');

// EVENTI 

    // ham buttons
hamButtonOpen.addEventListener('click', (event) => {
    event.preventDefault(); // Evita il refresh della pagina
    hideOrShowNavbar();
});

hamButtonClose.addEventListener('click', (event) => {
    event.preventDefault(); 
    hideOrShowNavbar();
});

    // nav links
headerLinks.forEach(link =>{
    link.addEventListener('click', (event) => {
        // event.preventDefault();
        hideOrShowNavbar();
    })
})

// FUNZIONI

    // navbar
function hideOrShowNavbar(){
    // console.log('qui')
    //se header has hidden
        //togli hidden a navbar
        //metti hidden a hamButtonOpen
        //togli hidden a hamButtonClose
    if (header.classList.contains('hidden')){
        // console.log('qui')
        header.classList.remove('hidden');
        hamButtonOpen.classList.add('hidden');
        hamButtonClose.classList.remove('hidden');
        
    } else {
        // console.log('qui')
        header.classList.add('hidden');
        hamButtonOpen.classList.remove('hidden');
        hamButtonClose.classList.add('hidden');
    }
        // metti hidden a navbar 
        // togli hidden a hamButtonOpen
        // metti hidden a hamButtonClose
}


    // gallery
    const images = document.querySelectorAll('.gallery_images_div');
    let currentIndex = 0;
    
    function showNextImage() {
        images[currentIndex].classList.add('hidden'); // Nasconde l'immagine attuale
        currentIndex = (currentIndex + 1) % images.length; // Passa all'immagine successiva
        images[currentIndex].classList.remove('hidden'); // Mostra la nuova immagine
    }
    
    // Cambia immagine ogni 3 secondi
    setInterval(showNextImage, 10000);

    images.forEach(image => {
        image.addEventListener('click', (event) =>{
            showNextImage()
        })
    })
    
    

    // password
    // function checkPassword() {
    //     const password = document.getElementById("password").value;
    //     const correctPassword = "password"; // Cambia questa con la tua password
    //     if (password === correctPassword) {
    //         document.getElementById("login").style.display = "none";
    //         document.getElementById("content").style.display = "block";
    //     } else {
    //         document.getElementById("error").style.display = "block";
    //     }
    // }
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');


// Menu show
/* Validação se constantes existem */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


//Tirar o Show menu
/* Validação se constantes existem */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
//Se caso um dos item do menu suspenso for selecionado, ele irá fechar
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

//Mapea todos as guias que estão no menu através do do ID referenciando e o href chamando o dado.
navLink.forEach(n => n.addEventListener('click', linkAction));



/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

// Onde há as tag SECTION com ID irá percorrer através do forEach e marcara a localização no menu flutuante.
const sections = document.querySelectorAll('section[id]')
console.log('Sections => ', sections.length);

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    });

}

window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Animation repeat
});

sr.reveal(`.home__data, .footer__content, .footer__logo, .footer__description `)
sr.reveal(`.home__tree1`, {origin:'left', delay: 800})
sr.reveal(`.home__tree2`, {origin:'right', delay: 800})
sr.reveal(`.home__container`, {delay: 800})
sr.reveal(`.category__card , .item__card`, {interval: 100})
sr.reveal(`.about__img, .about__data, .footer__tree-2`, {origin:'left'})
sr.reveal(`.party__images, .party__data, .footer__tree-1`, {origin:'right'})



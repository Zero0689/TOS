const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const section = document.querySelectorAll('section');


const activePage = () => {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    section.forEach(section => {
        section.classList.remove('active');
    });
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () =>{
        if (!link.classList.contains('active')) {
            activePage(); 

            link.classList.add('active');

            setTimeout(() => {
                section[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active');

        setTimeout(() => {
            section[0].classList.add('active');
        }, 1100);
    }
});
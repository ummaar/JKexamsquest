const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navl');
    const navLinks = document.querySelectorAll('.navl li');
   
    burger.addEventListener('click', ()=>{
         //Toggle Nav
        nav.classList.toggle('navb-active');

        //Animate Links
        navLinks.forEach((link, index)=>{
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
    


}

navSlide();

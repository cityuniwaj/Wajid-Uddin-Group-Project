const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
    if (entry.isIntersecting) {
        entry.target.classList.add('sidemenu-show');
    } else {
        entry.target.classList.remove('sidemenu-show')
    }
    });
});


const hiddenElements = document.querySelectorAll('.sidemenu-hidden');
hiddenElements.forEach((el) => observer.observe(el));
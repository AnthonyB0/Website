document.addEventListener("scroll", function () {
    // Slide Transition
    const names = document.getElementsByClassName('slide');
    const scrollPos = window.scrollY + window.innerHeight;

    for (let i = 0; i < names.length; i++) {
        // Introduce a delay for each subsequent element
        setTimeout(function(){
            if (scrollPos > names[i].offsetTop + names[i].offsetHeight / 2) {
                names[i].classList.add('active');
            }
        }, i * 2000); // 2000ms delay for each element
    }

    // Parallax Effect
    let offset = window.pageYOffset;
    let parallaxElements = document.getElementsByClassName('parallax');

    for (let element of parallaxElements) {
        element.style.backgroundPositionY = offset * 0.7 + "px";
    }
});

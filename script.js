const menuLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function() {

    const chegouAoFinal =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

    if (chegouAoFinal) {

        menuLinks.forEach(function(link) {
            link.classList.remove("active");
        });

        const ultimoLink = document.querySelector(
            'nav a[href="#contato"]'
        );

        if (ultimoLink) {
            ultimoLink.classList.add("active");
        }

        return;
    }

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            menuLinks.forEach(function(link) {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                'nav a[href="#' + section.id + '"]'
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
});

const backToTop = document.querySelector("#backToTop");

window.addEventListener("scroll", function() {

    if (window.scrollY > 400) {
        backToTop.style.opacity = "1";
        backToTop.style.visibility = "visible";
    } else {
        backToTop.style.opacity = "0";
        backToTop.style.visibility = "hidden";
    }

});

backToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
navbar = document.querySelector(".navbar").querySelectorAll("a");
console.log(navbar);

navbar.forEach(element => {
    element.addEventListener("click", function() {
        navbar.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active");
    })   
});

navbar.forEach(element => {
    element.addEventListener("scroll", ()=> {
        let current = '';
        navbar.forEach(navbar => {
            const sectionTop = navbar.offsetTop;
            const sectionHeight = navbar.clientHeight;
            if(pageYOffset >= sectionTop){
                current = navbar.getAtttribute('class');
            }
        })
        navbar.forEach(a => {
            navbar.forEach(nav=>nav.classList.remove("active"))

            this.classList.add("active");
        })
    })
})
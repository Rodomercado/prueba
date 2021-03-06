var sections = document.querySelectorAll("section");

onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop;

    sections.forEach((section) => {
        if (
            scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 && scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight *0.25 
        ) {
            var currentId = section.attributes.id.value;
            removeAllActiveClasses();
            addActiveClass(currentId);
        }
    });
};

var removeAllActiveClasses = function() {
    document.querySelectorAll("navbar a").forEach((el) => {
        el.classList.remove("active");
    });
};

var addActiveClass = function(id) {
    console.log(id);
    var selector = 'navbar a[href="#${id}"]';
    document.querySelectorAll(selector).classList.add("active");
};
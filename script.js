const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const icon = document.querySelector(".icon-close");

menuBtn.addEventListener("click", () => {
    //menuBtn.classList.toggle("active");
    navigation.classList.add("active");
    //icon.classList.remove("active");

});

icon.addEventListener("click", () => {

    navigation.classList.remove("active");

});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");


var sliderNav = function(manual){
    btns.forEach((btn) =>{
        btn.classList.remove("active");
    })

    contents.forEach((content) =>{
        content.classList.remove("active");
    })

    slides.forEach((slide) =>{
        slide.classList.remove("active");
    })

    btns[manual].classList.add("active")
    slides[manual].classList.add("active")
    contents[manual].classList.add("active")

}

btns.forEach((btn, i) =>{
    btn.addEventListener("click", () =>{
        sliderNav(i);
    });
});

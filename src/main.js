let cl = 0

var typed = new Typed('.updText', {
    strings: ["Goosiest", "Pro Drifter", "YouTuber"],
    smartBackspace: true, // this is a default
    showCursor: true,
    typeSpeed: 40,
    backSpeed: 50,
    smartBackspace: true, // this is a default
    loop: true,
    backDelay: 2000,
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

$('.burgerLines').click(function () {
    if (cl === 0) {
        firstPage.style.marginLeft = '-100%'
        burger_open.style.marginLeft = '0%'
        line1.style.transform = 'rotate(45deg)'
        line3.style.transform = 'rotate(-45deg)'
        linePhon1.style.transform = 'rotate(45deg)'
        linePhon3.style.transform = 'rotate(-45deg)'
        line1.style.position = 'absolute'
        line3.style.position = 'absolute'
        linePhon1.style.position = 'absolute'
        linePhon3.style.position = 'absolute'
        line2.style.opacity = '0'
        linePhon2.style.opacity = '0'
        linePhon2.style.margin = '0'
        cl = 1
    } else if (cl != 0){
        firstPage.style.marginLeft = '0%'
        burger_open.style.marginLeft = '100%'
        line1.style.transform = 'rotate(0deg)'
        line3.style.transform = 'rotate(0deg)'
        linePhon1.style.transform = 'rotate(0deg)'
        linePhon3.style.transform = 'rotate(0deg)'
        linePhon2.style.opacity = '1'
        line2.style.opacity = '1'
        line1.style.position = 'relative'
        line3.style.position = 'relative'
        linePhon1.style.position = 'relative'
        linePhon3.style.position = 'relative'
        line2.style.margin = '10px 0'
        linePhon2.style.margin = '10px 0'
        line2.style.marginLeft = '10px'
        linePhon2.style.marginLeft = '10px'
        cl = 0
    }
})
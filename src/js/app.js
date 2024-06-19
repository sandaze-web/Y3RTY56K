//=include ./helpers/elementsNodeList.js
//=include ./helpers/toggleBodyLock.js
//=include ./modules/index.js

// Включить/выключить FLS (Full Logging System) (в работе)


document.addEventListener('DOMContentLoaded', function () { // Аналог $(document).ready(function(){
    if (document.querySelector('.sertificate')) {
        const sertificateSwiper = new Swiper('.sertificate-swiper', {
            // Default parameters
            slidesPerView: 3,
            spaceBetween: 47,
            // Responsive breakpoints
            navigation: {
                nextEl: '.sertificate__arrow.next',
                prevEl: '.sertificate__arrow.prev',
            },
            pagination: {
                el: '.sertificate-pagination',
                type: 'bullets',
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 7
                },
                // when window width is >= 640px
                769: {
                    slidesPerView:2,
                    spaceBetween: 47,
                },
                // when window width is >= 640px
                1367: {
                    slidesPerView: 3,
                    spaceBetween: 47,
                }
            }
        })
        Fancybox.bind('[data-fancybox="gallery"]', {  });
    }
    if (document.querySelector('.clinic')) {
        const sertificateSwiper = new Swiper('.clinic-swiper', {
            // Default parameters
            slidesPerView: 1.1,
            centeredSlides: true,
            initialSlide: 3,
            spaceBetween: 7,
            // Responsive breakpoints
            navigation: {
                nextEl: '.clinic__arrow.next',
                prevEl: '.clinic__arrow.prev',
            },
            pagination: {
                el: '.clinic-pagination',
                type: 'bullets',
            },
        })
    }


    if (document.querySelector('.feedback')) {
        let buttonsTextMore = document.querySelectorAll('.feedback__item-more')
        buttonsTextMore.forEach(button => {
            button.addEventListener('click', () => {
                button.previousElementSibling.classList.add('show')
                button.style.display = 'none'
            })

        })

        let buttonFeedbackMore = document.querySelector('.feedback__more'),
            showPerClick = 3,
            hiddenItems = document.querySelectorAll('.feedback__item.hidden')

        if (hiddenItems.length <= 0) buttonFeedbackMore.style.display = 'none'

        buttonFeedbackMore.addEventListener('click', () => {
            let servicesItems = document.querySelectorAll(".feedback__item.hidden")
            if (servicesItems.length <= showPerClick) {
                buttonFeedbackMore.style.display = 'none'
            }

            let current = [...servicesItems].slice(0, showPerClick)
            current.forEach((element) => {
                element.classList.remove("hidden")
            });
        })

    }

    if (document.querySelector('.blog')) {

        let buttonFeedbackMore = document.querySelector('.blog__more'),
            showPerClick = 3,
            hiddenItems = document.querySelectorAll('.blog__item.hidden')

        if (hiddenItems.length <= 0) buttonFeedbackMore.style.display = 'none'

        buttonFeedbackMore.addEventListener('click', () => {
            let servicesItems = document.querySelectorAll(".blog__item.hidden")
            if (servicesItems.length <= showPerClick) {
                buttonFeedbackMore.style.display = 'none'
            }

            let current = [...servicesItems].slice(0, showPerClick)
            current.forEach((element) => {
                element.classList.remove("hidden")
            });
        })

    }

    if(document.querySelector('.header-burger')) {
        let burger = document.querySelector('.header-burger'),
            nav = document.querySelector('.header-nav')
        burger.addEventListener('click', () => {
            burger.classList.toggle('active')
            if(nav.classList.contains('_is-open')) {
                nav.classList.remove('_is-open')
            }else{
                if(!nav.classList.contains('_is-open')) nav.classList.add('_is-open')
            }
            toggleBodyLock(nav.classList.contains('_is-open'))
        })
    }
});

$('a[href^="#"]').on("click", function (e) {
    let anchor = $(this);
    let offsetAnchor = 0
    if(window.innerWidth <= 768) offsetAnchor = 100
    let offset = document.documentElement.clientHeight * offsetAnchor / 929
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr("href")).offset().top - offset
    }, 700);
    e.preventDefault();
});

// Паралакс мышей ========================================================================================
// const mousePrlx = new MousePRLX({})
// =======================================================================================================

// Фиксированный header ==================================================================================
headerFixed()
// =======================================================================================================

togglePopupWindows()
// =======================================================================================================

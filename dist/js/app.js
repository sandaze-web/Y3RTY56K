const html = document.documentElement
const body = document.body
const pageWrapper = document.querySelector('.main')
const header = document.querySelector('.header')
const firstScreen = document.querySelector('[data-observ]')
const burgerButton = document.querySelector('.icon-menu')
const menu = document.querySelector('.menu')
const lockPaddingElements = document.querySelectorAll('[data-lp]')


const toggleBodyLock = (isLock) => {
  FLS(`Попап ${isLock ? 'открыт' : 'закрыт'}`)
  const lockPaddingValue = window.innerWidth - pageWrapper.offsetWidth

  setTimeout(() => {
    if (lockPaddingElements) {
      lockPaddingElements.forEach((element) => {
        element.style.paddingRight = isLock ? `${lockPaddingValue}px` : '0px'
      })
    }
  
    body.style.paddingRight = isLock ? `${lockPaddingValue}px` : '0px'
    body.classList.toggle('lock', isLock)
  }, isLock ? 0 : 500)
}
// logger (Full Logging System) =================================================================================================================
function FLS(message) {
  setTimeout(() => (window.FLS ? console.log(message) : null), 0)
}

// Проверка браузера на поддержку .webp изображений =================================================================================================================
function isWebp() {
  // Проверка поддержки webp
  const testWebp = (callback) => {
    const webP = new Image()

    webP.onload = webP.onerror = () => callback(webP.height === 2)
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  }
  // Добавление класса _webp или _no-webp для HTML
  testWebp((support) => {
    const className = support ? 'webp' : 'no-webp'
    html.classList.add(className)

    FLS(support ? 'webp поддерживается' : 'webp не поддерживается')
  })
}

/* Проверка мобильного браузера */
const isMobile = {
  Android: () => navigator.userAgent.match(/Android/i),
  BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
  iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
  Opera: () => navigator.userAgent.match(/Opera Mini/i),
  Windows: () => navigator.userAgent.match(/IEMobile/i),
  any: () =>
    isMobile.Android() ||
    isMobile.BlackBerry() ||
    isMobile.iOS() ||
    isMobile.Opera() ||
    isMobile.Windows(),
}
/* Добавление класса touch для HTML если браузер мобильный */
function addTouchClass() {
  // Добавление класса _touch для HTML если браузер мобильный
  if (isMobile.any()) {
    html.classList.add('touch')
  }
}

// Добавление loaded для HTML после полной загрузки страницы
function addLoadedClass() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      html.classList.add('loaded')
    }, 0)
  })
}

// Получение хеша в адресе сайта
const getHash = () => {
  if (location.hash) {
    return location.hash.replace('#', '')
  }
}

// Указание хеша в адресе сайта
function setHash(hash) {
  hash = hash ? `#${hash}` : window.location.href.split('#')[0]
  history.pushState('', '', hash)
}

// Функция для фиксированной шапки при скролле =================================================================================================================
function headerFixed() {
  const headerStickyObserver = new IntersectionObserver(([entry]) => {
    header.classList.toggle('sticky', !entry.isIntersecting)
  })

  if (firstScreen) {
    headerStickyObserver.observe(firstScreen)
  }
}

// Универсальная функция для открытия и закрытия попапо =================================================================================================================
const togglePopupWindows = () => {
  document.addEventListener('click', ({ target }) => {
    if (target.closest('[data-type]')) {
      const popup = document.querySelector(
        `[data-popup="${target.dataset.type}"]`
      )

      if (document.querySelector('._is-open')) {
        document.querySelectorAll('._is-open').forEach((modal) => {
          modal.classList.remove('_is-open')
          document.querySelector('.header-burger').classList.remove('active')
        })
      }

      popup.classList.add('_is-open')
      toggleBodyLock(true)
    }

    if (
      target.classList.contains('_overlay-bg') ||
      target.closest('.button-close')
    ) {
      const popup = target.closest('._overlay-bg')

      popup.classList.remove('_is-open')
      document.querySelector('.header-burger').classList.remove('active')
      toggleBodyLock(false)
    }
  })
}

// Модуль работы с меню (бургер) =======================================================================================================================================================================================================================
const menuInit = () => {
  if (burgerButton) {
    document.addEventListener('click', ({ target }) => {
      if (target.closest('.icon-menu')) {
        html.classList.toggle('menu-open')
        toggleBodyLock(html.classList.contains('menu-open'))
      }
    })
  }
}
const menuOpen = () => {
  toggleBodyLock(true)
  html.classList.add('menu-open')
}
const menuClose = () => {
  toggleBodyLock(false)
  html.classList.remove('menu-open')
}


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
        Fancybox.bind('[data-fancybox="photos"]', {  });
        Fancybox.bind('[data-fancybox="photos-desktop"]', {  });
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
            nav = document.querySelector('.header-nav'),
            links = document.querySelectorAll('.header-nav__link')
        burger.addEventListener('click', () => {
            burger.classList.toggle('active')
            if(nav.classList.contains('_is-open')) {
                nav.classList.remove('_is-open')
            }else{
                if(!nav.classList.contains('_is-open')) nav.classList.add('_is-open')
            }
            toggleBodyLock(nav.classList.contains('_is-open'))
        })
        links.forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('active')
                nav.classList.remove('_is-open')
                toggleBodyLock(nav.classList.contains('_is-open'))
            })
        })
    }

    if(document.querySelector('input.phone')) {
        document.querySelectorAll('input.phone').forEach(input => {
            $(input).mask('+7 (999) 999-99-99')
        })
    }

    if(document.querySelector('.modal-form')) {
        let form = document.querySelector('.modal-form')
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            if(validateForm(form)) {
                alert('Ajax')
            }
        })
    }

    if(document.querySelector('.copyText')) {
        let copyButton = document.querySelector('.copyText')
        copyButton.addEventListener('click', () => {
            copyTextToClipboard(window.location.href)
        })
    }
});

$('a[href^="#"]').on("click", function (e) {
    let anchor = $(this);
    let offsetAnchor = 0
    if(window.innerWidth <= 768) offsetAnchor = 0
    let offset = document.documentElement.clientHeight * offsetAnchor / 929
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr("href")).offset().top - offset
    }, 700);
    e.preventDefault();
});

let copyTextToClipboard = (text, textMessage = 'Скопировано!') => {
    // Создаем временный элемент для копирования текста
    let tempInput = document.createElement('input'),
        message = document.querySelector('.message')
    tempInput.value = text;
    document.body.appendChild(tempInput);

    // Выделяем текст внутри временного элемента
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    try {
        // Копируем выделенный текст в буфер обмена
        document.execCommand('copy');

        // Визуальное подтверждение копирования (опционально)
        if(message) {
            message.classList.add('active')
            message.textContent = textMessage
        }
        setTimeout(() => {
            if(message) {
                message.classList.remove('active')
            }
        }, 3000)
    } catch (err) {
        console.error('Не удалось скопировать текст: ', err);
    }

    // Удаляем временный элемент
    document.body.removeChild(tempInput);
}


let validateForm = (form) => {
    let elements = form.elements;
    let isValid = true;

    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];

        if (element.tagName === 'INPUT' && element.hasAttribute('required')) {
            let parentFormGroup = element.closest('div');

            switch (element.type) {
                case 'email':
                    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(element.value.trim())) {
                        markAsError(parentFormGroup, 'Некорректно введены данные');
                        isValid = false;
                    } else {
                        removeError(parentFormGroup);
                    }
                    break;
                case 'tel':
                    let phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
                    console.log(element.value.trim())
                    if (!phoneRegex.test(element.value.trim())) {
                        markAsError(parentFormGroup, 'Некорректно введены данные');
                        isValid = false;
                    } else {
                        removeError(parentFormGroup);
                    }
                    break;
                case 'checkbox':
                    if (!element.checked) {
                        markAsError(parentFormGroup, 'Заполните поле');
                        isValid = false;
                    } else {
                        removeError(parentFormGroup);
                    }
                    break;
                default:
                    if (element.value.trim() === '') {
                        markAsError(parentFormGroup, 'Заполните поле');
                        isValid = false;
                    } else {
                        removeError(parentFormGroup);
                    }
            }
        }
    }

    return isValid;
};

let markAsError = (element, errorMessageSpan, message) => {
    element.classList.add('error');
    // errorMessageSpan.textContent = message;
}

let removeError = (element, errorMessageSpan) => {
    element.classList.remove('error');
    // errorMessageSpan.textContent = '';
}


// Паралакс мышей ========================================================================================
// const mousePrlx = new MousePRLX({})
// =======================================================================================================

// Фиксированный header ==================================================================================
headerFixed()
// =======================================================================================================

togglePopupWindows()
// =======================================================================================================

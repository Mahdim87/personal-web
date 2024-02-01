const navIconMobile = document.querySelector('.nav__icon-mobile')
const menuMobile = document.querySelector('.menu-mobile')
const cover = document.querySelector('.cover')
const resumeListItem = document.querySelectorAll(".resume-menu__item")
const optionItem = document.querySelectorAll(".portfolio-option__item")
const menuItem = document.querySelectorAll(".menu__item")
const sections = document.querySelectorAll(".main > section")
const btnTheme = document.querySelector('.btn-theme')
const iconDark = `<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" /></svg>`;
const iconLight = `<svg  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /></svg> `;


// ! theme
if(window.localStorage.getItem('theme')==='dark-theme'){
    document.documentElement.classList.add('dark-theme')
    btnTheme.innerHTML = iconDark
}

btnTheme.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark-theme')
    if (document.documentElement.classList.contains('dark-theme')) {
        btnTheme.innerHTML = iconDark
        window.localStorage.setItem('theme','dark-theme')

    }
    else {
        window.localStorage.setItem('theme','light-theme')

        btnTheme.innerHTML =iconLight;
    }
})




// ! observe section
const observer = new IntersectionObserver(observerHandler, {
    threshold: 0.35,
})
sections.forEach(section => {
    observer.observe(section)
    // console.log(12);
})


// ! menu- scroll to
menuItem.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        removeClass('menu__item--active')
        this.classList.add('menu__item--active')
        let sectionClass = item.getAttribute('data-item')
        let sectionOffset = document.querySelector(`.${sectionClass}`).offsetTop
        window.scrollTo({
            top: sectionOffset - 30,
            behavior: "smooth"

        })
    })
})

// ! listener mobile
navIconMobile.addEventListener('click', function () {
    this.classList.toggle('nav__icon-mobile--open')
    menuMobile.classList.toggle('menu-mobile--open')
    cover.classList.toggle('cover--active')
    // console.log('ok')
})

// ! functions
function observerHandler(allSections) {
    allSections.map(section => {
        let sectionClassName = section.target.className
        // console.log(sectionClassName)
        let selectClassItem = document.querySelector(`.menu__item[data-item=${sectionClassName}]`)

        if (section.isIntersecting) {
            // console.log('mano')
            selectClassItem.classList.add("menu__item--active")
        }
        else {
            selectClassItem.classList.remove("menu__item--active")
        }
    })
}

function runfunction(itemsActive, itemActive, contentActive, itemAttribute) {
    itemsActive.forEach(itemsActive => {
        itemsActive.addEventListener('click', function () {
            removeClass(itemActive)
            removeClass(contentActive)
            // document.querySelector(`.${itemActive}`).classList.remove(itemActive)
            // document.querySelector(`.${contentActive}`).classList.remove(contentActive)
            this.classList.add(itemActive)
            let contentId = this.getAttribute(itemAttribute)
            document.querySelector(contentId).classList.add(contentActive)
        })
    })
}

function removeClass(className) {
    document.querySelector(`.${className}`).classList.remove(className)
}
runfunction(resumeListItem, 'resume-menu__item--show', 'wrapper-article-parts--show', 'data-content-id')
runfunction(optionItem, 'portfolio-option__item--active', 'portfolio__slider--show', 'slider-content-id')





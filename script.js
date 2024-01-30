const navIconMobile = document.querySelector('.nav__icon-mobile')
const menuMobile = document.querySelector('.menu-mobile')
const cover = document.querySelector('.cover')
const resumeListItem = document.querySelectorAll(".resume-menu__item")
const optionItem = document.querySelectorAll(".portfolio-option__item")



navIconMobile.addEventListener('click',function(){
    this.classList.toggle('nav__icon-mobile--open')
    menuMobile.classList.toggle('menu-mobile--open')
    cover.classList.toggle('cover--active')
    // console.log('ok')
})
function runfunction(itemsActive,itemActive,contentActive,itemAttribute){
    itemsActive.forEach(itemsActive =>{
        itemsActive.addEventListener('click',function(){
            document.querySelector(`.${itemActive}`).classList.remove(itemActive)
            document.querySelector(`.${contentActive}`).classList.remove(contentActive)
            this.classList.add(itemActive)
            let contentId = this.getAttribute(itemAttribute)
            document.querySelector(contentId).classList.add(contentActive)})})  
}
runfunction(resumeListItem,'resume-menu__item--show','wrapper-article-parts--show','data-content-id')
runfunction(optionItem,'portfolio-option__item--active','portfolio__slider--show','slider-content-id')

const sideNavigation = document.querySelector(".side-navigation");
const main = document.querySelector('main');

changeWidth();
window.onresize = changeWidth;

function changeWidth() {
    main.style.marginLeft = `${sideNavigation.clientWidth}px`;
}
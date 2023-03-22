const sideNavigation = document.querySelector(".side-navigation");
const main = document.querySelector('main');

window.onresize = changeWidth;

function changeWidth() {
    main.style.marginLeft = `${sideNavigation.clientWidth}px`;
}
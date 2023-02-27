const sideNavigation = document.querySelector(".side-navigation");
const main = document.querySelector('main');

let widthSideNavigation = sideNavigation.clientWidth;

main.style.marginLeft = `${widthSideNavigation}px`;
const sideNavigation = document.querySelector(".side-navigation");
const main = document.querySelector('main');

let widthSideNavigation = sideNavigation.clientWidth;
let comp = 0;
// if (widthSideNavigation<850) comp = 

main.style.marginLeft = `${widthSideNavigation}px`;

console.log(widthSideNavigation);
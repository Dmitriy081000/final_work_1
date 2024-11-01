let burger = document.getElementById("burger");
console.log(burger);
let navbarlist = document.getElementById("navbarlist");
console.log(navbarlist);

burger.addEventListener('click', function(){
    burger.classList.toggle("active");
    navbarlist.classList.toggle("nav--active");
});
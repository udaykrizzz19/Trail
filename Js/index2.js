
var loader =document.getElementById("preloader");
window.addEventListener("load",function()
{
  loader.style.display = "none";
})



/*=============== SEARCH BAR JS ===============*/
const toggleSearch = (search, button) =>{
    const searchBar = document.getElementById(search),
          searchButton = document.getElementById(button)
 
    searchButton.addEventListener('click', () =>{
        // We add the show-search class, so that the search bar expands
        searchBar.classList.toggle('show-search')
    })
 }
 toggleSearch('search-bar', 'search-button')

 

 // custom cursor
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]")
window.addEventListener("mousemove", function(e) {

const posX = e.clientX;
const posY = e.clientY;     
cursorDot.style.left = `${posX}px`;
cursorDot.style.top = `${posY}px`;

cursorOutline.animate(
  {
    left:`${posX}px`,
    top : `${posY}px`
  },
  {duration: 500,fill: "forwards"});

})
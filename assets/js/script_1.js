var toggler = document.getElementById("toggle-container");
var toggleContents = document.getElementById("toggle-content");
document.addEventListener("click", function(){ 
     toggleContents.classList.toggle("displayed");
});
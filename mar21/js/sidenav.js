var navBtn = document.getElementById('navBtn');
// target element by declare variable
// navBtn.style.color = "red";
// navBtn.style.fontSize = "32px";

navBtn.addEventListener("click", showNav);

function showNav() {
    navBtn.classList.toggle("active");
    nav.classList.toggle("viewNav");
}

navBtn.addEventListener()
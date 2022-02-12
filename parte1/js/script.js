function openButton() {
    var menu = document.getElementsByClassName('menu-mobile')[0].style.display = "flex";
}

function closeButton() {
    var menu = document.getElementsByClassName('menu-mobile')[0].style.display = "none";
}

function gotoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
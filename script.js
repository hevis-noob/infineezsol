function toggleMenu() {
    document.querySelector('.menu').classList.toggle('show');
}

function toggleSubmenu(id) {
    let element = document.getElementById(id);
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

document.getElementById("hamburger-icon").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});
                
function change_nav() {
    var bar = document.getElementById("navbar");
    if (bar.classList.contains("responsive")) {
        bar.classList.remove("responsive");
    } else {
    bar.classList.add("responsive");
    }
    return;
}
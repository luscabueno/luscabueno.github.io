window.addEventListener('scroll', function() {
    let elem = document.getElementById("header_filter");
    let elemShow = document.getElementById("header_filter_s");
    let rect = elem.getBoundingClientRect();

    if (rect.bottom < 0) {
        elemShow.style.display = "flex";
    } else {
        elemShow.style.display = "none";
    }
})
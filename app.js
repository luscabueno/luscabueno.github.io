window.addEventListener('scroll', function() {
    let elemRead = document.getElementById("header_filter");
    let elemShow = document.getElementById("header_filter_s");
    let rect = elemRead.getBoundingClientRect();

    if (rect.bottom < convertRemToPixels(4)) {
        elemShow.style.display = "flex";
    } else {
        elemShow.style.display = "none";
    }
})

function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
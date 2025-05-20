// lucide icons
lucide.createIcons();

// access element
let lateralNav = document.getElementById("lateral_nav");

// open lateral nav
function lateralNavOpen() {
    lateralNav.style.display = "flex";
}

// close lateral nav
function lateralNavClose() {
    lateralNav.style.display = "none";
}

selectItemInputs = document.querySelectorAll(".select--item input");

selectItemInputs.forEach(input => {
    input.addEventListener('click', event => {
        // obtain input name
        const selectName = input.name;

        // change .select value
        const selectValue = document.getElementById(`select_${selectName}_value`);
        selectValue.innerHTML = input.dataset.label

        // close .select
        const isMouseOrTouch =
        event.pointerType == "mouse" ||
        event.pointerType == "touch";

        const selectExpand = document.getElementById(`select_${selectName}_expand`);
        isMouseOrTouch && selectExpand.click();
    })
})
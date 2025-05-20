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

// close .select

let select = document.querySelector(".select"),
selectedValue = document.getElementById("selected_value"),
inputsOption = document.querySelectorAll(".select--item input");

inputsOption.forEach(input => {
    input.addEventListener('click', event => {
        // obtain input name
        const selectName = input.name;

        const selectValue = document.getElementById(`select_${selectName}_value`);
        selectValue.innerHTML = input.dataset.label

        const isMouseOrTouch =
        event.pointerType == "mouse" ||
        event.pointerType == "touch";

        const selectExpand = document.getElementById(`select_${selectName}_expand`);
        isMouseOrTouch && selectExpand.click();
    })
})
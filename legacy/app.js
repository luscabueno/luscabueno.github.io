// icon libraries ------------------------------------------------------------------------------------------------------------------------------------------------------

    // lucide icons
    lucide.createIcons();

    // feather icons
    feather.replace();

// lateral nav ---------------------------------------------------------------------------------------------------------------------------------------------------------

// obtain lateral nav
let lateralNav = document.getElementById("lateral_nav");

// open lateral nav
function lateralNavOpen() {
    lateralNav.style.display = "flex";
}

// close lateral nav
function lateralNavClose() {
    lateralNav.style.display = "none";
}

// .select -------------------------------------------------------------------------------------------------------------------------------------------------------------

// open
selectButtons = document.querySelectorAll('.select--button button');

selectButtons.forEach(button => {
    button.addEventListener('click', event => {
        // ul
        const selectList = button.closest('.select--button').querySelector('ul');
        const selectListAll = document.querySelectorAll('.select--button ul');
        const selectListSiblings = Array.from(selectListAll).filter(element => element != selectList);
            // close siblings
            removeAll(selectListSiblings, 'show');
            // open/close
            if (selectList.classList.contains('show')) {
                selectList.classList.remove('show');
            } else {
                selectList.classList.add('show');
            }
    })
})

// choose
selectItems = document.querySelectorAll('.select--item input');

selectItems.forEach(input => {
    input.addEventListener('click', event => {
        // .select--value
        const selectValue = input.closest('.select--button').querySelector('.select--value');
            // change value
            selectValue.innerHTML = input.dataset.label;

        // ul
        const selectList = input.closest('.select--button').querySelector('ul');
            // close
            selectList.classList.remove('show');
    })
})

// close
window.addEventListener('click', event => {
    // ul
    const selectListAll = document.querySelectorAll('.select--button ul');
        // close
        if (!event.target.closest('.select--button')) {
            removeAll(selectListAll, 'show')
        }
})

// global --------------------------------------------------------------------------------------------------------------------------------------------------------------

function removeAll(group, className) {
    for (i = 0; i < group.length; i++) {
        if (group[i].classList.contains(className)) {
            group[i].classList.remove(className);
        }
    }
}

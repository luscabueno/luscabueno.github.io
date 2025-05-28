// icon libraries
    // lucide icons
    lucide.createIcons();

    // feather icons
    feather.replace();

// open .select
selectButtons = document.querySelectorAll('.select--button button');

selectButtons.forEach(button => {
    button.addEventListener('click', event => {
        // close other .select
        const selectLists = document.getElementsByClassName('select--list');
        for (i = 0; i < selectLists.length; i++) {
            if (selectLists[i].classList.contains('show')) {
                selectLists[i].classList.remove('show');
            }
        }

        // obtain .select name
        const selectName = button.id.split("_")[2];

        // open .select--list
        const selectList = document.getElementById(`select_list_${selectName}`);
        if (selectList.classList.contains('show')) {
            selectList.classList.remove('show')
        } else {
            selectList.classList.add('show');
        }
    })
})

// choose .select
selectItemInputs = document.querySelectorAll('.select--item input');

selectItemInputs.forEach(input => {
    input.addEventListener('click', event => {
        // obtain .select name
        const selectName = input.name;

        // change .select value
        const selectValue = document.getElementById(`select_value_${selectName}`);
        selectValue.innerHTML = input.dataset.label

        // close .select--list
        const selectList = document.getElementById(`select_list_${selectName}`);
        selectList.classList.remove('show');
    })
})

// cancel .select
window.addEventListener('click', event => {
    const selectLists = document.getElementsByClassName('select--list');

    if (!event.target.closest('.select--button')) {
        for (i = 0; i < selectLists.length; i++) {
            if (selectLists[i].classList.contains('show')) {
                selectLists[i].classList.remove('show');
            }
        }
    }
})

// open .overlay and .popup
popupButtons = document.querySelectorAll('.popup--button button');

popupButtons.forEach(button => {
    button.addEventListener('click', event => {
        // obtain .popup name
        const popupName = button.id.split("_")[2];

        // open .overlay
        const overlay = document.getElementById('overlay');
        overlay.classList.add('show');

        // open .popup
        const popup = document.getElementById(`popup_${popupName}`);
        popup.classList.add('show');
    })
})

// close .overlay and .popup
popupButtonsClose = document.querySelectorAll('.popup--button--close button');

popupButtonsClose.forEach(button => {
    button.addEventListener('click', event => {
        const popup = button.closest('.popup');
        popup.classList.remove('show');

        const overlay = document.getElementById('overlay');
        overlay.classList.remove('show');
    })
})

// switch .pop--body
tabButtons = document.querySelectorAll('.tabsheet--button button');

tabButtons.forEach(button => {
    button.addEventListener('click', event => {
        // close other .popup--body
        const popupBodies = document.getElementsByClassName('popup--body');
        for (i = 0; i < popupBodies.length; i++) {
            if (popupBodies[i].classList.contains('show')) {
                popupBodies[i].classList.remove('show');
            }
        }

        // obtain .popup--body name
        const popupBodyName = button.id.split('_')[2];

        // open .popup--body
        const popupBody = document.getElementById(`popup_body_${popupBodyName}`);
        popupBody.classList.add('show');
    })
})
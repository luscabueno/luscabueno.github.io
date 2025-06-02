// icon libraries
    // lucide icons
    lucide.createIcons();

    // feather icons
    feather.replace();

// .select -------------------------------------------------------------------------------------------------------------------------------------------------------------

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

// .popup --------------------------------------------------------------------------------------------------------------------------------------------------------------

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

// .tabsheet -----------------------------------------------------------------------------------------------------------------------------------------------------------

// switch .tabsheet .tab, .popup--body
popupTabButtons = document.querySelectorAll('.popup #tabsheet_main .tabsheet--button button');

popupTabButtons.forEach(button => {
    button.addEventListener('click', event => {
        // close other .popup--body
        const popupBodies = document.querySelectorAll('.popup--body');
        for (i = 0; i < popupBodies.length; i++) {
            if (popupBodies[i].classList.contains('show')) {
                popupBodies[i].classList.remove('show');
            }
        }

        // inactivate other .tab
        const tabsheetButtons = document.querySelectorAll('.popup #tabsheet_main .tabsheet--button');
        for (i = 0; i < tabsheetButtons.length; i++) {
            if (tabsheetButtons[i].classList.contains('active')) {
                tabsheetButtons[i].classList.remove('active');
            }
        }

        // obtain .popup--body name
        const popupBodyName = button.id.split('_')[2];

        // open .popup--body
        const popupBody = document.getElementById(`popup_body_${popupBodyName}`);
        popupBody.classList.add('show');

        // activate .tab
        const tabsheetButton = button.closest('.tabsheet--button');
        tabsheetButton.classList.add('active');

        // inactivate other .tabsheet--sub
        const tabsheetSubs = document.querySelectorAll('.tabsheet--sub');
        for (i = 0; i < tabsheetSubs.length; i++) {
            if (tabsheetSubs[i].classList.contains('show')) {
                tabsheetSubs[i].classList.remove('show');
            }
        }

        // open .tabsheet--sub
        const tabsheetSub = document.getElementById(`tabsheet_sub_${popupBodyName}`);
        tabsheetSub.classList.add('show');
    })
})

// .tabsheet--sub ------------------------------------------------------------------------------------------------------------------------------------------------------

// .switch .tabsheet--sub .tab, .popup--body--sub
popupSubTabButtons = document.querySelectorAll('.popup .tabsheet--sub .tabsheet--button button');

popupSubTabButtons.forEach(button => {
    button.addEventListener('click', event => {
        // close other .popup--body--sub
        const popupBodiesSub = document.querySelectorAll('.popup--body--sub');
        for (i = 0; i < popupBodiesSub.length; i++) {
            if (popupBodiesSub[i].classList.contains('show')) {
                popupBodiesSub[i].classList.remove('show');
            }
        }

        // inactivate other .tab
        const tabsheetButtons = document.querySelectorAll('.popup .tabsheet--sub .tabsheet--button');
        for (i = 0; i < tabsheetButtons.length; i++) {
            if (tabsheetButtons[i].classList.contains('active')) {
                tabsheetButtons[i].classList.remove('active');
            }
        }

        // obtain .popup--body name
        const popupBodySubName = button.id.split('_')[2];

        // open .popup--body--sub
        const popupBodySub = document.getElementById(`popup_body_sub_${popupBodySubName}`);
        popupBodySub.classList.add('show');

        // activate .tab
        const tabsheetButton = button.closest('.tabsheet--button');
        tabsheetButton.classList.add('active');
    })
})

// .popup--l2 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// open .overlay--l2 and .popup--l2
popupL2Buttons = document.querySelectorAll('.popup--l2--button button');

popupL2Buttons.forEach(button => {
    button.addEventListener('click', event => {
        // obtain .popup--l2 name
        const popupL2Name = button.id.split("_")[3];

        // open .overlay--l2
        const overlayL2 = document.getElementById('overlay_l2');
        overlayL2.classList.add('show');

        // open .popup--l2
        const popupL2 = document.getElementById(`popup_l2_${popupL2Name}`);
        popupL2.classList.add('show');
    })
})

// close .overlay--l2 and .popup--l2
popupL2ButtonsClose = document.querySelectorAll('.popup--l2--button--close button');

popupL2ButtonsClose.forEach(button => {
    button.addEventListener('click', event => {
        const popupL2 = button.closest('.popup--l2');
        popupL2.classList.remove('show');

        const overlayL2 = document.getElementById('overlay_l2');
        overlayL2.classList.remove('show');
    })
})

// .enabler (WIP)-------------------------------------------------------------------------------------------------------------------------------------------------------

// show and hide .conditional--field (speculative-only cause there are a ton of variables to consider with this function)
checkboxEnablers = document.querySelectorAll('.checkbox--enabler');

checkboxEnablers.forEach(function(element) {
    element.addEventListener('change', event => {
        // obtain .conditional--field name
        const conditionalFieldName = element.id.split('_')[1];

        // show or hide .conditional--field
        const conditionalField = document.getElementById(`conditional_field_${conditionalFieldName}`);
        if (element.checked) {
            conditionalField.classList.add('show');
        } else {
            conditionalField.classList.remove('show');
        }
    })
})

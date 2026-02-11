const dialog = document.querySelector("dialog.project");
const showDialog = document.querySelector(".show-test-dialog");
const closeDialog = document.querySelector(".close-test-dialog");

showDialog.addEventListener("click", () => {
    dialog.showModal();
})

closeDialog.addEventListener("click", () => {
    dialog.close();
})

// Pool
let friendList = [];
let friendListText = document.getElementById('lista-amigos');
// Result
let friendPairing = [];
let friendPairingText = document.getElementById('lista-sorteio');

function addFriend() {
    // Obtain
    let friendName = document.getElementById('nome-amigo');
    let friendIndex = friendList.findIndex(element => element == friendName.value);

    // Rejection message
    let rejectionMessage =
    friendName.value == '' ? 'Please enter a valid name.'
    : friendIndex != -1 ? 'Name is already registered. Enter a different name.'
    : '';
    // Rejection
    if (friendName.value == '' || friendIndex != -1) {
        alert(rejectionMessage);
        return;
    }

    // Add
    friendList.push(friendName.value);

    // Print
    friendListText.innerHTML = `${friendList.join(", ")}.`;

    // Reset input
    friendName.value = '';
}

function sortFriend() {
    // Rejection message
    let rejectionMessage =
    friendList.length < 2 ? 'Insert at least 2 names.'
    : !Number.isInteger(friendList.length / 2) ? 'Insert an even number of names.'
    : 'null';
    // Rejection
    if (friendList.length < 2 || !Number.isInteger(friendList.length / 2)) {
        alert(rejectionMessage);
        return;
    }

    // Reset result
    friendPairing = [];
    friendPairingText.innerHTML = '';

    // Sort order
    for (i = friendList.length; i > 0; i--) {
        let randomIndex = parseInt(Math.random() * i);
        [friendList[i - 1], friendList[randomIndex]] = [friendList[randomIndex], friendList[i - 1]];
    }
    // Sort pairing
    for (i = 0; i < (friendList.length - 1); i++) {
        friendPairing.push(`${friendList[i]} --> ${friendList[i + 1]}`);
    }
    friendPairing.push(`${friendList[friendList.length - 1]} --> ${friendList[0]}`);

    // Print
    friendPairingText.innerHTML = friendPairing.join('<br>');
}

function reset() {
    // Reset pool
    friendList = [];
    friendListText.innerHTML = '';
    // Reset result
    friendPairing = [];
    friendPairingText.innerHTML = '';
}
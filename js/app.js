let cartItems = ['1 - Celular - R$1400'];
let cartList = document.getElementById('lista-produtos');
let cartTotal = document.getElementById('valor-total');

clearCart();

function addProduct() {
    // Obtain input
    let product = document.getElementById('produto').value;
    let productName = product.split(' - R$')[0];
    let productPrice = product.split(' - R$')[1];
    let productQuantity = parseInt(document.getElementById('quantidade').value);
    let productSubtotal = productPrice * productQuantity;

    // Reject invalid input
    if (productQuantity == '' || isNaN(productQuantity)) {
        alert('Insert a valid product quantity.')
        return;
    }

    // Obtain index
    let productIndex = cartItems.findIndex(element => element.includes(productName));
    // Add item
    if (productIndex == -1) {
        // Array
        cartItems.push(`${productQuantity} - ${productName} - R$${productSubtotal}`);
        // List
        let productItem = document.createElement('section');
        productItem.classList.add('carrinho__produtos__produto');
        productItem.setAttribute('id', `cart-${product}`);
        productItem.innerHTML = `<span class="texto-azul">${productQuantity}x</span> ${productName} <span class="texto-azul">R$${productPrice}</span>`;
        cartList.appendChild(productItem);
    // Update item
    } else {
        // Array
        let productCurrentPrice = parseInt(cartItems[productIndex].split(' - R$')[1]);
        let productCurrentQuantity = parseInt(cartItems[productIndex].split(' - ')[0]);
        cartItems.splice(productIndex, 1);
        let productNewPrice = productCurrentPrice + productSubtotal;
        let productNewQuantity = productCurrentQuantity + productQuantity;
        cartItems.push(`${productNewQuantity} - ${productName} - R$${productNewPrice}`);
        // List
        let productItem = document.getElementById(`cart-${product}`);
        productItem.innerHTML = `<span class="texto-azul">${productNewQuantity}x</span> ${productName} <span class="texto-azul">R$${productPrice}</span>`;
    }

    // Total
    let cartSum = 0;
    for (i = 0; i < cartItems.length; i++) {
        cartSum += parseInt(cartItems[i].split(' - R$')[1]);
    }
    cartTotal.innerHTML = `R$${cartSum}`;

    // Reset quantity
    document.getElementById('quantidade').value = '';

    // Debug
    alert(cartItems);
}

function clearCart() {
    // Array
    cartItems = [];

    // List
    cartList.innerHTML = '';

    // Total
    cartTotal.innerHTML = `R$0`;
}
function calcularPrecioConDescuento(precio, descuento) {
    const procentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * procentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

// Interactuando con HTML:
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById('inputPrice');
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById('inputDiscount');
    let discountValue = inputDiscount.value;
    if (discountValue == "desc-ami") {
        discountValue = 15;
    } else if (discountValue == "desc-par") {
        discountValue = 20;
    } else {
        discountValue = 0;
    }

    const discountPrice = calcularPrecioConDescuento(priceValue, discountValue);
    
    const result= document.getElementById('resultPrice');
    result.innerText = 'El precio con descuento es de: $' + discountPrice;
}


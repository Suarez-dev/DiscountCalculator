 
 //(precio * (100 - descuento))/100



 // descuento en funciones

 function calcularPrecioConDescuento (precio, descuento) {

  const precioConDescuento =  (precio * (100 - descuento))/100;

    return precioConDescuento;

 }

function pagare(){
    const inputPrice = document.getElementById("inputprice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputdiscount");

    const discountValue = inputDiscount.value;

   const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

   const final = document.getElementById("finalprice");

 final.innerHTML = "El precio es de " +precioConDescuento;
}
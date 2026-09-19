


const porcentajeDescuento = 15;
const politicaDescuento = 2;

const formulario = document.querySelector("#formFactura");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const inputCantidad = document.querySelector("#inputCantidad")
    const inputprecioUnitario = document.querySelector("#inputPrecio")

    const cantidad = Number(inputCantidad.value);
    const precioUnitario = Number(inputprecioUnitario.value);

    const descuento = calcularDescuento(precioUnitario, porcentajeDescuento, cantidad);
    const totalCompra = calcularTotalCompra(precioUnitario, cantidad);

    const labelDescuento = document.querySelector("#labelDescuento");
    const labelTotal = document.querySelector("#labelTotal");

    labelDescuento.textContent = "Descuento: $" + descuento;
    labelTotal.textContent = "Total: $" + totalCompra;
});

function calcularTotalCompra(precioUnitario,cantidad) {
    const totalCompra = precioUnitario * cantidad;
    return totalCompra
}

function calcularDescuento(precio, porcentaje, cantidad) {

    if (politicaDescuento === cantidad) {
        const descuento = (precio * porcentaje) / 100;
        return precio - descuento;
    }
    else return precio;
}


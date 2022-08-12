const inputPrice = document.querySelector("#price");
const inputDiscount = document.querySelector("#discount");
const btn = document.querySelector("#calcular");
const pResult = document.querySelector("#result");
const coupon = document.querySelector("#coupon");
const couponBtn = document.querySelector("#couponBtn");

btn.addEventListener("click", calcularPrecioConDescuento);
couponBtn.addEventListener("click", cuponDescuento);

function calcularPrecioConDescuento(price, discount) {
//   const price = Number(inputPrice.value);
//   const discount = Number(inputDiscount.value);

  if (!price || !discount) {
    console.log(price, discount);
    pResult.innerText = "Por favor llena el formulario";
    return;
  }

  if (discount > 100) {
    pResult.innerText = "No puede ser mayor a 100%";
    return;
  }
  const newPrice = (price * (100 - discount)) / 100;

  pResult.innerText = "El nuevo precio con descuento es $" + newPrice;
}

const cupones = [
  { clave: "BASICO", valor: 15 },
  { clave: "MEDIO", valor: 30 },
  { clave: "SUPER", valor: 50 },
];

function cuponDescuento() {
  const inputCoupon = coupon.value;
  const price = Number(inputPrice.value);

  const validation = cupones.map(function (cupones) {
    switch (inputCoupon) {
      case "BASICO":
        calcularPrecioConDescuento(price, 15)
        break;
      case "MEDIO":
        calcularPrecioConDescuento(price, 30)
        break;
      case "SUPER":
        calcularPrecioConDescuento(price, 50)
        break;
      default:
        console.log("NO EXISTE EL CUPON");
        break;
    }
  });
}

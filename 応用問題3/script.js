btn.addEventListener("click", () => {
  const name = document.forms.product.productName.value;
  const price = document.forms.product.productPrice.value;
  let total = price * 1.08;
  console.log(`${name}は税込み${total}円です。`);

  if (total >= 1000) {
    console.log(`${name}は高いので買うのをやめます。`);
  }
});

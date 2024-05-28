btn.addEventListener("click", () => {
  const name = document.forms.product.productName.value;
  const price = document.forms.product.productPrice.value;
  console.log(`${name}は税込み${price}円です。`);

  if (price >= 1000) {
    console.log(`${price}円は高いので買うのをやめます。`);
  }
});

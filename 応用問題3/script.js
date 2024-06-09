btn.addEventListener("click", () => {
  const name = document.forms.product.productName.value;
  const price = document.forms.product.productPrice.value;
  let isValidationNameNg = name.trim() === "";
  let isValidationPriceNg = price.trim() === "";
  //バリデーションチェック;
  if (isValidationNameNg) {
    const productNameError = document.getElementById("productNameError");
    productNameError.innerHTML = "名前を入力してください";
  } else {
    productNameError.innerHTML = "";
  }
  if (isValidationPriceNg) {
    const productPriceError = document.getElementById("productPriceError");
    productPriceError.innerHTML = "価格を入力してください";
  }
  //  else if (name.trim() === "") {
  //   const productNameError = document.getElementById("productNameError");
  //   productNameError.innerHTML = "名前を入力してください";
  // } else {
  //   productPriceError.innerHTML = "";

  //   let total = price * 1.08;
  //   console.log(`${name}は税込み${total}円です。`);

  //   if (total >= 1000) {
  //     console.log(`${name}は高いので買うのをやめます。`);
  //   }
  // }
  else {
    productPriceError.innerHTML = "";
  }
  if (!isValidationNameNg && !isValidationPriceNg) {
    let total = price * 1.08;
    console.log(`${name}は税込み${total}円です。`);

    if (total >= 1000) {
      console.log(`${name}は高いので買うのをやめます。`);
    }
  }
});

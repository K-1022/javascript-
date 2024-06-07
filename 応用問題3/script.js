btn.addEventListener("click", () => {
  const name = document.forms.product.productName.value;
  const price = document.forms.product.productPrice.value;

  // バリデーションチェック
  if (name.trim() === "") {
    const productNameError = document.getElementById("productNameError");
    productNameError.innerHTML = "名前を入力してください";
  } else {
    productNameError.innerHTML = "";

    if (price.trim() === "") {
      const productPriceError = document.getElementById("productPriceError");
      productPriceError.innerHTML = "価格を入力してください";
    } else {
      productPriceError.innerHTML = "";

      let total = price * 1.08;
      console.log(`${name}は税込み${total}円です。`);

      if (total >= 1000) {
        console.log(`${name}は高いので買うのをやめます。`);
      }
    }
  }
});

// 関数を使ってまとめた
const calcTaxIncludedPrice = (product) => {
  for (let i = 0; i <= 2; i++) {
    const f = product[i];
    //console.log(fruit[i].name);
    //console.log(fruit[i].price);
    let g = product[i].price;
    let name = product[i].name;
    let total = g * 1.08;
    console.log(name + "は税込み" + total + "円です。");

    if (total >= 1000) {
      console.log(`${name}高いので買うのをやめます。`);
    }
    // TODO:2000円の処理未対応
  }
};
const fruit = [
  { name: "りんご", price: 100 },
  { name: "バナナ", price: 500 },
  { name: "レモン", price: 950 },
];
// 関数をfruitで出力
calcTaxIncludedPrice(fruit);

// for (let i = 0; i <= 2; i++) {
//   const f = fruit[i];
//   //console.log(fruit[i].name);
//   //console.log(fruit[i].price);
//   let g = fruit[i].price;
//   let name = fruit[i].name;
//   let total = g * 1.08;
//   console.log(name + "は税込み" + total + "円です。");

//   if (total >= 1000) {
//     console.log(`${name}高いので買うのをやめます。`);
//   }
//   // TODO:2000円の処理未対応
// }
const vegetables = [
  { name: "人参", price: 300 },
  { name: "キャベツ", price: 750 },
  { name: "じゃがいも", price: 980 },
];
// 関数をvegetablesで出力
calcTaxIncludedPrice(vegetables);

// for (let i = 0; i <= 2; i++) {
//   const f = vegetables[i];
//   //console.log(vegetables[i].name);
//   //console.log(vegetables[i].price);
//   let g = vegetables[i].price;
//   let name = vegetables[i].name;
//   let total = g * 1.08;
//   console.log(name + "は税込み" + total + "円です。");

//   if (total >= 1000) {
//     console.log(`${name}高いので買うのをやめます。`);
//   }
// }

// - vegetables という「name, price」を持っている object の配列を作成
// - vegetables には下記を代入する
// - name: 人参, price: 300
// - name: キャベツ, price: 750
// - name: じゃがいも, price: 980
// - ループ（繰り返し処理）して、「〇〇は税込み XX 円です。」と表示する
// - 税込み価格が 1000 円を超えたら、「〇〇は高いので買うのをやめます。」と表示する
// - fruits からコピーできるところはコピーして OK
// - 作成できたら共通している処理を関数化する

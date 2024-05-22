const fruit = [
  { name: "りんご", price: 100 },
  { name: "バナナ", price: 500 },
  { name: "レモン", price: 950 },
];
for (let i = 0; i <= 2; i++) {
  const f = fruit[i];
  //console.log(fruit[i].name);
  //console.log(fruit[i].price);
  let g = fruit[i].price;
  let name = fruit[i].name;
  let total = g * 1.08;
  console.log(name + "は税込み" + total + "円です。");

  if (total >= 1000) {
    console.log(name + "高いので買うのをやめます。");
  }
}

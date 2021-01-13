const main = document.querySelector("main");

// load時createDivs内の処理を実行する
window.addEventListener("load" ,createDivs);

// // 複数回createDivする
// function createDivs() {
//   // １回目のループは🍦がitemに入る
//   // ２回目のループ時は🍨がitemに入る
//   // 3,4,5上に同じ
//   ["🍦", "🍨", "🎅", "🎄", "👌"].forEach(function (item) {
//     createDiv();
//   });
// }

function createDivs() {
  const items = [
    {drinkName: "抹茶フラペチーノ", drinkMenu: "ショット追加", drinkPrice: "¥380"},
    {drinkName: "アールグレイティーラテ" ,drinkMenu: "オールミルク", drinkPrice: "¥330"},
    {drinkName: "ゆずシトラスティー" ,drinkMenu: "シロップ少なめ", drinkPrice: "¥560"}
  ];

  items.forEach(function (item) {
    createDiv(item);
  });
}

// createDivという名前の処理
function createDiv (item) {
  console.log(item);
  // DOM(html要素)を作る 今回だとdivタグを生成
  const div = document.createElement("div");
  div.className = "card";

  const drinkName = document.createElement("p");
  drinkName.className = "content-1";
  drinkName.textContent = item.drinkName;

  const drinkMenu = document.createElement("ul");
  drinkMenu.className = "content-2";
  drinkMenu.textContent = item.drinkMenu;
  const drinkMenu2 = document.createElement("li");

  const drinkPrice = document.createElement("div");
  drinkPrice.className = "content-3";
  drinkPrice.textContent = item.drinkPrice;

  // divの中に名前とドリンクメニューとプライスをいれる
  div.appendChild(drinkName);
  div.appendChild(drinkMenu);
  drinkMenu.appendChild(drinkMenu2);
  div.appendChild(drinkPrice);
  main.appendChild(div);
  
};
const main = document.querySelector("main");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

const items = [
  {drinkName: "抹茶フラペチーノ", drinkMenu: "ショット追加", drinkPrice: "¥380"},
  {drinkName: "アールグレイティーラテ" ,drinkMenu: "オールミルク", drinkPrice: "¥330"},
  {drinkName: "ゆずシトラスティー" ,drinkMenu: "シロップ少なめ", drinkPrice: "¥560"}
];

// async function addDiv() {

// }

async function createDivs() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const items = await res.json();
    items.forEach(function (item) {
      const div = createDiv(item);
      main.appendChild(div);
    });
  } catch (error) {
    console.log(error);
    // sendLog(error)
    main.textContent="読み込みに失敗しましたm(_ _)m"
  }
}

// createDivという名前の処理
function createDiv (item) {
  // console. log(item); 
  // DOM(html要素)を作る 今回だとdivタグを生成
  const div = document.createElement("div");
  div.className = "card";
  
  const title = document.createElement("p");
  title.className = "content-1";
  title.textContent = item.title;
  
  const body = document.createElement("div");
  body.className = "content-2";
  body.textContent = item.body;
  
  // divの中に名前とドリンクメニューとプライスをいれる
  div.appendChild(title);
  div.appendChild(body);
  // main.appendChild(div);
  return div;
};

// load時createDivs内の処理を実行する
window.addEventListener("load" ,createDivs);

// button押下時の処理
button.addEventListener("click", async function() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      // オブジェクとを文字列に変換するのがstringify ~fyは〜化する
      body: JSON.stringify({
        title: input.value,
        body: textarea.value,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        "Authorization": ""
      },
    });
    const data = await res.json();
    const div = createDiv(data);
    main.prepend(div);
  } catch (error) {
    alert("投稿に失敗しましたm(_ _)m");
  }
});
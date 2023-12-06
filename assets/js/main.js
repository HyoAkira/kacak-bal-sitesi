let p = document.querySelector("#metinler>p");

let data = [
  "Biz Can Arıcılık olarak, arılarımızın emeği ve doğanın bize sunduğu zenginlikleri sofranıza taşıyan bir aileyiz. Yılların getirdiği birikim ve tecrübe ile ürettiğimiz kaliteli bal ve diğer arı ürünleri ile sofralarınıza doğallık ve sağlık katıyoruz.",
  "Arılarımız, çiçeklerin en zarif dansçılarıdır. Seçkin çiçeklerden topladıkları nektarı, özenle işleyerek sizlere sunuyoruz. Can Arıcılık balı, doğanın kalbindeki saf lezzeti size ulaştırır.",
  "Üretimimizde hiçbir katkı maddesi kullanmıyoruz. Can Arıcılık balı, tamamen doğal, saf ve sağlıklı bir lezzet sunar. Arılarımız, çiçeklerin büyüsünü sizin sofranıza taşıyor.",
];
let indis = 0;
function yeniYazilar() {
  p.textContent = data[indis++];
  if (indis == data.length) indis = 0;
}
setInterval(() => {
  yeniYazilar();
}, 2 * 1000);

document.querySelectorAll("div.card").forEach((x) => {
  x.onclick = () => {
    let link = x
      .querySelector("span")
      .textContent.toLowerCase()
      .split(" ")
      .join("-");

      window.location.href = "/urun.html#"+link;
  };
});

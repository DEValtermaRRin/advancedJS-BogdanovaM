const products = [
  { id: 1, title: "Notebook", price: 2000},
  { id: 2, title: "Mouse", price: 20},
  { id: 3, title: "Keyboard", price: 200},
  { id: 4, title: "Gamepad", price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение

/* const renderProduct = (title, price) => {
  return `<div class="product-item">
              <h3>${title}</h3>
              <p>${price}</p>
              <button class="buy-btn">Купить</button>
          </div>`
};
const renderPage = list => {
  const productsList = list.map(item => renderProduct(item.title,item.price));
  console.log(productsList);
  document.querySelector('.products').innerHTML = productsList;
};
  */
function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const renderProduct = (item, img = `"https://picsum.photos/150?random=${randomNumber()}"`) => 
 `<div class="product-item">
    <h3>${item.title}</h3>							
    <div class="product__img"><img src=${img}></div>
    <p>${item.price}</p>
    <button class="buy-btn">Купить</button>
  </div>`;

const renderPage = document.querySelector(".products").innerHTML = products
.map(item => renderProduct(item)).join("");
console.log(productsList);

renderPage(products);

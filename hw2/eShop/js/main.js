class ProductList {
  constructor(container = ".products") {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts(); //рекомендация, чтобы метод был вызван в текущем классе
    this.render(); //вывод товаров на страницу
    this.totalSum = 0;
  }
  _fetchProducts() {
    this.goods = [
      { id: 1, title: "Notebook", price: 2000 },
      { id: 2, title: "Mouse", price: 20 },
      { id: 3, title: "Keyboard", price: 200 },
      { id: 4, title: "Gamepad", price: 50 },
    ];
  }

  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const item = new ProductItem(product);
      this.allProducts.push(item);
      block.insertAdjacentHTML("beforeend", item.render());
      //           block.innerHTML += item.render();
    }
  }

	// Подсчет стоимости всех товаров
  totalSum() {
    this.goods.forEach((item) => {
      this.totalSum += item.price;
    });
    return this.totalSum;
  }
}

class ProductItem {
  constructor(product, img = "https://via.placeholder.com/200x150") {
    this.title = product.title;
    this.id = product.id;
    this.price = product.price;
    this.img = img;
  }
  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}">
								<div class="desc">
									<h3>${this.title}</h3>
									<p>${this.price}</p>
									<button class="buy-btn">Купить</button>
								</div>
            </div>`;
  }
}

// кто? - корзина Что делает? При клике на иконку открывается, отрисовывает корзину
// показывает добавленные товары, хранит добавленные товары
class Cart {
  constructor() {	
    this.cartList = [];
		this.addedProduct;
    this.watcherClick();
		this.watchingSameProductsInCart(this.cartList, this.addedProduct);
		this.whatcher();		
  }
	watcherClick() {
   /*  document.querySelector(list.container).addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") return;
      const selectedProduct = e.target.closest(".product-item");
			const productId = Number.parseInt(selectedProduct.dataset?.id);
			const productTitle = selectedProduct.querySelector('h3').textContent;
			const productPrice = Number.parseFloat(selectedProduct.querySelector('p').textContent);
			const productImg = selectedProduct.querySelector('img').getAttribute('src');
			this.addedProduct = new CartItem(productId, productTitle, productPrice, productImg);
			this.cartList.push(this.addedProduct);			 */
    //});	
  }

	watchingSameProductsInCart() {
	/* 	for (let item in this.cartList) {
			if (this.addedProduct.id === item.id) {
				const repetedItemIndex = this.cartList.findIndex(item => item.id === this.addedProduct.id);
				this.addedProduct = this.cartList[repetedItemIndex];
				this.addedProduct.count += 1;
				this.cartList.splice(repetedItemIndex, 1);
				this.cartList.push(this.addedProduct);
			}
		}return this.cartList; */
	}

  renderCart() {}
	
  addProductToCart() {}

  removeProductFromCart() {}

	countAllProductsInCart() {}

	whatcher() {
		/* console.log(this.cartList); */
	}
	countSum() {}
}

class CartItem{
  constructor(id, title, price, img) {
   this.id = id;
	 this.title = title;
	 this.price = price;
	 this.img = img;
	 this.count = 0
  }
}

const list = new ProductList();
const cart = new Cart();



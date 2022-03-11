const API =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

/* let getRequest = (url, cb) => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) return;
    if (xhr.status !== 200) {
      console.log("Error! " + xhr.status + " " + xhr.statusText);
    } else {
      cb(xhr.responseText);
    }
  };
  xhr.send();
}; */
class ProductList {
	#goods;
	#allProducts;
	
  constructor(container = ".products") {
    this.container = container;
    this.#goods = [];
    this.#allProducts = [];
    // this._fetchProducts(); 
		// this.render();
		this.#fetchGoods().then((data) => {
			this.#goods = data;
			this.render();
		})
    this.totalSum = 0;
  }
  /* _fetchProducts() {
		getRequest(`${API}/catalogData.json`, (data) => {
			this.goods = JSON.parse(data);
			console.log(this.goods);
			this.render();
		});
	} */
	#fetchGoods() {
		return fetch(`${API}/catalogData.json`)
			.then(res => res.json())
			.catch((err) => console.log(err));
	}

  render() {
    const block = document.querySelector(this.container);
    for (let product of this.#goods) {
      const item = new ProductItem(product);
      this.#allProducts.push(item);
      block.insertAdjacentHTML("beforeend", item.render());     
    }
  }

  // Подсчет стоимости всех товаров
  totalSum() {
    this.#goods.forEach((item) => {
      this.totalSum += item.price;
    });
    return this.totalSum;
  }
}

class ProductItem {
  constructor(
    product,
    img = `https://picsum.photos/200/150?random=${ProductItem.randomNumber()}`
  ) {
    this.title = product.product_name;
    this.id = product.id_product;
    this.price = product.price;
    this.img = img;
  }

  static randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="${this.title}">
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
  constructor(container = '.content') {
		this.container = container;	
    this.cartList = [];
    
		this.fetchProducts().then(data => {		
			this.products = data.contents;
			this.renderCart();			
		})
		this.watchClickButtoncart();
  }

	fetchProducts() {
		return fetch(`${API}/getBasket.json`)
		.then(res => res.json())
		.catch((err) => console.log(err));
	}

  renderCart() {
		const block = document.querySelector(this.container);
		for (let product of this.products) {
			const item = new CartItem(product);
			this.cartList.push(item);
			block.insertAdjacentHTML('beforeend', item.render());
		}
	}
	watchClickButtoncart() {
		document.querySelector('.btn-cart').addEventListener('click', e => {
			if (e.target.tagName !== 'BUTTON') return;			
			document.querySelector('.cart').classList.toggle('hidden');
		});
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

  addProductToCart() {}

  removeProductFromCart() {}

  countAllProductsInCart() {}

  countSum() {}
}

class CartItem {
  constructor(product, img = `https://picsum.photos/100/100?random=${ProductItem.randomNumber()}`) {
    this.id = product.id_product;
    this.title = product.product_name;
    this.price = product.price;
    this.img = img;
		this.count = product.quantity;   
  }

	render() {
		return `
		<div class="content__item item" data-id="${this.id}">
			<img src="${this.img}" alt="${this.title}">
			<div class="item__desc">
				<h3>${this.title}</h3>
				<p>${this.price}</p>
			</div>	
		</div>	
		`;
	}
}

const list = new ProductList();
const cart = new Cart();
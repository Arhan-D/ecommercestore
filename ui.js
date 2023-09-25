const categoryList = document.querySelector('.categories');
const productList = document.querySelector('.products');
const basketList = document.querySelector('.list');

export function renderCategories(categories) {
  // kategoriler dizisindeki herbir obje için ekran kart basma
  categories.forEach((category) => {
    // 1- bir div oluşturma
    const categoryDiv = document.createElement('div');
    // 2- dive class ekleme
    categoryDiv.classList.add('category');
    // 3- divin içeriğini belirleme
    categoryDiv.innerHTML = `
     <img src=${category.image} />
     <span>${category.name}</span>
    `;
    // 4- elemanı htmldeki categories divine ekleme
    categoryList.appendChild(categoryDiv);
  });
}

/*
 * 1- <div></div>
 * 2- <div className="category"></div>
 * 3- <div className="category">
 *     <img src="https://picsum.photos/640/640?r=1249" />
 *     <span>Elektronik</span>
 *    </div>
 * 4- Oluşturduğumuz bu categoryDiv'i (node) html'e gönderme
 */

export function renderProducts(products) {
  products
    .slice(0, 40)
    // dizideki her bir obje için çalışır
    .forEach((product) => {
      // div oluşturma
      const productCard = document.createElement('div');
      // gerekli class atamasını yapma
      productCard.className = 'product';
      // kartın içeriğini belirleme
      productCard.innerHTML = `
            <img src=${product.images[0]} />
            <p>${product.title}</p>
            <p>${product.category.name}</p>
            <div class="product-info">
              <p>${product.price} $</p>
              <button id="add-btn" data-id=${product.id}>Sepete Ekle</button>
            </div>      
      `;
      //   elemanı html'e gönderme
      productList.appendChild(productCard);
    });
}

// ürünü ekran basma fonksiyonu
export function renderBasketItem(product) {
  const basketItem = document.createElement('div');

  basketItem.classList.add('list-item');

  basketItem.innerHTML = `
   <img src=${product.images[0]} />
   <h2>${product.title}</h2>
   <h2>${product.price}</h2>
   <p>Miktar: ${product.amount}</p>
   <button id="del-button" data-id=${product.id}>sil</button>
  `;

  basketList.appendChild(basketItem);
}


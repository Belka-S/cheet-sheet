//  // ******************** Objects ******************** //

const cart = {
  items: [],
  countTotalSumm() {
    let totalSumm = 0;
    for (let i = 0; i < this.items.length; i += 1) {
      totalSumm += this.items[i].price * this.items[i].quantity;
    }
    console.log(`total Summ = ${totalSumm}$`);
    console.log('-----------------');
  },
  getItems() {
    console.table(this.items);
    this.countTotalSumm();
  },
  add(product) {
    product.quantity = 1; // додавати в корзину новий обєкт в якого додоана кількість
    this.items.push(product);
    console.log(
      `${product.quantity} ${product.productName} for ${product.price}$ is added`
    );
  },
  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].productName === productName) {
        console.log(
          `${this.items[i].quantity} ${productName} for ${this.items[i].price}$ is removed`
        );
        this.items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
    console.log('Cart is empty!');
  },
  increaseQuantity(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].productName === productName) {
        console.log(
          `1 ${this.items[i].productName} for ${this.items[i].price}$ is added`
        );
        this.items[i].quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].productName === productName) {
        if (this.items[i].quantity === 1) {
          this.remove(productName);
        } else {
          console.log(
            `1 ${this.items[i].productName} for ${this.items[i].price}$ is removed`
          );
          this.items[i].quantity -= 1;
        }
      }
    }
  },
};
// -----------------------------------------------------------------------------

// cart.add({ productName: 'Nike', price: 75 });
// cart.add({ productName: 'Spalding', price: 100 });
// cart.add({ productName: 'Spalding', price: 100 });
// cart.add({ productName: 'Wilson', price: 65 });
// cart.add({ productName: 'The Rock', price: 50 });
// cart.increaseQuantity('Spalding');
// cart.getItems();
// cart.remove('Spalding');
// cart.getItems();
// cart.clear();
// cart.add({ productName: 'Wilson', price: 65 });
// cart.add({ productName: 'Nike', price: 75 });
// cart.add({ productName: 'The Rock', price: 50 });
// cart.getItems();
// cart.increaseQuantity('Nike');
// cart.increaseQuantity('Nike');
// cart.getItems();
// cart.decreaseQuantity('Nike');
// cart.decreaseQuantity('Wilson');
// cart.getItems();

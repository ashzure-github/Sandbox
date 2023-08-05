class ShoppingItem {
    name;
    price;
    constructor(name, price) {
      this.name = name;
      this.price = "$" + price;
    }
  }
  
  class FoodItem extends ShoppingItem {
    size;
    constructor(name, size, price) {
      super(name, price);
      this.size = size;
    }
  }

  class FoodItemCountable extends ShoppingItem {
    size;
    constructor(name, size, price) {
      super(name, price);
      this.size = size;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  }
  
  class ShopList {
    constructor(items) {
      this.items = items;
      this.cart = new ShoppingCart();
    }
  
    listItems() {
      const itemListElement = document.getElementById("itemList");
  
      for (const itemName in this.items) {
        const listItem = document.createElement("li");
        const item = this.items[itemName];
        const addButton = document.createElement("button");
  
        if (item instanceof FoodItem) {
          listItem.textContent = `${item.size} of ${item.name} for ${item.price}`;
        } else {
          listItem.textContent = `${item.size} ${item.name} for ${item.price}`;
        }
  
        addButton.textContent = "Add to Cart";
        addButton.addEventListener("click", function () {
          this.addItemToCart(item);
        }.bind(this));
  
        listItem.appendChild(addButton);
        itemListElement.appendChild(listItem);
      }
    }
  
    addItemToCart(item) {
      this.cart.addItem(item);
  
      const cartListElement = document.getElementById("cartList");
      const cartItem = document.createElement("li");
  
      if (item instanceof FoodItem) {
        cartItem.textContent = `${item.size} of ${item.name} for ${item.price}`;
      } else {
        cartItem.textContent = `${item.size} ${item.name} for ${item.price}`;
      }
  
      cartListElement.appendChild(cartItem);
    }
  }
  
  
  const foodItems = {
    milk: new FoodItem("milk", "1L", 1),
    eggs: new FoodItemCountable("eggs", "12", 1.25),
    cheese: new FoodItem("cheese", "250g", 3),
    apples: new FoodItemCountable("apples", "6", 3),
    carrot: new FoodItemCountable("carrot", "1", 0.50),
    peas: new FoodItem("peas", "200g", 1)
  };
  const food = new ShopList(foodItems);
  food.listItems();
  
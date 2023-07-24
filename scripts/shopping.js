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

           class ShopList {
            constructor(items) {
                this.Items = items;
            }

            listItems() {
                const itemListElement = document.getElementById("itemList");

                for (const itemName in this.Items) {
                    const listItem = document.createElement("li");
                    const item = this.Items[itemName]

                    if (item instanceof FoodItem) {
                        listItem.textContent = `${item.size} of ${item.name} for ${item.price}`
                    } else {
                        listItem.textContent = `${item.name} for ${item.price}`
                    }
                    
                    itemListElement.appendChild(listItem);
                }
            }
           }


           const foodItems = {
            milk: new FoodItem("milk", "1L", 1),
            eggs: new FoodItem("eggs", "12", 1.25),
            cheese: new FoodItem("cheese", "250g", 3),
            apples: new FoodItem("apples", "6", 3),
            carrot: new FoodItem("carrot", "1", 0.50),
            peas: new FoodItem("peas", "200g", 1)
           };
           const food = new ShopList(foodItems);
           food.listItems();

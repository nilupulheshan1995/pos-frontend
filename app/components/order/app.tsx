import React, { useState } from "react";
import SearchBar from "./searchBar";
import ItemList from "./itemList";
import Cart from "./cart";

export interface Item {
  id: number;
  name: string;
  code: string;
}

const itemList: Item[] = [
  { id: 1, name: "Onion", code: "C001" },
  { id: 2, name: "Salt", code: "C002" },
  { id: 3, name: "Dhal", code: "C003" },
  { id: 4, name: "rice", code: "C004" }
];

const OrderApp: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [cart, setCart] = useState<{ item: Item; quantity: number }[]>([]);

  const addToCart = (item: Item, quantity: number) => {
    const existingItem = cart.find((cartItem) => cartItem.item.id === item.id);

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.item.id === item.id
            ? { item: cartItem.item, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  return (
    <div className="mx-auto mt-8">
      <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      <ItemList items={itemList.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))} onAddToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default OrderApp;

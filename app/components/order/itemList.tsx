import React from "react";
import { Item } from "./app";
import ItemComponent from "./item";

interface ItemListProps {
  items: Item[];
  onAddToCart: (item: Item, quantity: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onAddToCart }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item) => (
        <ItemComponent key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ItemList;

import React from "react";
import { Item } from "./app";

interface ItemProps {
    item: Item;
    onAddToCart: (item: Item, quantity: number) => void;
}

const ItemComponent: React.FC<ItemProps> = ({ item, onAddToCart }) => {
    const [quantityInput, setQuantityInput] = React.useState<string>("");

    const handleAddToCart = () => {
        const quantity = parseInt(quantityInput);
        if (isNaN(quantity) || quantity <= 0) {
            alert("Invalid quantity. Please enter a valid number.");
            return;
        }
        onAddToCart(item, quantity);
        setQuantityInput("");
    };

    return (
        <div className="">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p className="mb-2">{item.code}</p>
                    <input
                        type="number"
                        className="p-2 mr-2"
                        placeholder="Quantity"
                        value={quantityInput}
                        onChange={(e) => setQuantityInput(e.target.value)}
                    />
                    <div className="card-actions justify-end">
                        <button
                            className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemComponent;

import React from "react";
import { Item } from "./app";


interface CartProps {
    cart: { item: Item; quantity: number }[];
}

const Cart: React.FC<CartProps> = ({ cart }) => {
    return (
        <>
            <div className="bg-dark rounded-lg shadow-md p-6 mt-8">
                <h2 className="text-xl font-bold mb-4">Cart</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="px-6 py-3">Item Name</th>
                                <th className="px-6 py-3">Quantity</th>
                                <th className="px-6 py-3">Item Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((cartItem) => (
                                <tr key={cartItem.item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50">
                                    <td className="px-6 py-3">{cartItem.item.name}</td>
                                    <td className="px-6 py-3">{cartItem.quantity}</td>
                                    <td className="px-6 py-3">{cartItem.item.code}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
};

export default Cart;

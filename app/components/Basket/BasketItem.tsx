import React from "react";
import Image from "next/image";
import { BasketItem, Product } from "@interfaces/currencies.interface";
import { useBasketContext } from "@contexts/BasketContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

interface BasketItemProps {
  product: Product;
}

export default function BasketItem({ product }: BasketItemProps) {
  const { basket, setBasket } = useBasketContext();
  const existingItem = basket.find((item: { id: string; }) => item.id === product.id);
  const basketItem = existingItem?.quantity || 0;

  const addToBasket = (id: string) => {
    if (existingItem) {
      setBasket((prevBasket: BasketItem[]) =>
        prevBasket.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setBasket((prevBasket: BasketItem[]) => [
        ...prevBasket,
        { ...product, quantity: 1 },
      ]);
    }
  };

  const decreaseFromBasket = (id: string) => {
    if (existingItem && existingItem.quantity > 1) {
      setBasket((prevBasket: BasketItem[]) =>
        prevBasket.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const removeFromBasket = (id: string) => {
    setBasket((prevBasket: BasketItem[]) =>
      prevBasket.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="flex justify-evenly my-2 mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <div className="w-32 h-32 relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="rounded"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
        />
      </div>

      <div className="ml-4 flex justify-between flex-col">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{product.name}</h2>
        </div>

        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <button
              onClick={() => decreaseFromBasket(product.id)}
              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
            >
              <FontAwesomeIcon
                icon={faMinus}
                className="text-gray-500"
                style={{ fontSize: "20px" }}
              />
            </button>

            <input
              className="h-8 w-8 border bg-white text-center text-xs outline-none appearance-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              type="number"
              value={basketItem}
              min="0"
            />

            <button
              onClick={() => addToBasket(product.id)}
              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
            >
              <FontAwesomeIcon
                icon={faPlus}
                className="text-gray-500"
                style={{ fontSize: "20px" }}
              />
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-sm">${product.price.toFixed(2)}</p>

            <button
              onClick={() => removeFromBasket(product.id)}
              className="cursor-pointer rounded py-1 px-3 duration-100 hover:bg-gray-100"
            >
              <FontAwesomeIcon
                icon={faXmark}
                className="text-gray-500"
                style={{ fontSize: "20px" }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

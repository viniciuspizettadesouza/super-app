import React from "react";
import Image from "next/image";
import { Product, BasketItem } from "@interfaces/currencies.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { addItemToBasket, decreaseItemInBasket, removeItemFromBasket } from "@app/redux/basketSlice";
import { RootState } from "@/app/redux/store";

interface BasketItemProps {
  product: Product;
}

export default function BasketItem({ product }: BasketItemProps) {
  const { id, name, image, price } = product;
  const { basket, selectedCurrency} = useSelector((state: RootState) => state.basket);
  const existingItem = basket.find((item: BasketItem) => item.id === id);

  const dispatch = useDispatch();

  const addToBasket = () => {
    dispatch(addItemToBasket(product));
  };

  const decreaseFromBasket = () => {
    if (existingItem && existingItem.quantity > 0) {
      dispatch(decreaseItemInBasket(product));
    }
  };

  const removeFromBasket = () => {
    dispatch(removeItemFromBasket(product));
  };

  return (
    <div className="flex justify-evenly my-2 mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <div className="w-32 h-32 relative">
        <Image
          src={image}
          alt={name}
          fill
          className="rounded"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
        />
      </div>

      <div className="ml-4 flex justify-between flex-col">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{name}</h2>
        </div>

        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <button
              onClick={() => decreaseFromBasket()}
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
              value={existingItem?.quantity || 0}
              min="0"
              readOnly
            />

            <button
              onClick={() => addToBasket()}
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
            <p className="text-sm">{selectedCurrency.symbol}{(price * selectedCurrency.rate).toFixed(2)}</p>

            <button
              onClick={() => removeFromBasket()}
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

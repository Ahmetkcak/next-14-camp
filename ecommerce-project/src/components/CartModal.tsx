"use client"

import { useWixClient } from "@/hooks/useWixClient";
import Image from "next/image";
import { useEffect } from "react";

function CartModal() {

  const cartItems = true;

  const wixClient = useWixClient();

  useEffect(() => {
    const getCart = async () => {
      const response = await wixClient.currentCart.getCurrentCart()
    }

    getCart()
  },[wixClient])
  


  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div>Cart is Empty</div>
      ) : (
        <>
        <h2 className="text-lg">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4">
              <Image src="https://images.pexels.com/photos/27097700/pexels-photo-27097700/free-photo-of-isik-parlak-acik-hafif.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={72} height={96} className="object-cover rounded-md" />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="flex items-center justify-between gap-8">
                  {/* TITLE */}
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* DESCRIPTION */}
                <div className="text-sm text-gray-500">
                  avaible
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Quantity 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div>
            <div className="flex  items-center justify-between font-semibold">
              <span>Total</span>
              <span>$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
              <button className="rounded-md py-3 px-4 ring-1 bg-black text-white">Checkout</button>
            </div>
          </div>
        </>)}
    </div>
  )
}

export default CartModal
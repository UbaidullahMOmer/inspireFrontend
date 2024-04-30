import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../reactRoute/RouteConstants";
import FaqSection from "../../components/homeComponents/FaqSection";
import { enqueueSnackbar } from "notistack";
import {
  cartItemsSelector,
  clearCart,
  removeItemFromCart,
  updateItemQuantity,
} from "../../redux/CartReducer";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import "./cart.css";
import CartModel from "./CartModel";
import { useCreateOrderMutation } from "../../redux/InspireApis";
const Cart = () => {
  const [createOrder, { isLoading: createOrderLoading }] =
    useCreateOrderMutation();
  const [checkoutFiledsData, setCheckoutFiledsData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const cartItems = useSelector(cartItemsSelector);
  const [checkoutModal, setCheckoutModal] = useState(false);
  const dispatch = useDispatch();
  const handleQuantityChange = (itemId, qty) => {
    dispatch(updateItemQuantity({ id: itemId, qty }));
  };
  const handleRemoveItem = (itemId) => {
    dispatch(removeItemFromCart({ id: itemId }));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const totalPrice = cartItems.reduce((total, item) => {
    const quantity = item?.qty || 0;
    const price = item?.attributes?.price || 0;
    return total + quantity * price;
  }, 0);

  const handleCheckout = async () => {
    if (cartItems.length < 1) {
      enqueueSnackbar("Cart is empty", { variant: "error" });
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const stripe = await loadStripe(
      "pk_test_51P7GGR2KcbZATXLfxRcETmoKL8lePagNdhe3n3S2HQq1Tnwi8wPsxpTGGrr1bLlim5kiMlIUGg736RQLNQWnFcA500a4Lxqcvv"
    );
    const body = {
      products: cartItems,
      shippingAddress: checkoutFiledsData,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      `https://inspirebackend.vercel.app/create-checkout-session`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    const results = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    setIsLoading(false);
  };
  return (
    <>
      {checkoutModal && (
        <CartModel
          onClose={() => setCheckoutModal(false)}
          handleCheckout={handleCheckout}
          isLoading={isLoading}
          setCheckoutFiledsData={setCheckoutFiledsData}
          checkoutFiledsData={checkoutFiledsData}
        />
      )}
      <div className="flex flex-col gap-[56px] px-[6vw] bg-[#0F0F0F] text-[#FFF]">
        <div className="flex items-center justify-between">
          <Link
            to={ROUTES.home}
            className="flex items-center gap-[10px] text-[#FFF]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#000"
              fill="none"
            >
              <path
                d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="font-[500] text-[20px]">Go Back</span>
          </Link>
          <span className="font-[500] text-[48px] text-[#FFF]">Cart</span>
          <span className="w-[108px]"></span>
        </div>
        <div className="flex gap-[36px] max-[1240px]:flex-col">
          <div className="flex flex-col gap-[12px] w-full">
            <div className="flex items-center p-2  justify-between max-sm:hidden w-full">
              <span className="font-[500] text-[16px] w-[285px] opacity-75">
                Product Details
              </span>
              <span className="font-[500] text-[16px] w-[146px] opacity-75">
                Quantity
              </span>
              <span className="font-[500] text-[16px] w-[191px] opacity-75">
                Flavor
              </span>
              <span className="font-[500] text-[16px] w-[200px] opacity-75">
                Total
              </span>
              <span
                onClick={() => handleClearCart()}
                className="font-[500] text-[16px] w-[200px] opacity-75 cursor-pointer"
              >
                <i class="ri-close-large-line"></i>
              </span>
            </div>
            {cartItems?.length > 0 ? (
              cartItems?.map((item) => {
                return (
                  <div className="flex items-center justify-between w-full  p-2 bg-[#272727] rounded-[4px] max-sm:flex-col max-sm:items-start max-sm:gap-4">
                    <div className="flex items-center gap-[10px] w-[275px]">
                      <img
                        src={item?.attributes?.image?.data?.attributes?.url}
                        className="rounded-[4px] w-[100px] h-[100px] object-cover"
                        alt=""
                      />
                      <span className="opacity-75 font-[500] text-[16px] ">
                        {item?.attributes?.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-[16px] w-[146px]">
                      <span
                        className="cursor-pointer"
                        onClick={() =>
                          handleQuantityChange(item?.id, item?.qty + 1)
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          color="#ffffff"
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            d="M12 4V20M20 12H4"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="p-[13px] rounded-[4px] py-[6px] border">
                        {item.qty}
                      </span>
                      <span
                        onClick={() =>
                          handleQuantityChange(
                            item?.id,
                            item?.qty === 1 ? 1 : item?.qty - 1
                          )
                        }
                        className="cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          color="#ffffff"
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            d="M20 12L4 12"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex items-center w-[191px]">
                      {item?.attributes?.flavor}
                    </div>
                    <div className="font-[500] text-[16px] w-[200px] opacity-75">
                      ${item?.attributes?.price * item?.qty}
                    </div>
                    <div
                      onClick={() => handleRemoveItem(item?.id)}
                      className="font-[500] text-[16px] w-[200px] opacity-75 cursor-pointer"
                    >
                      <i class="ri-close-large-line"></i>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-white text-lg font-medium">
                Cart is empty
              </div>
            )}
          </div>
          <div className="w-[520px] p-6 bg-stone-900 flex-col justify-center items-start gap-[18px] inline-flex rounded-[8px] max-[1240px]:w-[100%]">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-white text-opacity-70 text-lg font-medium">
                Total
              </div>
              <div className="text-white text-lg font-medium">
                ${totalPrice}
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-white text-opacity-70 text-lg font-medium">
                Sub-Total
              </div>
              <div className="text-white text-lg font-medium">
                ${totalPrice}
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-white text-opacity-70 text-lg font-medium">
                Delivery
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#ffffff"
                fill="none"
              >
                <path
                  d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M12.2422 17V12C12.2422 11.5286 12.2422 11.2929 12.0957 11.1464C11.9493 11 11.7136 11 11.2422 11"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.992 8H12.001"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-white text-opacity-70 text-lg font-medium">
                Standard Delivery (Free)
              </div>
              <div className="w-5 h-5 justify-center items-center flex">
                <div className="w-5 h-5 relative flex-col justify-start items-start flex" />
              </div>
            </div>
            <div
              onClick={() => {
                cartItems?.length > 0 && setCheckoutModal(true);
              }}
              className={`cursor-pointer self-stretch h-[46px] bg-amber-300 rounded-full py-[12px] text-stone-950 text-xl font-bold leading-snugl shadow justify-center items-center gap-2.5 inline-flex ${
                isLoading ? "opacity-50" : "opacity-100"
              } ${
                cartItems?.length < 1 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {isLoading ? "Loading..." : "Check Out"}
            </div>
            <div className="text-white text-opacity-70 text-base font-medium">
              We Accept
            </div>
            <div className="payement_logos">
              <img
                src="images/stripelogo.png"
                alt=""
                className="payement_logo"
              />
              <img
                src="images/apple-paylogo.png"
                alt=""
                className="payement_logo"
              />
              <img
                src="images/Googlelogo.png"
                alt=""
                className="payement_logo"
              />
              <img
                src="images/paypallogo.png"
                alt=""
                className="payement_logo"
              />
            </div>
          </div>
        </div>
      </div>
      <FaqSection />
    </>
  );
};

export default Cart;

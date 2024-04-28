import React, { useState } from "react";

function CartModel({
  handleCheckout,
  isLoading,
  onClose,
  checkoutFiledsData,
  setCheckoutFiledsData,
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutFiledsData({
      ...checkoutFiledsData,
      [name]: value,
    });
  };

  return (
    <div className="fixed top-[50%] left-[50%] z-[9999] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] -translate-x-[50%] -translate-y-[50%] flex w-[600px] flex-col items-center gap-6 rounded-lg bg-neutral-800 p-4">
      <div className="inline-flex items-center justify-between self-stretch">
        <span className="text-[26px] font-bold leading-9 text-white">
          Check Out
        </span>
        <span
          onClick={onClose}
          className="cursor-pointer text-[20px] font-semibold leading-9 text-white transition hover:text-[#EFB749]"
        >
          <i className="ri-close-line"></i>
        </span>
      </div>
      <div className="flex w-full flex-col gap-[24px]">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={checkoutFiledsData.name}
          onChange={handleInputChange}
          className="rounded-lg border-[1px] bg-transparent p-[12px] text-[#FFF] outline-none placeholder:text-[#FFF]"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={checkoutFiledsData.email}
          onChange={handleInputChange}
          className="rounded-lg border-[1px] bg-transparent p-[12px] text-[#FFF] outline-none placeholder:text-[#FFF]"
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={checkoutFiledsData.phoneNumber}
          onChange={handleInputChange}
          className="rounded-lg border-[1px] bg-transparent p-[12px] text-[#FFF] outline-none placeholder:text-[#FFF]"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={checkoutFiledsData.address}
          onChange={handleInputChange}
          className="rounded-lg border-[1px] bg-transparent p-[12px] text-[#FFF] outline-none placeholder:text-[#FFF]"
        />
      </div>
      <button
        onClick={() => handleCheckout()}
        className="w-full rounded-lg bg-[#EFB749] p-[12px] font-bold"
      >
        {isLoading ? "Loading..." : "Proceed to Payment"}
      </button>
    </div>
  );
}

export default CartModel;

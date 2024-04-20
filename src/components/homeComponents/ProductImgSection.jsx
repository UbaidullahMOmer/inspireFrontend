import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/CartReducer";
import "./ProductImgSection.css";
function ProductImgSection() {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const dispatch = useDispatch();
  const products = [
    {
      name: "Inspire fruit Pre Workout",
      price: 29.0,
      flavor: "fruit",
      rating: 4.9,
      ratingCount: 188,
      reviewCount: 67,
      img: "./images/productSmallImage.png",
      discount: 10,
      id: 1,
      qty: 1,
    },
    {
      name: "Inspire Strawberry Kiwi Pre Workout",
      price: 22.0,
      flavor: "Strawberry Kiwi",
      rating: 4.6,
      ratingCount: 64,
      reviewCount: 41,
      img: "./images/productSmallImage.png",
      discount: 10,
      id: 2,
      qty: 1,
    },
  ];

  const handleProductClick = (index) => {
    setSelectedProduct(index);
  };
  const handleAddToCart = () => {
    const selectedProductData = products[selectedProduct];
    dispatch(addItemToCart(selectedProductData));
  };
  return (
    <div className="product_img_section">
      <img src="./images/productSectionImg.png" alt="" />
      <div onClick={handleAddToCart} className="product_img_section_btn cursor-pointer">
        <span>Add to cart - $50</span>
      </div>
    </div>
  );
}

export default ProductImgSection;

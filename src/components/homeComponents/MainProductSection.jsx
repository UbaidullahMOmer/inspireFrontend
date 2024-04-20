import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/CartReducer";

function MainProductSection() {
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
    <div className="main_product_section">
      <div className="main_product_section_heading">
        Here’s what is in the <span>box</span>
      </div>
      <div className="product">
        <div className="product_images">
          {products.map((product, index) => (
            <div
              key={index}
              className={`product_image ${
                selectedProduct === index ? "active_product_image" : ""
              }`}
              onClick={() => handleProductClick(index)}
            >
              <img src={product.img} alt={product.name} />
            </div>
          ))}
        </div>
        <div className="selectedProductImage">
          <img
            src={products[selectedProduct].img}
            alt={products[selectedProduct].name}
          />
        </div>
        <div className="selectedProductDetail">
          <div className="selected_product_rating_section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M12.9108 2.23193L16.0143 8.96032L23.3725 9.83275L17.9324 14.8635L19.3765 22.1311L12.9108 18.5119L6.4452 22.1311L7.88926 14.8635L2.44922 9.83275L9.80733 8.96032L12.9108 2.23193Z"
                fill="#EFB749"
                stroke="#EFB749"
                stroke-width="2"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M12.9108 2.23193L16.0143 8.96032L23.3725 9.83275L17.9324 14.8635L19.3765 22.1311L12.9108 18.5119L6.4452 22.1311L7.88926 14.8635L2.44922 9.83275L9.80733 8.96032L12.9108 2.23193Z"
                fill="#EFB749"
                stroke="#EFB749"
                stroke-width="2"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M12.9108 2.23193L16.0143 8.96032L23.3725 9.83275L17.9324 14.8635L19.3765 22.1311L12.9108 18.5119L6.4452 22.1311L7.88926 14.8635L2.44922 9.83275L9.80733 8.96032L12.9108 2.23193Z"
                fill="#EFB749"
                stroke="#EFB749"
                stroke-width="2"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M12.9108 2.23193L16.0143 8.96032L23.3725 9.83275L17.9324 14.8635L19.3765 22.1311L12.9108 18.5119L6.4452 22.1311L7.88926 14.8635L2.44922 9.83275L9.80733 8.96032L12.9108 2.23193Z"
                fill="#EFB749"
                stroke="#EFB749"
                stroke-width="2"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M12.9108 2.23193L16.0143 8.96032L23.3725 9.83275L17.9324 14.8635L19.3765 22.1311L12.9108 18.5119L6.4452 22.1311L7.88926 14.8635L2.44922 9.83275L9.80733 8.96032L12.9108 2.23193Z"
                fill="#EFB749"
                stroke="#EFB749"
                stroke-width="2"
                stroke-linejoin="round"
              />
            </svg>
            <div className="rating_detail">
              {products[selectedProduct].rating} stars based on the{" "}
              {products[selectedProduct].ratingCount} ratings
            </div>
          </div>
          <div className="selected_product_heading">
            {products[selectedProduct].name}
          </div>
          <div className="selected_product_paragraph">
            Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non.
            Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae
            quis cras vitae praesent morbi adipiscing purus consectetur mi.
          </div>
          <div className="price_section">
            <div className="without_discount_price">
              ${products[selectedProduct].price}
            </div>
            <div className="with_discount_price">
              $
              {products[selectedProduct].price -
                products[selectedProduct].discount}
            </div>
            <div className="discount_percentage">
              <span>{products[selectedProduct].discount}% Discount</span>
            </div>
          </div>
          <div onClick={handleAddToCart} className="add_to_cart_btn">
            <span>
              Add to cart - $
              {products[selectedProduct].price -
                products[selectedProduct].discount}
            </span>
          </div>
          <div className="short_message">30 days guarantee - Fast Delivery</div>
        </div>
      </div>
    </div>
  );
}

export default MainProductSection;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/CartReducer";
import { useGetProductsQuery } from "../../redux/InspireApis";
function MainProductSection() {
  const { data: productsRes } = useGetProductsQuery();
  const [selectedProduct, setSelectedProduct] = useState(0);
  const dispatch = useDispatch();
  const handleProductClick = (index) => {
    setSelectedProduct(index);
  };
  const handleAddToCart = () => {
    const selectedProductData = productsRes?.data?.[selectedProduct];
    dispatch(addItemToCart({ ...selectedProductData, qty: 1 }));
  };
  return (
    <div id="main_product_section" className="main_product_section">
      <div className="main_product_section_heading">
        Here’s what is in the <span>box</span>
      </div>
      <div className="product">
        <div className="product_images">
          {productsRes?.data?.map((product, index) => {
            const { url } = product.attributes?.image?.data?.attributes;
            console.log(url, "url");
            return (
              <>
                <div
                  key={index}
                  className={`product_image  ${selectedProduct === index ? "active_product_image" : ""
                    }`}
                  onClick={() => handleProductClick(index)}
                >
                  <img src={url} alt={"product"} />
                </div>
              </>
            )
          })
          }
        </div>
        <div className="selectedProductImage">
          <img
            className=""
            src={productsRes?.data?.[selectedProduct].attributes?.image?.data?.attributes?.url}
            alt={productsRes?.data?.[selectedProduct].attributes?.name}
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
              4.6 {" "}
              64
            </div>
          </div>
          <div className="selected_product_heading">
            {productsRes?.data?.[selectedProduct]?.attributes?.name}
          </div>
          <div className="selected_product_paragraph">
            {productsRes?.data?.[selectedProduct]?.attributes?.details}
          </div>
          <div className="price_section">
            <div className="without_discount_price">
              ${productsRes?.data?.[selectedProduct]?.attributes?.price}
            </div>
            <div className="with_discount_price">
              $
              {productsRes?.data?.[selectedProduct]?.attributes?.price -
                productsRes?.data?.[selectedProduct]?.attributes?.discount}
            </div>
            <div className="discount_persentage">
              <span>{productsRes?.data?.[selectedProduct]?.attributes?.discount}% Discount</span>
            </div>
          </div>
          <div onClick={handleAddToCart} className="add_to_cart_btn">
            <span>
              Add to cart - $
              {productsRes?.data?.[selectedProduct]?.attributes?.price -
                productsRes?.data?.[selectedProduct]?.attributes?.discount}
            </span>
          </div>
          <div className="short_message">30 days guarantee - Fast Delivery</div>
        </div>
      </div>
    </div>
  );
}
export default MainProductSection;
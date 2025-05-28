import React from "react";

const ProductCard = ({ img, discount, title, price, originalPrice }) => (
  <div className="product-card">
    <div className="product-img">
      <img src={img} alt={title} />
      {discount && <span className="discount-badge">{discount}</span>}
    </div>
    <div className="product-info">
      <h3 className="product-title">
        {title.length > 70 ? title.slice(0, 70) + "..." : title}
      </h3>
      <div className="product-price">
        <span className="current-price">{price}</span>
        {originalPrice && <span className="original-price">{originalPrice}</span>}
      </div>
      <div className="product-actions">
        <button className="add-to-cart">Comprar</button>
        <button className="wishlist-btn">♡</button>
      </div>
    </div>
  </div>
);

export default ProductCard;
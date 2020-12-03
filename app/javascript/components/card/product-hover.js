import React from "react";
import FormatMoney from "../formats/money";
import PropTypes from "prop-types";

// thumbnail, url, title, price;
const ProductCardHover = ({ list, onEdit }) => {
  return list.map((product) => (
    <div key={product.thumbnail} className="card" href={product.url}>
      <div>
        <img src={product.thumbnail} alt={product.title} />
        <p className="text-regular">{product.title}</p>
        <p className="text-medium">
          <FormatMoney money={product.price} />
        </p>
      </div>
      <div className="card-hover">
        <div className="hover_inner">
          <div className="button-group">
            <button className="btn btn-light-primary mb-1">View product</button>
            <button className="btn btn-gray" onClick={() => onEdit(product)}>
              Edit product
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
};

ProductCardHover.propTypes = {
  list: PropTypes.array,
  onEdit: PropTypes.func,
};
export default ProductCardHover;

import React from "react";
import FormatMoney from "../formats/money";

const ProductCard = ({ list }) => {
  return list.map(({ thumbnail, url, title, price }) => (
    <a key={thumbnail} className="card" href={url}>
      <div>
        <img src={thumbnail} alt={title} />
        <p className="text-regular">{title}</p>
        <p className="text-medium">
          <FormatMoney money={price} />
        </p>
      </div>
    </a>
  ));
};

export default ProductCard;

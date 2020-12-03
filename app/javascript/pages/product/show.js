import React from "react";
import ProductGallery from "../../components/banner/product-galler";
import ProductAction from "./layouts/product-action";
import ProductCard from "../../components/card/product-card";
import { Products } from "../../shared-data/products";

const Show = () => {
  return (
    <div className="product-holder">
      <div className="product-meta">
        <ProductGallery />
        <ProductAction />
      </div>
      <div className="product-description">
        <p className="heading">
          Product Description
        </p>
        <p className="text-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
          fermentum massa justo sit amet risus. Cum sociis natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Nullam quis
          risus eget urna mollis ornare vel eu leo. Vivamus sagittis lacus vel
          augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel
          augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget
          urna mollis ornare vel eu leo.
          <br />
          <br />
          <br />
          Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies
          vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. Morbi
          leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit
          non mi porta gravida at eget metus.
        </p>
      </div>

      <div className="related-products">
        <p className="heading">
          Other Related Products
        </p>
        <div className="cards">
          <ProductCard list={Products.slice(0, 6)} />
        </div>
      </div>
    </div>
  );
};

export default Show;

import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Slide from "../../components/banner/slide";
import MiniSlide from "../../components/banner/mini-slide";
import MiniBanner from "../../components/banner/mini-banner";
import ProductCard from "../../components/card/product-card";
import { Products } from "../../shared-data/products";

const Home = () => {
  return (
    <>
      <div className="banner-holder">
        <Slide />
      </div>

      <div className="content">
        <div>
          <p className="sub-heading">Explore Popular Categories</p>
          <Sidebar />
        </div>
        <div className="main">
          <div className="mini-banner-holder">
            <MiniSlide />
            <MiniBanner />
          </div>
          <div>
            <div>
              <p className="heading">Trending Offers</p>
            </div>
            <div className="cards">
              <ProductCard list={Products} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

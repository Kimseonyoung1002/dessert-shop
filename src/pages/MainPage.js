import React from "react";
import VisualBanner from "../components/VisualBanner";
import desserts from "../data/desserts";
import ProductCard from '../components/ProductCard'; 


const MainPage = () => {
  return (
    <div>
      <VisualBanner/>
      <div className="card_banner01">
        <img className="banner_img" src={process.env.PUBLIC_URL + "/images/card_banner.png"} alt="카드 배너1"/>
      </div>
      <div className="title">
       <div className="main_title">Bomnal& Dessert</div>
    <div className="sub_title">봄날엔의 달콤한 디저트들을 만나보세요.</div>
      </div>
      <div className="product_grid">
        {desserts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
     <div className="card_banner01">
        <img className="banner_img" src={process.env.PUBLIC_URL + "/images/bg_img.png"} alt="배경 이미지"/>
      </div>
    </div>
  );
};

export default MainPage;
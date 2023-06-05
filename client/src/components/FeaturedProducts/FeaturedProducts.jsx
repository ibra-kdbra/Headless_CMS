import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Whether you need a cozy sweater, a chic dress, or a stylish jacket,
          you will find it here. Our clothing featured products are carefully
          selected to suit your taste and budget. Plus, they are made from
          high-quality materials and designed to flatter your figure. Don’t miss
          this opportunity to update your wardrobe with our clothing featured
          products. Shop now and enjoy free shipping on orders over $50.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;

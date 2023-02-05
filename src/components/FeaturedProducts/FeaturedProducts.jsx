import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./FeaturedProduct.scss";


const FeaturedProducts = ({ type }) => {

  const {data,loading,error} = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          perspiciatis adipisci autem hic, in veniam mollitia harum sit, dolorem
          quae aperiam id, tenetur consequatur omnis.
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

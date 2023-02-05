import React from "react";
import "./Footer.scss"

const Footer = () => {
  return(
  <div className="footer">
    <div className="top">
      <div className="item">
        <h1>Categories</h1>
        <span>Women</span>
        <span>Men</span>
        <span>Shoes</span>
        <span>Accessories</span>
        <span>New Arrivals</span>
      </div>
      <div className="item">
        <h1>Links</h1>
        <span>FAQ</span>
        <span>Pages</span>
        <span>Store</span>
        <span>Compare</span>
        <span>Cookies</span>
      </div>
      <div className="item">
        <h1>About</h1>
        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui delectus debitis modi tenetur tempore obcaecati, fuga dicta tempora odit vel earum sequi assumenda sapiente beatae. At nostrum ullam ut numquam.</span>
      </div>
      <div className="item">
        <h1>Contact</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum id ab maiores, numquam, voluptatem incidunt error sint aut nemo eligendi necessitatibus fugiat! Vero enim perspiciatis fuga architecto eum eligendi.</span>
      </div>
    </div>
    <div className="bottom">
      <div className="left">
        <span className="logo">Lamastore</span>
        <span className="copyright">Copyright 2023. All Right Reserved</span>
      </div>
      <div className="right">
        <img src="/img/payment.png" alt="" />
      </div>
    </div>
 </div>) ;
};
export default Footer;

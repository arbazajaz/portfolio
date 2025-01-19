import React from "react";
import Image from "next/image";

const Product: React.FC = () => {
  // Assuming these are static assets, you might want to manage these with a state or props if they come from an API or database in the future
  const products = [
    {
      id: 1,
      name: "Cacti Plant",
      price: "$19.99",
      imgSrc: "/assets/img/product1.png",
    },
    {
      id: 2,
      name: "Cactus Plant",
      price: "$11.99",
      imgSrc: "/assets/img/product2.png",
    },
    {
      id: 3,
      name: "Aloe Vera Plant",
      price: "$7.99",
      imgSrc: "/assets/img/product3.png",
    },
    {
      id: 4,
      name: "Succulent Plant",
      price: "$5.99",
      imgSrc: "/assets/img/product4.png",
    },
    {
      id: 5,
      name: "Succulent Plant",
      price: "$10.99",
      imgSrc: "/assets/img/product5.png",
    },
    {
      id: 6,
      name: "Green Plant",
      price: "$8.99",
      imgSrc: "/assets/img/product6.png",
    },
  ];

  return (
    <section className="product section container" id="products">
      <h2 className="section__title-center">
        Check out our <br /> products
      </h2>

      <p className="product__description">
        Here are some selected plants from our showroom, all are in excellent
        shape and have a long lifespan. Buy and enjoy the best quality.
      </p>

      <div className="product__container grid">
        {products.map((product) => (
          <article key={product.id} className="product__card">
            <div className="product__circle"></div>
            <div className="product__img">
              <Image
                src={product.imgSrc}
                alt={product.name}
                width={200}
                height={200}
              />
            </div>
            <h3 className="product__title">{product.name}</h3>
            <span className="product__price">{product.price}</span>
            <button className="button--flex product__button">
              <i className="ri-shopping-bag-line"></i>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Product;

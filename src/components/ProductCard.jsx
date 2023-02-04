import React from "react";
import styles from "./modules/productCard.module.css";
import { data } from "../utils/data";
// npm install react-elastic-carousel --force
// documentation https://sag1v.github.io/react-elastic-carousel/
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function ProductCard() {
  return (
    <section className={styles.container}>
      <div className={styles.row}>
        <Carousel breakPoints={breakPoints} className={styles.carousel}>
          {data.map((product) => (
            <article key={product.id}>
              <div className={styles.product}>
                <div className={styles.product__thumb}>
                  <a href="#">
                    <img src={product.image} alt="Rolex watch" />
                  </a>
                </div>
                <div className={styles.product__body}>
                  <div className={styles.title}>
                    <h6>{product.title}</h6>
                  </div>
                  <div className={styles.price}>
                    <span>{product.price}$</span>
                  </div>
                  <div className={styles.rating}>
                    <div className={styles.star}>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className={styles.footer}>
                      <div className={styles.btn}>
                        <a
                          href="#"
                          className={`${styles.btn__custom} ${styles.primary}`}
                        >
                          Add To Cart
                        </a>
                        <a
                          href="#"
                          className={`${styles.btn__custom} ${styles.second}`}
                        >
                          Quick View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default ProductCard;

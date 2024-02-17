import baseURL from "../lib/baseURL";
import { IProudct } from "../lib/types";
import "../globals.css";
const getProduct: () => Promise<IProudct[]> = async () => {
  const res = await fetch(`${baseURL}/products`);
  return res.json();
};

const HProduct = async () => {
  const products = await getProduct();
  return (
    <>
      {products.map((product) => (
        <article key={product.id} className="product">
          <div className="product-container">
            <img src={product.images[0]} className="product-img img" alt="" />
            <div className="product-icons">
              <a href="product.html?id=1" className="product-icon">
                <i className="fas fa-search" />
              </a>
              <button className="product-cart-btn product-icon" data-id={1}>
                <i className="fas fa-shopping-cart" />
              </button>
            </div>
          </div>
          <footer>
            <p className="product-name">{product.title}</p>
            <h4 className="product-price">${product.price}</h4>
          </footer>
        </article>
      ))}
    </>
  );
};

export default HProduct;

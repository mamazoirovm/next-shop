import baseURL from "../lib/baseURL";
import { IProudct } from "../lib/types";
import "../globals.css";
const getProduct: () => Promise<IProudct[]> = async () => {
  const res = await fetch(`${baseURL}/products`);
  return res.json();
};

const PageProduct = async () => {
  const products = await getProduct();
  return (
    <>
      <div className="products-container">
        {products.map((product) => (
          <article key={product.id} className="product">
            <div className="product-container">
              <img
                src={product.images[0]}
                className="product-img img"
                alt="high-back bench"
              />
              <div className="product-icons">
                <a
                  href="product.html?id=rec43w3ipXvP28vog"
                  className="product-icon"
                >
                  <i className="fas fa-search" />
                </a>
                <button
                  className="product-cart-btn product-icon"
                  data-id="rec43w3ipXvP28vog"
                >
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
      </div>
    </>
  );
};

export default PageProduct;

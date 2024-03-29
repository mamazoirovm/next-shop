import { Metadata } from "next";
import "../globals.css";
import PageProduct from "../components/PageProduct";

export const metadata: Metadata = {
  title: "Products | Comfy",
  description: "Generated by create next app",
};
const page = async() => {

  return (
    <>
      <>
        {/* navbar */}
        <nav className="navbar page">
          <div className="nav-center">
            {/* links */}
            <div>
              <button className="toggle-nav">
                <i className="fas fa-bars" />
              </button>
              <ul className="nav-links">
                <li>
                  <a className="nav-link" href="/">
                    home
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/products">
                    products
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/about">
                    about
                  </a>
                </li>
              </ul>
            </div>
            {/* logo */}
            <img
              src="https://your-comfy-store.netlify.app/images/logo-dark.svg"
              className="nav-logo"
              alt="logo"
            />
            {/* cart icon */}
            <div className="toggle-container">
              <button className="toggle-cart" fdprocessedid="d2vy3f">
                <i className="fas fa-shopping-cart" />
              </button>
              <span className="cart-item-count">1</span>
            </div>
          </div>
        </nav>
        {/* hero */}
        <section className="page-hero">
          <div className="section-center">
            <h3 className="page-hero-title">Home / Products</h3>
          </div>
        </section>
        {/* sidebar */}
        <div className="sidebar-overlay">
          <aside className="sidebar">
            {/* close */}
            <button className="sidebar-close">
              <i className="fas fa-times" />
            </button>
            {/* links */}
            <ul className="sidebar-links">
              <li>
                <a className="sidebar-link" href="/">
                  <i className="fas fa-home fa-fw" />
                  home
                </a>
              </li>
              <li>
                <a className="sidebar-link" href="/product">
                  <i className="fas fa-couch fa-fw" />
                  products
                </a>
              </li>
              <li>
                <a className="sidebar-link" href="/about">
                  <i className="fas fa-book fa-fw" />
                  about
                </a>
              </li>
            </ul>
          </aside>
        </div>
        {/* cart */}
        <div className="cart-overlay">
          <aside className="cart">
            <button className="cart-close">
              <i className="fas fa-times" />
            </button>
            <header>
              <h3 className="text-slanted">your bag</h3>
            </header>
            {/* cart items */}
            <div className="cart-items">
              <article className="cart-item" data-id="rec43w3ipXvP28vog">
                <img
                  src="https://course-api.com/images/store/product-1.jpeg"
                  className="cart-item-img"
                  alt="high-back bench"
                />
                <div>
                  <h4 className="cart-item-name">high-back bench</h4>
                  <p className="cart-item-price">$9.99</p>
                  <button
                    className="cart-item-remove-btn"
                    data-id="rec43w3ipXvP28vog"
                  >
                    remove
                  </button>
                </div>
                <div>
                  <button
                    className="cart-item-increase-btn"
                    data-id="rec43w3ipXvP28vog"
                  >
                    <i className="fas fa-chevron-up" />
                  </button>
                  <p className="cart-item-amount" data-id="rec43w3ipXvP28vog">
                    1
                  </p>
                  <button
                    className="cart-item-decrease-btn"
                    data-id="rec43w3ipXvP28vog"
                  >
                    <i className="fas fa-chevron-down" />
                  </button>
                </div>
              </article>
            </div>
            {/* footer */}
            <footer>
              <h3 className="cart-total text-slanted">Total : $9.99</h3>
              <button className="cart-checkout btn">checkout</button>
            </footer>
          </aside>
        </div>
        {/* products */}
        <section className="products">
          {/* filters */}
          <div className="filters">
            <div className="filters-container">
              {/* search */}
              <form className="input-form">
                <input
                  type="text"
                  className="search-input"
                  placeholder="search..."
                  
                />
              </form>
              {/* categories */}
              <h4>Company</h4>
              <article className="companies">
                <button className="company-btn" >
                  all
                </button>
                <button className="company-btn" >
                  ikea
                </button>
                <button className="company-btn" >
                  marcos
                </button>
                <button className="company-btn" >
                  caressa
                </button>
                <button className="company-btn" >
                  liddy
                </button>
              </article>
              {/* price */}
              <h4>price</h4>
              <form className="price-form">
                <input
                  type="range"
                  className="price-filter"
                  min={0}
                  defaultValue={50}
                  max={80}
                />
              </form>
              <p className="price-value">Value : $80</p>
            </div>
          </div>
          {/* products */}
          <PageProduct></PageProduct>
        </section>
        {/* page loading */}
        <div className="page-loading" style={{ display: "none" }}>
          <h2>Loading...</h2>
        </div>
        <span id="PING_IFRAME_FORM_DETECTION" style={{ display: "none" }} />
      </>
    </>
  );
};

export default page;

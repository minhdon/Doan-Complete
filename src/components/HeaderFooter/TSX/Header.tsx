import { useRef, useState, useEffect, useContext } from "react";
import styles from "../CSS/Header.module.css";
import { ProductContext } from "../../useContext/ProductContext";
import { useNavigate } from "react-router";

export const Header = () => {
  const timerRef = useRef<number | null>(null);
  const [isProductList, setIsProductList] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);
  const productContext = useContext(ProductContext);
  const productList = isProductList ? styles.active : "";
  const headerHidden = isHeaderHidden ? styles["header-hidden"] : "";

  const navigate = useNavigate();

  const handleProductMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsProductList(true);
  };

  const handleProductMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setIsProductList(false);
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHeaderHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsHeaderHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const landingPageLink = () => {
    window.location.href = "/";
  };
  const loginPageLink = () => {
    window.location.href = "/login";
  };
  const toPayment = () => {
    navigate({
      pathname: "/Payment",
    });
  };

  return (
    <>
      <header id="header" className={headerHidden}>
        <div className={styles.logo}>
          <img
            src="/images/logo.png"
            alt="Logo công ty"
            onClick={landingPageLink}
          />
        </div>

        <nav className={styles.navigation}>
          <a href="/contact">Contact</a>
          <a
            href="/product"
            className={styles.product}
            id="product"
            onMouseEnter={handleProductMouseEnter}
            onMouseLeave={handleProductMouseLeave}
          >
            Product
            <i className="fa-solid fa-chevron-down"></i>{" "}
          </a>
          <div
            className={`${styles["list-product"]} ${productList}`}
            id="listProduct"
            onMouseEnter={handleProductMouseEnter}
            onMouseLeave={handleProductMouseLeave}
          >
            <a href="">Tất cả sản phẩm</a>
            <a href="">Thuốc theo đơn</a>
            <a href="">Thuốc không theo đơn</a>
            <a href="">Thực phẩm chức năng</a>
            <a href="">Sản phẩm bán chạy</a>
          </div>
          <input
            type="text"
            className={styles["find-product"]}
            required
            placeholder="Tìm tên thuốc"
          />
          <button className={styles["btnLogin-popup"]} onClick={loginPageLink}>
            Login
          </button>{" "}
          <button className={styles["btnShoppingCart"]} onClick={toPayment}>
            {" "}
            <i className="fa-solid fa-cart-shopping"></i> Giỏ hàng{" "}
            <div className={styles.countProduct}>
              {productContext.CountProduct}
            </div>
          </button>
        </nav>
      </header>
    </>
  );
};

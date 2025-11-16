import React, { useState, useEffect, useContext, useMemo } from "react";
import { ProductContext } from "../useContext/ProductContext";
import styles from "./CallApi.module.css";

import { SortContext } from "../useContext/priceSortContext";
import { IndexContext } from "../useContext/IndexProductContext";

const API_URL = "http://127.0.0.1:8000/?format=json";
interface ApiData {
  id: number;
  productName: string;
  cost: number;
  status: boolean;
  img: string;
  productDesc: string;
}

const PRODUCTS_PER_PAGE = 8;

const DataFetcher: React.FC = () => {
  const sortContext = useContext(SortContext);
  const indexContext = useContext(IndexContext);

  const [data, setData] = useState<ApiData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);

  const context = useContext(ProductContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Đang gọi API:", API_URL);
        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Response status:", response.status);
        console.log("Response headers:", response.headers);

        if (!response.ok) {
          const errorText = await response.text();
          console.error("HTTP Error:", response.status, errorText);
          throw new Error(
            `HTTP error! status: ${response.status} - ${
              errorText || response.statusText
            }`
          );
        }

        const result = await response.json();
        console.log("API Response:", result);

        if (!Array.isArray(result)) {
          console.warn("API response không phải là array:", result);

          if (result.results && Array.isArray(result.results)) {
            setData(result.results);
          } else if (result.data && Array.isArray(result.data)) {
            setData(result.data);
          } else {
            setData([result]);
          }
        } else {
          setData(result);
        }
      } catch (e) {
        console.error("Error fetching data:", e);
        if (e instanceof TypeError && e.message.includes("fetch")) {
          setError(
            "Không thể kết nối đến API. Kiểm tra:\n- Server Django có đang chạy không?\n- CORS đã được cấu hình chưa?\n- URL API có đúng không?"
          );
        } else if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const sortedData = useMemo(() => {
    if (!data) {
      return [];
    }

    const dataCopy = [...data];

    switch (sortContext.typeSort) {
      case "lowToHigh":
        return dataCopy.sort((a, b) => a.cost - b.cost);
      case "highToLow":
        return dataCopy.sort((a, b) => b.cost - a.cost);
      case "":
      default:
        return dataCopy;
    }
  }, [data, sortContext.typeSort]);

  if (loading) {
    return (
      <div>
        <strong>Đang tải dữ liệu...</strong>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ color: "red", padding: "20px" }}>
        <strong>Lỗi:</strong>
        <pre style={{ whiteSpace: "pre-wrap", marginTop: "10px" }}>{error}</pre>
        <p style={{ marginTop: "10px", fontSize: "14px" }}>
          💡 Mở Console (F12) để xem chi tiết lỗi
        </p>
      </div>
    );
  }

  const totalPages = Math.ceil(sortedData.length / PRODUCTS_PER_PAGE);

  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;

  const currentProducts = sortedData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  indexContext.ChangeCountIndex(indexOfFirstProduct);

  return (
    <>
      <div className={styles.hero}>
        {}
        {currentProducts.map((item) => (
          <div key={item.id} className={styles.component}>
            <img src={item.img} alt="" />
            <div className={styles.desc}>
              {item.productName} <span>hỗ trợ </span> {item.productDesc}
            </div>
            <p className={styles.price}>
              {new Intl.NumberFormat("vi-VN").format(item.cost)}đ
            </p>
            <button
              className={styles.button}
              onClick={context.ChangeCountProduct}
            >
              Chọn mua
            </button>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <nav className={styles.paginationNav}>
          <ul>
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              return (
                <li key={pageNumber}>
                  <button
                    onClick={() => handlePageChange(pageNumber)}
                    className={
                      currentPage === pageNumber ? styles.activePage : ""
                    }
                  >
                    {pageNumber}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
};

export default DataFetcher;

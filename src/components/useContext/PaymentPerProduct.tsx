/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, type ReactNode } from "react";
interface Product {
  id: number;
  productName: string;
  cost: number;
  status: boolean;
  img: string;
  productDesc: string;
}
export type paymentPerProductType = {
  paymentProducts: Product[];
  setPaymentProducts: (item: Product) => void;
};
const paymentPerProductContext = createContext<paymentPerProductType>({
  paymentProducts: [],
  setPaymentProducts: () => {},
});
type paymentPerProductProps = {
  children: ReactNode;
};
function PaymentPerProductProvider({ children }: paymentPerProductProps) {
  const [paymentProduct, setPaymentProducts] = useState<Product[]>([]);
  const handleSetPaymentProducts = (newItem: Product) => {
    setPaymentProducts((prevProducts) => {
      const existingIndex = prevProducts.findIndex(
        (item) => item.id == newItem.id
      );
      if (existingIndex < 0) {
        return [...prevProducts, newItem];
      }
      return prevProducts;
    });
  };
  const value = {
    paymentProducts: paymentProduct,
    setPaymentProducts: handleSetPaymentProducts,
  };
  return (
    <paymentPerProductContext.Provider value={value}>
      {children}
    </paymentPerProductContext.Provider>
  );
}
export { paymentPerProductContext, PaymentPerProductProvider };

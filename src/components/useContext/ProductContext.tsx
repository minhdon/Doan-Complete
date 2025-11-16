import { createContext, useState, type ReactNode } from "react";

export type ProductContextType = {
  CountProduct: number;
  ChangeCountProduct: () => void;
};

const ProductContext = createContext<ProductContextType>({
  CountProduct: 0,
  ChangeCountProduct: () => {}, // Một hàm rỗng làm mặc định
});
type ProductProviderProps = {
  children: ReactNode; // Báo cho TypeScript biết children là một React Node
};

function ProductProvider({ children }: ProductProviderProps) {
  const [CountProduct, setCountProduct] = useState(0);
  const ChangeCountProduct = () => {
    setCountProduct((CountProduct) => CountProduct + 1);
  };

  const value = {
    CountProduct,
    ChangeCountProduct,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };

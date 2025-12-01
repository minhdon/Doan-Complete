import { createContext, useState, type ReactNode } from "react";

export type ProductContextType = {
  CountProduct: number;
  ChangeCountProduct: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ProductContext = createContext<ProductContextType>({
  CountProduct: 0,
  ChangeCountProduct: () => {},
});
type ProductProviderProps = {
  children: ReactNode;
};

function ProductProvider({ children }: ProductProviderProps) {
  const [CountProduct, setCountProduct] = useState(0);
  const ChangeCountProduct = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCountProduct((CountProduct) => CountProduct + 1);
    event.stopPropagation();
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

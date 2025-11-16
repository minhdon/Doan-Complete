import { createContext, useState, type ReactNode } from "react";

export type IndexContextType = {
  CountIndex: number;
  ChangeCountIndex: (newIndex: number) => void;
};

const IndexContext = createContext<IndexContextType>({
  CountIndex: 0,
  ChangeCountIndex: () => {}, // Một hàm rỗng làm mặc định
});

type IndexProviderProps = {
  children: ReactNode; // Báo cho TypeScript biết children là một React Node
};

function IndexProvider({ children }: IndexProviderProps) {
  const [CountIndex, setCountIndex] = useState(0);

  const ChangeCountIndex = (firstIndex: number) => {
    setCountIndex(firstIndex);
  };

  const value = {
    CountIndex,
    ChangeCountIndex,
  };

  return (
    <IndexContext.Provider value={value}>{children}</IndexContext.Provider>
  );
}

export { IndexContext, IndexProvider };

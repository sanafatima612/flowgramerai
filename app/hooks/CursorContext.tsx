"use client";
import { createContext, useContext, useState } from "react";

const CursorContext = createContext({
  value: null as string | null,
  setValue: (v: string | null) => {},
});

export const useCursor = () => useContext(CursorContext);

export default function CursorDotProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [value, setValue] = useState<string | null>(null);

  return (
    <CursorContext.Provider value={{ value, setValue }}>
      {children}  
    </CursorContext.Provider>
  );
}

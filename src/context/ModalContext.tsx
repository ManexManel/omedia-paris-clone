"use client";

import { createContext, useContext, useState } from "react";

interface ModalContextType {
  open: boolean;
  setOpen: (v: boolean) => void;
}

const ModalContext = createContext<ModalContextType>({
  open: false,
  setOpen: () => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}

import { createContext, useContext, useState, type FC, type ReactNode } from "react";

type DialogContext = {
  value: ReactNode
  setValue: (newValue: ReactNode) => void;
};

const context = createContext<DialogContext | undefined>(undefined);

export const DialogProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState<ReactNode>(null);

  return (
    <context.Provider value={{ value, setValue }}>
      {children}
    </context.Provider>
  );
};

export const useDialog = (): DialogContext => {
  const ctxt = useContext(context);
  if (!ctxt) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return ctxt;
};


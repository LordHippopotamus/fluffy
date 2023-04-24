import { createContext, useState } from 'react';

export const DialogContext = createContext();

const DialogProvider = ({ children }) => {
  const [dialog, setDialog] = useState(null);

  return <DialogContext.Provider value={[dialog, setDialog]}>{children}</DialogContext.Provider>;
};

export default DialogProvider;

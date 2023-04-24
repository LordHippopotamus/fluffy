import { DialogContext } from 'context/dialog';
import { useContext } from 'react';

export const useDialog = () => useContext(DialogContext);

export const useLoginDialog = () => {
  const [dialog, setDialog] = useContext(DialogContext);
  return {
    isOpen: dialog === 'login',
    open: () => setDialog('login'),
    close: () => setDialog(null),
  };
};

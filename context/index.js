import DialogProvider from './dialog';
import IdentityProvider from './identity';

const ContextProvider = ({ children }) => (
  <IdentityProvider>
    <DialogProvider>{children}</DialogProvider>
  </IdentityProvider>
);

export default ContextProvider;

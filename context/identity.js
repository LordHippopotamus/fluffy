import GoTrue from 'gotrue-js';
import { createContext, useEffect, useState } from 'react';

export const IdentityContext = createContext();
export const UserContext = createContext();

const IdentityProvider = ({ children }) => {
  const identity = new GoTrue({
    APIUrl: 'https://fluffy-lordhippopotamus.netlify.app/.netlify/identity',
    audience: '',
    setCookie: true,
  });

  const [user, setUser] = useState();

  // useEffect here helps to avoid hydration error

  useEffect(() => {
    setUser(identity.currentUser());
  }, [identity.currentUser()]);

  return (
    <IdentityContext.Provider value={identity}>
      <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>
    </IdentityContext.Provider>
  );
};

export default IdentityProvider;

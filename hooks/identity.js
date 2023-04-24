import { IdentityContext, UserContext } from 'context/identity';
import { useContext } from 'react';

export const useIdentity = () => useContext(IdentityContext);

export const useSignUp = () => {
  const identity = useContext(IdentityContext);
  const [user, setUser] = useContext(UserContext);
  return async (email, password, metadata) => {
    await identity.signup(email, password, metadata);
    const newUser = await identity.login(email, password, true); //it needs to save user between reloads
    setUser(newUser);
  };
};

export const useSignIn = () => {
  const identity = useContext(IdentityContext);
  const [user, setUser] = useContext(UserContext);
  return async (email, password) => {
    const newUser = await identity.login(email, password, true);
    setUser(newUser);
  };
};

export const useSignOut = () => {
  const identity = useContext(IdentityContext);
  const [user, setUser] = useContext(UserContext);
  const currentUser = identity.currentUser();
  return async () => {
    await currentUser.logout();
    setUser(null);
  };
};

export const useUser = () => {
  const [user] = useContext(UserContext);
  return user;
};

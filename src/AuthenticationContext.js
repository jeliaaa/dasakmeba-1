// AuthenticationContext.js

import React, { createContext, useState } from 'react';

const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const signIn = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const signOut = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated, user, signIn, signOut }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationProvider, AuthenticationContext };

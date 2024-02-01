import React, { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showTabs, setShowTabs] = useState(false);
  
  const allowedPages = ['add-product', 'edit-product'];

  const toggleAdminStatus = () => {
    setIsAdmin(!isAdmin);
  };

  const toggleShowTabs = () => {
    setShowTabs(prevShowTabs => !prevShowTabs);
  };

  return (
    <AdminContext.Provider value={{ isAdmin, allowedPages, showTabs, toggleAdminStatus, toggleShowTabs }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  return context;
};
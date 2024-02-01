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
    console.log('toggleShowTabs was called');
    setShowTabs(prevShowTabs => {
      console.log('showTabs is currently', prevShowTabs);
      console.log('showTabs will be set to', !prevShowTabs);
      return !prevShowTabs;
    });
  };

  return (
    <AdminContext.Provider value={{ isAdmin, allowedPages, showTabs, toggleAdminStatus, toggleShowTabs }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within a AdminProvider');
  }
  return context;
};
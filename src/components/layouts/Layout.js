import React from 'react';
import PageHeader from '../pageHeader/PageHeader';

const Layout = ({ children }) => {
  return (
    <>
      <PageHeader></PageHeader>
      <main>{children}</main>
    </>
  );
};

export default Layout;

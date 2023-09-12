import React from 'react';
import { BrowserRouter, Routes as Router, Route, Navigate } from 'react-router-dom';
import { Login, Gestao, Home } from './pages';

export function Routes() {
  const navigateTo = (path) => {
    return <Navigate to={path} />;
  };

  return (
    <BrowserRouter>
      <Router>
        <Route path={'/'} element={<Login navigateTo={navigateTo} />} />
        <Route path={'/gestao'} element={<Gestao />} />
        <Route path={'/home'} element={<Home />} />
      </Router>
    </BrowserRouter>
  );
}

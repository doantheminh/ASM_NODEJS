import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { BaseClient } from './components/layout/client/base-client';

import { HomePage } from './pages/client/home';
import { ProductPage } from './pages/client/product';
import { ProductDetailPage } from './pages/client/productdetail';
import { CartPage } from './pages/client/cart';
import { LoginPage } from './pages/client/login';
import { RegisterPage } from './pages/client/register';

import { BaseAdmin } from './components/layout/admin/base-admin';

import { Dashboard } from './pages/admin/dashboard';
import { AdminProduct } from './pages/admin/product';
import { AdminUser } from './pages/admin/user';
import { EditPage } from './pages/admin/edit';
import { ErrorPage } from './pages/error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseClient />} >
          <Route index element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/productdetail/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/admin" element={sessionStorage.getItem('user') === 'Admin' ? (<BaseAdmin />) : (<ErrorPage />)} >
          <Route index element={<Dashboard />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<AdminProduct />} />
          <Route path="/admin/product/edit/:id" element={<EditPage />} />
          <Route path="/admin/user" element={<AdminUser />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App

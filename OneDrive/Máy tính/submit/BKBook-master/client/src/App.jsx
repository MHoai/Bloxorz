import { Route, Routes } from "react-router-dom"
import HomeLayout from "./layout/HomeLayout/HomeLayout"
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import MemberLayout from './layout/MemberLayout/MemberLayout';
import BooksList from './pages/BooksList/BooksList';
import HomeLayoutFooter from './layout/HomeLayoutFooter/HomeLayoutFooter';
import Error from './pages/Error/Error';
import AdminLayout from './layout/AdminLayout/AdminLayout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NewsDetail from "./pages/NewsDetail/NewsDetail";
import Checkout from "./pages/Checkout/Checkout";
import AuthLayout from './layout/AuthLayout/AuthLayout';
import Dashboard from "./pages/Member/Dashboard/Dashboard";
import Edit from "./pages/Member/Edit/Edit";
import News from './pages/Admin/News/News';
import AdminDashboard from './pages/Admin/Dashboard/Dashboard';
import { useState } from "react";
import ProductsDetail from './pages/ProductsDetail/ProductsDetail';
import NewsUser from './pages/NewsUser/NewsUser';
import ContactUs from "./pages/ContactUs/ContactUs";
import FAQ from "./pages/FAQ/FAQ";


function App() {

  const [showHoverPanel, setShowHoverPanel] = useState(false);

  return (
    <Routes>
    
      <Route path="/" element={<HomeLayoutFooter showHoverPanel={showHoverPanel} setShowHoverPanel={setShowHoverPanel} />}>
        <Route index element={<Home />} />
        <Route path="news-detail" element={<NewsDetail />} />
        <Route path="books-list" element={<BooksList />} />
      </Route>

      <Route path="/p" element={<HomeLayout showHoverPanel={showHoverPanel} setShowHoverPanel={setShowHoverPanel} />}>
        <Route path="cart" element={<Cart />} />
        <Route path="ProductsDetail" element={<ProductsDetail />} />
        <Route path="NewsUser" element={<NewsUser />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="FAQ" element={<FAQ />} />
      </Route>

      <Route path="/member" element={<MemberLayout showHoverPanel={showHoverPanel} setShowHoverPanel={setShowHoverPanel} />}>
        <Route index element={<Dashboard />} />
        <Route path="edit" element={<Edit />} />
      </Route>

      <Route path="/auth" element={<AuthLayout showHoverPanel={showHoverPanel} setShowHoverPanel={setShowHoverPanel} />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="news" element={<News />} />
      </Route>

      <Route path="/*" element={<Error />} />

    </Routes>
  )
}

export default App

import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/global/HomePage';
import { ContactUs } from './pages/global/ContactUs';
import Shops from './pages/global/Shops';
import Cart from './pages/global/Cart';
import SingleProduct from './pages/global/SingleProduct';
import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShops from './pages/admin/MaintainShops';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import NotFound from './pages/global/NotFound';
import NavigationBar from './components/NavigationBar';
import Supplier from './pages/admin/Supplier';

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path='' element={ <HomePage /> } />
        <Route path='contact' element={ <ContactUs /> } />
        <Route path='shops' element={ <Shops /> } />
        <Route path='cart' element={ <Cart /> } />
        <Route path='product/:index' element={ <SingleProduct /> } />

        <Route path='admin' element={ <AdminHome /> } />
        <Route path='admin/add-product' element={ <AddProduct /> } />
        <Route path='admin/edit-product/:index' element={ <EditProduct /> } />
        <Route path='admin/maintain-products' element={ <MaintainProducts /> } />
        <Route path='admin/maintain-categories' element={ <MaintainCategories /> } />
        <Route path='admin/maintain-shops' element={ <MaintainShops /> } />
        <Route path='admin/supplier' element={ <Supplier /> } />

        <Route path='login' element={ <Login /> } />
        <Route path='signup' element={ <Signup /> } />

        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;

// 13.  07.03
// 14.  14.03   11:00-14:15   veebipood lõpuni
// 15.  18.03   uue Eng projekti -> 
//           ostukorvis kogus, tarnija/pakiautomaadid, ostukorvi salvestus
// 16.  21.03   10:00-13:15 disain
// 17.  25.03   tõlge/Bootstrap-MUI/Tooted  ---> KOJU proovitöö, Nortali Bakery-Shop
// ostukorvis iga kord täpselt 2 komakohta, pakiautomaatides ainult eesti omad, loader
//      02.04   T   9.30-10.15
// 18.  08.04 ---> 2ak/h  10.00-11.30
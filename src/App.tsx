import './styles/App.scss';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from "./components/Header";
import Home from './components/pages/HomePage';
import ProductPage from './components/pages/ProductsPage';
import ToDosPage from './components/pages/ToDosPage';
import UsersPage from './components/pages/UsersPage';
import ProductDetailsPage from './components/ProductDetails';
import UserDetailsPage from './components/UserDetails';
import ErrorPage from './components/pages/ErrorPage';
import ProductList from './components/ProductList';
import UserList from './components/UserList';



function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} >
      </Route>

      <Route path="/products" element={<ProductPage/>} >
        <Route index element={<ProductList/>} />
        <Route path="description/:id" element={<ProductDetailsPage/>}/>
      </Route>

      <Route path="/to-dos" element={<ToDosPage/>} />
      <Route path="/users" element={<UsersPage/>} >

        <Route index element={<UserList/>} />
        <Route path="description/:id" element={<UserDetailsPage/>}/>

      </Route>
      <Route path="/*" element={<ErrorPage/>} />

        
         
    </Routes>
</>

  );
}

export default App;

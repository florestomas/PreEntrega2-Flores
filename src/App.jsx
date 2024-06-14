import './App.css'
import ProductsComponent from './components/ProductsView/ProductsComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarComponent from './components/navigation/NavBarComponent';
import HomeComponent from './components/HomeView/HomeComponent';
import CartComponent from './components/CartView/CartComponent';
import SingleProd from './components/ProductView/SingleProduct';
import { ProductProvider } from './context/ProductsContext';



function App() {

  return (

    <ProductProvider>
      <>
        <BrowserRouter>
          <NavBarComponent/>
            <Routes>
              <Route exact path="/" element={<HomeComponent />} />
              <Route exact path="/Libertadores" element={<ProductsComponent category={"libertadores"}/>} />
              <Route exact path="/Sudamericanas" element={<ProductsComponent category={"sudamericanas"}/>} />
              <Route exact path="/Recopas" element={<ProductsComponent category={"recopas"}/>} />
              <Route exact path="/intercontinental/:prodId" element={<SingleProd />} />
              <Route exact path="/libertadores/:prodId" element={<SingleProd/>} />
              <Route exact path="/recopas/:prodId" element={<SingleProd />} />
              
              <Route exact path="/cart" element={<CartComponent />} />
              
            </Routes>
        </BrowserRouter>
      </>
      </ProductProvider>
  )
}


/*



*/
export default App

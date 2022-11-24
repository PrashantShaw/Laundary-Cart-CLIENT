import './App.css';
import Header from './components/Homepage/Nav';
import Middle from './components/Homepage/Homepage';
import { Footer } from './components/Homepage/Footer';
import Register from './components/Register/Register';
import TopNavBar from './components/CreatingOrder/CreatingOrder';
import Product from './components/OrdersList/OrdersList';
function App() {
  return (
    <>
    <Header/>
    {/* <Middle/> */}
    <Register/>
    <Footer/>
    <Product/>z
    <TopNavBar />
    </>
  );
}


export default App;

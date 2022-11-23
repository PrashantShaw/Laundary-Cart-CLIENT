import './App.css';
import Header from './components/Homepage/Nav';
import Middle from './components/Homepage/Homepage';
import { Footer } from './components/Homepage/Footer';
import Register from './components/Register/Register';

function App() {
  return (
    <>
    <Header/>
    {/* <Middle/> */}
    <Register/>
    <Footer/>
    </>
  );
}

export default App;

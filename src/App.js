import './App.css';
import HomePage from './components/Homepage/Homepage';
import Register from './components/Register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrdersListPage from './components/CreatingOrder/OrdersListPage';
import CreateOrder from './components/CreatingOrder/CreateOrder';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/orders' element={<OrdersListPage />} />
          <Route path='/create' element={<CreateOrder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

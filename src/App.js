
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Collection from './Component/Collection';
import ProductDetail from './Component/ProductDetail';
// import Portal from './Component/portal/Portal';
import Modal from './Component/portal/Modal';
import DataApp from './DataApp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div >
        <DataApp>

       
        <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/collection' element={<Collection/>} />
              <Route path='/product/:id' element={<ProductDetail/>}/>
              <Route path='/Modal/:id' element={<Modal/>}/>
              
          </Routes>
        </BrowserRouter>
        </DataApp>
    </div>
  );
}

export default App;

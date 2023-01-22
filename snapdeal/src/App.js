import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';


import Footer from './pages/Footer';
import Home from './pages/Home';
import { SliderCard } from './components/SliderCard';
import Login from './pages/Login';
import Register from './pages/Register';
import AllRoutes from './components/AllRoutes';
import Checkout from './pages/Checkout';
import Loader from './components/Loader';


function App() {
  return (
    <div className="App">
      
   <AllRoutes />
   <Footer />
   

    </div>
  );
}

export default App;

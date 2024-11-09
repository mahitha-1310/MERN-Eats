
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { CartProvider } from './components/ContextReducer.jsx';
import Cart from './screens/Cart.jsx';

function App() {
  return (

    <CartProvider>
    <Router>
      <div>
      <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/createuser" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
  
        </Routes>
      </div>
    </Router>
    </CartProvider>

  );
}

export default App;

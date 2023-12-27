import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Login from './components/Login';
import Signin from './components/Signin';
import { Routes,Route } from 'react-router-dom';
import Products from './components/Products';
import About from './components/About';
import Blogs from './components/Blogs';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route> 
      <Route path='/products' element={<Products/>}></Route>
      <Route path="/about" element={<About/>} />
      <Route path="/blogs" element={<Blogs />} />




    </Routes>
    
   
    <Footer/>
     
    </div>
  );
}

export default App;

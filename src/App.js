import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InnovistaTech from './pages/InnovistaTech/InnovistaTech';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="conteiner">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/innovistaTech' element={<InnovistaTech />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;


import './App.css';
import { Formulario } from './components/Formulario/Fomulario';
import { Footer } from './components/Formulario/Footer/Footer';
import { Habilities } from './components/Habilities/Habilities';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Testimonios } from './components/Testimonios/Testimonios';
import { Ventajas } from './components/Ventajas/Ventajas';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Habilities/>
      <Ventajas/>
      <Portfolio/>
      <Testimonios/>
      <Formulario/>
      <Footer/>
    </div>
  );
}

export default App;

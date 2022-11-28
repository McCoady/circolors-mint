import './App.css';
import { Header, Footer, Info, Navbar, SketchComp } from "./components";

export default function App() {
  return (
    <div className="App">
      <Header />
      <SketchComp />
      <div className='boxed'>
        <Info />
      </div>
      <Footer />
    </div>
  );
}

import './App.css';
import { Header, Footer, Info } from "./components";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className='boxed'>
        <Info />
      </div>
      <Footer />
    </div>
  );
}

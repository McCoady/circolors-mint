import './App.css';
import { Header, Footer, Info, OutputGallery, Navbar } from "./components";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <h2>Home</h2>
      <Info />
      <OutputGallery />
      <Footer />
    </div>
  );
}

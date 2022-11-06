import { Header, Footer, Navbar } from "../components";
import "./styles/mint.css";

export default function Mint() {
    return (
        <div className="Mint">
            <Header />
            <Navbar />
            <h2>Mint Date</h2>
            <div>Mint Price: 0.0256eth</div>
            <div># / 420 minted</div>
            <div>Conditionally render site based on minting stage</div>
            <div>Render latest mint here?</div>
            <Footer />
        </div>
    )
};
import twitter from "../img/twitter.png";
import discord from "../img/discord.png";
import opensea from "../img/opensea.png";
import etherscan from "../img/etherscan.png";
import "./styles/footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://www.twitter.com/CircolorsDAO"><img src={twitter} className="link_btn" alt="twitter link" /></a>
            <a href="https://discord.gg/UJtkgAgxUV"><img src={discord} className="link_btn" alt="discord link" /></a>
            <a href="https://opensea.io/collection/scrawl-by-pixelwank"><img src={opensea} className="link_btn" alt="opensea link" /></a>
            <a href="https://etherscan.io/address/0x98aeae2e583f2434d9b3d2fd7b3b9dbe32dc8ca8"><img src={etherscan} className="link_btn" alt="etherscan link" /></a>
        </div>
    )
}
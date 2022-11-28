import { Header, Footer, Info, Minter, SketchComp, Frame } from "../components";
import { useContractRead } from "wagmi";
import "./styles/mint.css";

const contractAbi = require("../abi/Scrawl.json")

export default function Mint() {
    const contractAddress = "0x98AeAe2E583F2434D9b3D2fd7b3B9dbe32DC8Ca8";

    const totSupply = useContractRead({
        address: contractAddress,
        functionName: "totalSupply",
        abi: contractAbi,
    })
    const genSaleStart = useContractRead({
        address: contractAddress,
        functionName: "generalSaleStart",
        abi: contractAbi,
    })
    const mintDeadline = useContractRead({
        address: contractAddress,
        functionName: "mintDeadline",
        abi: contractAbi,
    })

    const date = new Date(Number(genSaleStart.data) * 1000)
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = "Nov " + day + " " + hours + ":" + minutes

    const now = Math.floor(Date.now() / 1000);

    console.log(Number(mintDeadline.data))
    console.log(now)
    return (
        <div className="Mint">
            <Header />
            <SketchComp />
            <div className="boxed">
                {now < Number(mintDeadline.data) ? <Minter address={contractAddress} contractAbi={contractAbi} /> : <div>MINT CLOSED</div>}
                {now > date ? <div>General Sale Now Open!</div> : <div>General Sale opens {time} for 24 hours</div>}
                <div> {Number(totSupply.data)} / 420 minted</div>
                <div>Mint Prices: </div>
                <div>Circolors Presale: 0.0256eth</div>
                <div>Allowlist/General Sale: 0.0365eth</div>
                <div>Latest Mint: #{totSupply.data - 1}</div>
            </div>
            <Frame address={contractAddress} totalSupply={totSupply.data} contractAbi={contractAbi} />
            <div className="boxed">
                <Info />
            </div>
            <Footer />
        </div>
    )
};
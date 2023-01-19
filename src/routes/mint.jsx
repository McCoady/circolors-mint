import { Header, Profile, Footer, Info, Minter } from "../components";
import { useContractRead } from "wagmi";
import "./styles/mint.css";

import chainWavesAbi from "../abi/ChainWaves";

export default function Mint() {
    const contractAddress = "0x3034EC3Ce1fcC4F6741455fdc9971E6ba8A62ef7";

    const totSupply = useContractRead({
        address: contractAddress,
        functionName: "totalSupply",
        abi: chainWavesAbi,
    })
    const mintStart = useContractRead({
        address: contractAddress,
        functionName: "MINT_START",
        abi: chainWavesAbi,
    })
    const snowcrashReserve = useContractRead({
        address: contractAddress,
        functionName: "snowcrashReserve",
        abi: chainWavesAbi,
    })

    const now = Math.floor(Date.now() / 1000);

    return (
        <div className="Mint">
            <div className="boxed">
                <Profile />
            </div>

            <Header />
            <div className="svg_output">
                <svg viewBox='0 0 20 20' width='390' height='390' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMin'><rect width='20' height='20' fill='#009638' /><defs><g id='chars' font-family='monospace'><text x='-1' y='0'>$0$0$0$0$0$0</text><text x='-3' y='4'>$50N$50N$50N</text><text x='-1' y='8'>$$$$$$$$$$$$</text><text x='-3' y='12'>$N05$N05$N05</text><text x='-1' y='16'>$0$0$0$0$0$0</text><text x='-3' y='20'>$50N$50N$50N</text><text x='-1' y='24'>$$$$$$$$$$$$</text><text x='-3' y='28'>$N05$N05$N05</text><animate attributeName='font-size' attributeType='XML' values='80%;50%;80%' begin='0s' dur='15s' repeatCount='indefinite' /></g><filter id='turbulence1'><feTurbulence type='turbulence' baseFrequency='0.35' numOctaves='3' result='noise' seed='14' /><feDisplacementMap in='SourceGraphic' in2='noise' scale='3' /></filter></defs><use href='#chars' y='0' x='0' filter='url(#turbulence1)' width='20' height='20' fill='#F6D800' /><use href='#chars' y='3' x='0' filter='url(#turbulence1)' width='20' height='20' fill='#002672' /></svg>
                <svg viewBox='0 0 20 20' width='390' height='390' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMin'><rect width='20' height='20' fill='#013026' /><defs><g id='chars' font-family='monospace'><text x='-1' y='0'>777777777777</text><text x='-3' y='4'>7Wa27Wa27Wa2</text><text x='-1' y='8'>7a7a7a7a7a7a</text><text x='-3' y='12'>72aW72aW72aW</text><text x='-1' y='16'>777777777777</text><text x='-3' y='20'>7Wa27Wa27Wa2</text><text x='-1' y='24'>7a7a7a7a7a7a</text><text x='-3' y='28'>72aW72aW72aW</text><animate attributeName='font-size' attributeType='XML' values='80%;35%;80%' begin='0s' dur='15s' repeatCount='indefinite' /></g><filter id='turbulence2'><feTurbulence type='turbulence' baseFrequency='0.85' numOctaves='3' result='noise' seed='11' /><feDisplacementMap in='SourceGraphic' in2='noise' scale='3' /></filter></defs><use href='#chars' y='0' x='0' filter='url(#turbulence2)' width='20' height='20' fill='#a1ce3f' /><use href='#chars' y='3' x='0' filter='url(#turbulence2)' width='20' height='20' fill='#107e57' /></svg>
                <svg viewBox='0 0 20 20' width='390' height='390' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMin'><rect width='20' height='20' fill='#3a0ca3' /><defs><g id='chars' font-family='monospace'><text x='-1' y='0'>9?9?9?9?9?9?</text><text x='-3' y='4'>94?@94?@94?@</text><text x='-1' y='8'>999999999999</text><text x='-3' y='12'>9@?49@?49@?4</text><text x='-1' y='16'>9?9?9?9?9?9?</text><text x='-3' y='20'>94?@94?@94?@</text><text x='-1' y='24'>999999999999</text><animate attributeName='font-size' attributeType='XML' values='80%;25%;80%' begin='0s' dur='15s' repeatCount='indefinite' /></g><filter id='turbulence'><feTurbulence type='turbulence3' baseFrequency='0.55' numOctaves='3' result='noise' seed='17' /><feDisplacementMap in='SourceGraphic' in2='noise' scale='3' /></filter></defs><use href='#chars' y='0' x='0' filter='url(#turbulence)' width='20' height='20' fill='#f72585' /><use href='#chars' y='3' x='0' filter='url(#turbulence3)' width='20' height='20' fill='#4cc9f0' /><use href='#chars' y='6' x='0' filter='url(#turbulence3)' width='20' height='20' fill='#7209b7' /></svg>
            </div>
            <div className="boxed">
                {now > Number(mintStart.data) && Number(totSupply.data) < 512 ? <Minter address={contractAddress} contractAbi={chainWavesAbi} /> : <div>MINT CLOSED</div>}
                <div> {Number(totSupply.data)} / 512 minted</div>
                <div>Mint Price: 0.0256 ether </div>
            </div>
            <div className="boxed">
                <Info />
            </div>
            <Footer />
        </div>
    )
};
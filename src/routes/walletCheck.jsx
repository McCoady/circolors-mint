import { useState } from "react";
import { useAccount, useSignMessage } from "wagmi"
import { Header, Footer, Navbar } from "../components";
import { ErrorModal } from "../components/UI";
import "./styles/walletCheck.css";

export default function WalletCheck() {
    const [error, setError] = useState(false);
    const addresses = [
        {
            address: "0x9ea04B953640223dbb8098ee89C28E7a3B448858",
            amount: 5
        },
        {
            address: "0xDd5e8C876338B1AB1635cf85Dd67bB6c4e7467Fa",
            amount: 1
        },
        {
            address: "0x4B671aDE2A853613E46c7c0A86D7DF547d098b83",
            amount: 9
        },
    ];
    const snapshotDate = "DATE"
    const { address, isConnected } = useAccount();

    const [message, setMessage] = useState(address);

    const { data, isSuccess, isError, signMessage } = useSignMessage()

    const buttonClickHandler = () => {
        if (addresses.some(e => e.address === address.toString() && e.amount > 2)) {
            console.log("address in array");
            signMessage({ message });

            //await sign success
            //return # of eligible NFTs
            //prompt to tweet
        } else if (addresses.some(e => e.address === address.toString() && e.amount < 3)) {
            console.log("not enough eligible nfts");
            setError({
                title: "ERROR",
                message: `Sorry this address has less than three eligible NFTs.`
            })
        } else {
            console.log("address not in array");
            setError({
                title: "ERROR",
                message: "Sorry this address has no eligible NFTs."
            });
        }
    };

    const changeHandler = (event) => {
        event.preventDefault();
        setMessage(event.target.value);
        console.log(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div className="WalletCheck">
            {error && <ErrorModal onConfirm={errorHandler} message={error.message} title={error.title} />}
            <Header />
            <Navbar />
            <h2 className="head">Check if you're eligible for SCRAWL allow list:</h2>
            <div className="btn-area">
                {isConnected ? <div>
                    <div>If you wish to mint from a different address enter it here:</div>
                    <input type="text" onChange={changeHandler} value={message} className="sig_input" />
                    <br /><button onClick={() => buttonClickHandler()} className="btn">Check</button>
                </div> : <div>Please connect to your wallet</div>}
                {isSuccess && <div className="sig_msg">Signature: {data}</div>}
                {isError && <div className="sig_msg">Error signing message </div>}
            </div>
            <div className="rules">
                <h3 className="rules_title">Allow List Rules</h3>
                <div className="rules_content">
                    <p>For this launch we're trying something different when it comes to allowlists. Instead being at the mercy of RNG, spots will be given based on number of NFTs from eligible collections in your wallet.</p>
                    <div className="break"></div>
                    <p>Eligible collections are as follows:</p>
                    <div className="break"></div>
                    <p>Each collection was snapshot on {snapshotDate} so only NFTs you owned at this time will count towards your score.</p>
                </div>
                <Footer />
            </div>
        </div>
    )
};
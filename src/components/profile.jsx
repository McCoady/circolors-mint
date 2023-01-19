import {
    useAccount,
    useConnect,
    useDisconnect,
    useNetwork,
    useEnsName,
} from 'wagmi';
import { useState } from "react";

import "./styles/profile.css";

export default function Profile() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    };
    const { chain } = useNetwork();
    console.log(chain.name)
    const { address, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect, connectors, error, isLoading, pendingConnector } =
        useConnect()
    const { disconnect } = useDisconnect()

    const walletButtons = connectors.map((connector) => (
        <button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
            className="connect_btn"
        >
            {connector.name}
            {!connector.ready && ' (unsupported)'}
            {isLoading &&
                connector.id === pendingConnector?.id &&
                ' ...'}
        </button>
    ))
    if (isConnected) {
        return (
            <div className='connected'>

                <button onClick={disconnect} className="connect_btn">Disconnect</button>
                <div className='connected_address'>{ensName ? `${ensName}` : address.slice(0, 8)}</div>
                {chain.name != "Chain 1" && <div>Connected to {chain.name}, plz switch to Mainnet</div>}
            </div>
        )
    }


    return (
        <div className='connect'>
            <button className="connect_btn" onClick={handleOpen}>Connect Wallet</button>
            {open ? (walletButtons) : null}


            {error && <div>{error.message}</div>}
        </div>
    )
}
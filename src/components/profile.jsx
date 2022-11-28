import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsName,
} from 'wagmi';

import "./styles/profile.css";

export default function Profile() {
    const { address, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect, connectors, error, isLoading, pendingConnector } =
        useConnect()
    const { disconnect } = useDisconnect()

    if (isConnected) {
        return (
            <div className='connected'>
                <div className='connected_address'>{ensName ? `${ensName}` : address.slice(0, 8)}</div>
                <button onClick={disconnect} className="connect_btn">Disconnect</button>
            </div>
        )
    }

    return (
        <div className='connect'>
            {connectors.map((connector) => (
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
            ))}

            {error && <div>{error.message}</div>}
        </div>
    )
}
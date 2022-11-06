import "./styles/walletModal.css";

export default function WalletModal(props) {
    return (
        <div>
            {props.connectors.map((connector) => (
                <button
                    disabled={!props.connector.ready}
                    key={props.connector.id}
                    onClick={() => props.connect({ connector })}
                    className="connect_btn"
                >
                    {connector.name}
                    {!connector.ready && ' (unsupported)'}
                    {props.isLoading &&
                        connector.id === props.pendingConnector?.id &&
                        ' ...'}
                </button>
            ))}

            {props.error && <div>{props.error.message}</div>}
        </div>
    )
};
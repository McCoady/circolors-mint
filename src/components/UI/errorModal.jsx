import "./styles/errorModal.css";

export default function ErrorModal(props) {
    return (
        <div>
            <div className="backdrop" onClick={props.onConfirm}>
                <div className="modal">
                    <header className="header">
                        <h2>{props.title}</h2>
                    </header>
                    <div className="content">
                        {props.message}
                    </div>
                    <footer className="actions">
                        <button onClick={props.onConfirm} className="modal_btn">Okay</button>
                    </footer>
                </div>
            </div>
        </div>
    )
}
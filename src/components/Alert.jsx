
const Alert = ({ alarma, type }) => {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {alarma}
        </div>
    );
}

export default Alert;
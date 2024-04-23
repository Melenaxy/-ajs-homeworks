export default function IconSwitch({ icon, onSwitch }) {
    return (
        <div className={'icon-container'}>
            <span className={'material-icons'} onClick={onSwitch}>
                {icon}
            </span>
        </div>
    );
}
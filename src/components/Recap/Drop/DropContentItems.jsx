export default function DropContentItems({ curItem, handleClick, children }) {
    return (
        <button onClick={() => handleClick(curItem)}>
            {children}
        </button>
    )
}
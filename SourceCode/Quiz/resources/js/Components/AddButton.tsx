export default function AddButton({
    onClick,
    className,
}: {
    onClick?: React.MouseEventHandler;
    className?: string;
}) {
    return (
        <button className={className} onClick={onClick}>
            +
        </button>
    );
}

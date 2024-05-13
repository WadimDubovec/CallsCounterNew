export default function MyButton({ children, onClick, className, disabled}) {
    return (
        <button onClick={onClick} className={className} disabled={disabled}>{children}</button >
    )
}
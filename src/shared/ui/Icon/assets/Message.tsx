interface IMessageProps {
    className?: string;
}

export const Message = ({ className }: IMessageProps) => (
    <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5H23V18.7619H9.90909L5 22V19.5714V5Z" stroke="#868C92" strokeWidth="2" />
        <path d="M19 10H9" stroke="#868C92" strokeWidth="2" />
        <path d="M14 14H9" stroke="#868C92" strokeWidth="2" />
    </svg>
);

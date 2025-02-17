interface IServiceProps {
    className?: string;
}

export const Service = ({ className }: IServiceProps) => (
    <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="6" height="6" stroke="#868C92" strokeWidth="2" />
        <rect x="5" y="17" width="6" height="6" stroke="#868C92" strokeWidth="2" />
        <rect x="17" y="5" width="6" height="6" stroke="#868C92" strokeWidth="2" />
        <rect x="17" y="17" width="6" height="6" stroke="#868C92" strokeWidth="2" />
    </svg>
);

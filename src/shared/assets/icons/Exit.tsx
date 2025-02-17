interface IExitProps {
    className?: string;
}

export const Exit = ({ className }: IExitProps) => (
    <svg
        className={className}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M18 10.4444V6H5V22H18V17.5556" stroke="#868C92" strokeWidth="2" />
        <path d="M14 14.0001H24M24 14.0001L20.6667 10.5M24 14.0001L20.6667 17.5799" stroke="#868C92" strokeWidth="2" />
    </svg>
);

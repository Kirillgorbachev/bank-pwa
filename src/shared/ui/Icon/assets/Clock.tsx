interface IClockProps {
    className?: string;
}

export const Clock = ({ className }: IClockProps) => (
    <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="18" height="18" stroke="#868C92" strokeWidth="2" />
        <path d="M14 9V15H19" stroke="#868C92" strokeWidth="2" />
    </svg>
);

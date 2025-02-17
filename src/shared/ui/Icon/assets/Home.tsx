interface IHomeProps {
    className?: string;
}

export const Home = ({ className }: IHomeProps) => (
    <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg">
        <path d="M5.71423 11.4282L15.9999 5.71387L26.2857 11.4282" stroke="#868C92" strokeWidth="2" />
        <path d="M16 13.7139V26.2853" stroke="#868C92" strokeWidth="2" />
        <path d="M10.2858 13.7139V26.2853" stroke="#868C92" strokeWidth="2" />
        <path d="M21.7142 13.7139V26.2853" stroke="#868C92" strokeWidth="2" />
    </svg>
);

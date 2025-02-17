export const CreditIcon = ({ props }: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={36} fill="none" {...props}>
        <rect width={36} height={24} x={24} fill="#FA193B" rx={2} transform="rotate(90 24 0)" />
        <ellipse cx={15.001} cy={30} fill="url(#a)" rx={5} ry={2} />
        <ellipse cx={12.041} cy={23.677} fill="url(#b)" rx={2.59} ry={1.597} transform="rotate(30 12.041 23.677)" />
        <ellipse cx={17} cy={21.018} fill="url(#c)" rx={2} ry={1} transform="rotate(-37.936 17 21.018)" />
        <defs>
            <linearGradient id="a" x1={19.501} x2={9.925} y1={32} y2={14.494} gradientUnits="userSpaceOnUse">
                <stop stopColor="#fff" />
                <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="b" x1={14.371} x2={5.424} y1={25.274} y2={14.662} gradientUnits="userSpaceOnUse">
                <stop stopColor="#fff" />
                <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="c" x1={18.8} x2={13.501} y1={22.018} y2={14.269} gradientUnits="userSpaceOnUse">
                <stop stopColor="#fff" />
                <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
        </defs>
    </svg>
);

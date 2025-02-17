export const PiggyBankIcon = ({ props }: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={36} fill="none" {...props}>
        <rect width={36} height={24} x={24} fill="#FFED4A" rx={2} transform="rotate(90 24 0)" />
        <g clipPath="url(#a)">
            <path fill="url(#b)" d="M15.5 28.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
            <path
                fill="url(#c)"
                d="M19 22h-8c-.552 0-1 .448-1 1v8c0 .466.32.859.752.97.134.033.248.142.248.28 0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25c0-.138.114-.247.247-.281A1 1 0 0 0 20 31v-8a1 1 0 0 0-1-1Zm-.5 7.5a1 1 0 0 1-1 1h-4.75a.75.75 0 0 1-.75-.75v-.25a.5.5 0 0 0-.5-.5.5.5 0 0 1 0-1 .5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5.5.5 0 0 1 0-1 .5.5 0 0 0 .5-.5v-.25a.75.75 0 0 1 .75-.75h4.75a1 1 0 0 1 1 1v5Z"
            />
        </g>
        <defs>
            <linearGradient id="b" x1={16.625} x2={9.852} y1={28.25} y2={23.297} gradientUnits="userSpaceOnUse">
                <stop stopColor="#fff" />
                <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="c" x1={19.5} x2={-8.5} y1={32.5} y2={13} gradientUnits="userSpaceOnUse">
                <stop stopColor="#fff" />
                <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
            <clipPath id="a">
                <path fill="#fff" d="M9 21h12v12H9z" />
            </clipPath>
        </defs>
    </svg>
);

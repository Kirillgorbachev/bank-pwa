export const IconPayTwo = ({ props }: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" {...props}>
        <mask
            id="a"
            width={32}
            height={32}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: 'alpha',
            }}>
            <circle cx={16} cy={16} r={16} fill="#51F2AE" />
        </mask>
        <g mask="url(#a)">
            <circle cx={16} cy={16} r={16} fill="#FFED4A" />
            <path
                stroke="#171A19"
                strokeWidth={2}
                d="M22.5 22.5H10.185v-9m0 0L13.5 17m-3.315-3.5L7 17M10 9h12.315v9m0 0L19 14.5m3.315 3.5 3.185-3.5"
            />
        </g>
    </svg>
);

export const IconPayThree = ({ props }: any) => (
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
            <path stroke="#171A19" strokeWidth={2} d="M10 8h12v16H10z" />
            <path fill="#171A19" d="M15 20h2v2h-2z" />
        </g>
    </svg>
);

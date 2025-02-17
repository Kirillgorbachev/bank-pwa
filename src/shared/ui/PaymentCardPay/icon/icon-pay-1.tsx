export const IconPayOne = ({ props }: any) => (
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
            <path stroke="#171A19" strokeWidth={2} d="M9 9h7v7H9zM18 18h5v5h-5zM19 9h4v5h-4M9 24v-4h5v4" />
            <path fill="#171A19" d="M11 11h3v3h-3z" />
        </g>
    </svg>
);

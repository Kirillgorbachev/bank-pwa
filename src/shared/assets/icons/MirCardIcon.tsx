import { MirLogo } from '@/shared/assets/icons/MirLogo';

export const MirCardIcon = ({ props }: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={36} fill="none" {...props}>
        <rect width={36} height={24} x={24} fill="#171A19" rx={2} transform="rotate(90 24 0)" />
        <g transform="translate(2, 11) scale(1)">
            <MirLogo />
        </g>
    </svg>
);

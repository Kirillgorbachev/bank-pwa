import type { INetworkInfo } from '@/feature/network-info/types/types';

export const NetworkDetails = ({ networkInfo }: { networkInfo: INetworkInfo }) => (
    <ul>
        <li>
            <strong>Тип:</strong> {networkInfo.type}
        </li>
        <li>
            <strong>Эффективный тип сети:</strong> {networkInfo.effectiveType}
        </li>
        <li>
            <strong>Скорость сети:</strong> {networkInfo.downlink} Mbps
        </li>
        <li>
            <strong>Задержка:</strong> {networkInfo.rtt} ms
        </li>
        <li>
            <strong>Режим экономии данных:</strong> {networkInfo.saveData ? 'Enabled' : 'Disabled'}
        </li>
    </ul>
);

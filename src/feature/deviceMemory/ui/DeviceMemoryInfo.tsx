import { useEffect, useState } from 'react';

import cls from './DeviceMemoryinfo.module.scss';

import { getDeviceMemory } from '@/feature/deviceMemory/api/deviceMemory';

export const DeviceMemoryInfo = () => {
    const [memory, setMemory] = useState<number | null>(null);

    useEffect(() => {
        const memoryValue = getDeviceMemory();
        setMemory(memoryValue);
    }, []);

    return (
        <div className={cls.container}>
            <h2 className={cls.title}>Информация об оперативной памяти устройства</h2>
            {memory !== null ? (
                <p>
                    Ваше устройство имеет приблизительно <strong>{memory} GB</strong> оперативной памяти.
                </p>
            ) : (
                <p className={cls.error}>Device Memory API не поддерживается в этом браузере.</p>
            )}
        </div>
    );
};

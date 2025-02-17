export interface IBatteryInfo {
    level: number | null;
    charging: boolean | null;
    chargingTime: number | null;
    dischargingTime: number | null;
}

export interface IEventListenerManager {
    addEventListener(
        type: 'chargingchange' | 'levelchange' | 'chargingtimechange' | 'dischargingtimechange',
        listener: (this: IBatteryManager, ev: Event) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener(
        type: 'chargingchange' | 'levelchange' | 'chargingtimechange' | 'dischargingtimechange',
        listener: (this: IBatteryManager, ev: Event) => any,
        options?: boolean | EventListenerOptions,
    ): void;
}

export interface IBatteryManager extends IEventListenerManager {
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    level: number;
}

export interface INavigatorWithBattery extends Navigator {
    getBattery?: () => Promise<IBatteryManager>;
}

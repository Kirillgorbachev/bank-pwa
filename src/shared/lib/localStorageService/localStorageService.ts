export const localStorageService = {
    checkHasItem: (key: string): boolean => !!localStorage.getItem(key),

    getItemSafe: <T>(key: string, defaultValue: T): T => {
        const storedValue = localStorage.getItem(key);

        return storedValue === null ? defaultValue : JSON.parse(storedValue);
    },

    getItemString: <T>(key: string, defaultValue: T): string | T => localStorage.getItem(key) ?? defaultValue,

    setItem: (key: string, value: string): void => {
        localStorage.setItem(key, value);
    },

    setItemSafe: <T>(key: string, value: T): void => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error(e);
        }
    },

    getItem: <T>(key: string): T | null => {
        const storedValue = localStorage.getItem(key);

        if (storedValue === null) {
            return null;
        }

        try {
            return JSON.parse(storedValue);
        } catch (e) {
            return storedValue as unknown as T;
        }
    },

    removeItem: (key: string) => {
        localStorage.removeItem(key);
    },
};

export const executeModalAction = (id: string, modalActions: Record<string, () => void>) => {
    const action = modalActions[id];

    if (action) {
        action();
    }
};

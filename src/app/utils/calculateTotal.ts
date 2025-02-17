export const calculateTotal = <T>(
    items: T[],
    filterFn: (item: T) => boolean = () => true,
    valueFn: (item: T) => number = () => 0,
): number => items.filter(filterFn).reduce((total, item) => total + valueFn(item), 0);

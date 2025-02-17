export const createMonthIdList: (startYear: number, endYear: number) => string[] = (startYear, endYear) => {
    const firstMonthIndex = 1;
    const lastMonthIndex = 12;
    const monthIdList = [];

    for (let year = startYear; year <= endYear; ++year) {
        for (let month = firstMonthIndex; month <= lastMonthIndex; ++month) {
            monthIdList.push(`${year}-${month < 9 ? '0' : ''}${month}-01`);
        }
    }

    return monthIdList;
};

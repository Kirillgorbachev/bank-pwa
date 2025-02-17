export const formatPhoneNumber = (phoneNumber: string): string => {
    const formatted = `${phoneNumber[0]} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9)}`;

    return formatted;
};

export const isFileMessage = (msg: string): boolean => {
    const fileExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.txt'];

    return fileExtensions.some((ext) => msg.toLowerCase().endsWith(ext));
};

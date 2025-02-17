export interface IContact {
    name?: string[];
    tel?: string;
    familyName?: string[];
}

export interface INavigatorExtended extends Navigator {
    contacts?: {
        select: (fields: string[], options: { multiple: boolean }) => Promise<IContact[]>;
    };
    mozContact?: {
        find: (criteria: { sortBy: string; sortOrder: string }) => Promise<IContact[]>;
    };
}

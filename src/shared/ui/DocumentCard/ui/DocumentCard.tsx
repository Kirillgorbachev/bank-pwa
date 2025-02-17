import { useAppSelector } from '@/app/hooks/useAppSelector';

import cls from './DocumentCard.module.scss';

import type { IRootState } from '@/app/store';
import type { TIconDocumentsKey } from '@/entities/DocumentList/const/documentsKeys';
import type { IDocument } from '@/entities/DocumentList/types/documentList.types';
import { mapIcon } from '@/entities/DocumentList/utils/documentIconMapper';

interface IDocumentCardProps {
    card: IDocument;
}

export const DocumentCard = ({ card }: IDocumentCardProps) => {
    const { icon, title } = card;
    const userName = useAppSelector((state: IRootState) => state.user.data?.name);

    return (
        <div className={cls.documentCard}>
            {mapIcon(icon as unknown as TIconDocumentsKey)}
            <div className={cls.content}>
                <p className={cls.title}>{title}</p>
                <p className={cls.extraText}>{userName}</p>
            </div>
        </div>
    );
};

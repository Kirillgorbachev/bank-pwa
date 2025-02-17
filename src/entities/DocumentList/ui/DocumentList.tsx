import { useGetDocumentsQuery } from '../api/DocumentsApi';
import type { IDocument } from '../types/documentList.types';

import cls from './DocumentList.module.scss';

import { AddDocumentButton } from '@/entities/AddDocumentButton';
import { DocumentCard } from '@/shared/ui/DocumentCard';
import { LoadingError } from '@/shared/ui/LoadingError';

export const DocumentList = () => {
    const { data: documents = [], isLoading, isError: isDocumentsError } = useGetDocumentsQuery();

    return (
        <div className={cls.documentList}>
            <div className={cls.titleContainer}>
                <p className={cls.title}>Документы</p>
            </div>
            <div className={cls.content}>
                <LoadingError objectName="документов" isLoading={isLoading} isError={isDocumentsError} />
                {!isLoading && !isDocumentsError && (
                    <>
                        {documents.map((document: IDocument) => (
                            <DocumentCard card={document} key={document.documentId} />
                        ))}
                        <AddDocumentButton />
                    </>
                )}
            </div>
        </div>
    );
};

import { InsuranceNumberIcon } from '../assets/InsuranceNumberIcon';
import { MedicalInsuranceIcon } from '../assets/MedicalInsuranceIcon';
import { PassportIcon } from '../assets/PassportIcon';
import type { TIconDocumentsKey } from '../const/documentsKeys';
import { IconDocumentKeys } from '../const/documentsKeys';

const documentIconMapper = {
    [IconDocumentKeys.INSURANCE_NUMBER]: <InsuranceNumberIcon />,
    [IconDocumentKeys.MEDICAL_INSURANCE]: <MedicalInsuranceIcon />,
    [IconDocumentKeys.PASSPORT]: <PassportIcon />,
};

export const mapIcon = (iconKey: TIconDocumentsKey): React.ReactNode => documentIconMapper[iconKey] || null;

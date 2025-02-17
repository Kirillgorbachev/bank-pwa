import { useState } from 'react';

import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { useAppSelector } from '@/app/hooks/useAppSelector';

import { fieldList } from '../const/const';
import type { IFieldList, IUserNameObject } from '../types/types';

import cls from './EditingProfileModal.module.scss';

import type { TRootState } from '@/app/store';
import { setUserData } from '@/entities/user/model/UserSlice';
import { ButtonMain } from '@/shared/ui/ButtonMain';
import { TextInput } from '@/shared/ui/TextInput';
import { TitleComponent } from '@/shared/ui/Title';

interface IEditingProfileProps {
    closeModal: () => void;
}

export const EditingProfile = ({ closeModal }: IEditingProfileProps) => {
    const dispatch = useAppDispatch();
    const { id, name } = useAppSelector((state: TRootState) => state.user.data) || { id: '', name: '' };
    const userNameArray = name?.split(' ');
    const [userNameObject, setUserNameObject] = useState<IUserNameObject>({
        firstName: userNameArray[0],
        lastName: userNameArray[1],
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const key = e.target.id;
        setUserNameObject((prev) => ({ ...prev, [key]: value }));
    };

    const saveData = () => {
        dispatch(setUserData({ id: Number(id), name: `${userNameObject.firstName} ${userNameObject.lastName}` }));
        closeModal();
    };

    return (
        <div className={cls.editingProfile}>
            <TitleComponent text="Редактировать данные" />
            {fieldList.map((field: IFieldList) => (
                <TextInput
                    id={field.id}
                    label={field.label}
                    value={userNameObject[field.id]}
                    onChange={onChange}
                    key={field.id}
                />
            ))}
            <ButtonMain title="Сохранить" isActive onClick={saveData} type="submit" />
        </div>
    );
};

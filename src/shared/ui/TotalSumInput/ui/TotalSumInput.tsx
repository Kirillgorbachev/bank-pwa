import { useFlexibleInput } from '@/app/hooks/useFlexibleInput';

interface ITotalSumInput {
    isPasswordVisible: boolean;
    total: string;
}

export const TotalSumInput = ({ isPasswordVisible, total }: ITotalSumInput) => {
    const { content, width, changeHandler, spanRef } = useFlexibleInput(total);

    return (
        <>
            <span ref={spanRef}>{content}</span>
            <input
                type={isPasswordVisible ? 'password' : 'text'}
                value={`${content} ₽`}
                onChange={changeHandler}
                style={{ width }}
                readOnly
            />
        </>
    );
};

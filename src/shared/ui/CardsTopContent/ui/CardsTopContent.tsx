import { InputSwiper } from '@/shared/ui/InputSwiper';

export interface ICardsTopContent {
    total: string;
    totalPoints: string;
    isPasswordVisible: boolean;
    togglePasswordVisibility: () => void;
}

export const CardsTopContent = ({
    total,
    totalPoints,
    isPasswordVisible,
    togglePasswordVisibility,
}: ICardsTopContent) => (
    <>
        <div className="top-content-left">
            <InputSwiper
                total={total}
                isPasswordVisible={isPasswordVisible}
                togglePasswordVisibility={togglePasswordVisibility}
            />
        </div>
        <div className="total-points">{totalPoints} балла</div>
    </>
);

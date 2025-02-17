import { EyeCloseIcon } from '@/shared/assets/icons/EyeCloseIcon';
import { EyeOpenIcon } from '@/shared/assets/icons/EyeOpenIcon';
import { ToggleEye } from '@/shared/ui/ToggleEye';
import { TotalSumInput } from '@/shared/ui/TotalSumInput/ui/TotalSumInput';

export interface IInputSwiperProps {
    total: string;
    isPasswordVisible: boolean;
    togglePasswordVisibility: () => void;
}

export const InputSwiper = ({ total, isPasswordVisible, togglePasswordVisibility }: IInputSwiperProps) => (
    <>
        <div className="top-content-input">
            <TotalSumInput total={total} isPasswordVisible={isPasswordVisible} />
        </div>

        <div className="top-content-toggle">
            <ToggleEye
                openIcon={<EyeOpenIcon />}
                closeIcon={<EyeCloseIcon />}
                eyeIcon={isPasswordVisible}
                onToggle={togglePasswordVisibility}
                isVisible={false}
            />
        </div>
    </>
);

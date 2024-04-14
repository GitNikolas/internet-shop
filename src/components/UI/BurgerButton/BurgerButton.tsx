import { FC } from 'react';
import { BurgerButtonProps } from '.';
import './BurgerButton.css';

export const BurgerButton: FC<BurgerButtonProps> = ({ openMenu, onClick }) => {
	return <button
    className={`burger-button ${openMenu ? 'burger-button_oppened' : ''}`}
    onClick={onClick}
    >
    </button>;
};

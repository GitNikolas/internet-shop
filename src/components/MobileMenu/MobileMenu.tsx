import { FC, useState } from 'react';
import { MobileMenuProps } from '.';
import { BurgerButton } from '../UI/BurgerButton';
import './MobileMenu.css';
import Menu from '../Menu/Menu';

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen, toggleOpenMenu }) => {


const openClass = isOpen ? 'mobile-menu__navigation_open' : '';

	return <div>
		<BurgerButton openMenu = {isOpen} onClick={toggleOpenMenu} />
		{isOpen && <div className='mobile-menu__overlay' onClick={toggleOpenMenu}></div>}
		<div className={`mobile-menu__navigation ${openClass}`}>
			<Menu />
		</div>
	</div>;
};

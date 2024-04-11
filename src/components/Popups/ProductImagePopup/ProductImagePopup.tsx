import { FC } from 'react';
import { ProductImagePopupProps } from '.';
import './ProductImagePopup.css';

export const ProductImagePopup: FC<ProductImagePopupProps> = ({image, openImage,toggleImageOpen}) => {

	const isOpen = openImage ? 'product-image-popup_open' : '';

	return  <div className={`product-image-popup ${isOpen}`}>
		<div className={`product-image-popup__overlay`} onClick={toggleImageOpen}></div>
		<div className={`product-image-popup__content`}>
		<button className="product-image-popup__close-button" onClick={toggleImageOpen}>✖</button>
		<img  className={`product-image-popup__image`} src={image}/>
		</div>
	</div>;
};

import { FC } from 'react';
import { ProductType } from '../../types/ProductType';
import './ProductMini.css';

export const ProductMini: FC<ProductType> = ({ description,image,price,rating,title,id,amount}) => {
	return <li className='product-mini'>
		<img className='product-mini__image' src={image} alt={title}/>
		<p className='product-mini__title'>{title}</p>
		<p className='product-mini__price'>Цена: {price * 90} руб. Рейтинг: {rating.rate}</p>
		<button className='product-mini__add-button'>Добавить в корзину</button>
	</li>;
};

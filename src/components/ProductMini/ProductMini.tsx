import { FC, useEffect, useMemo, useState } from 'react';
import { ProductType } from '../../types/ProductType';
import './ProductMini.css';
import { postProduct, deleteProduct } from '../../utils/productsApi/productsApi';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchProducts,pstProduct,delProduct } from '../../app/Product/productsSlice';

export const ProductMini: FC<ProductType> = ({ description,image,price,rating,title,id,productData }) => {
    
	const products = useAppSelector(state => state.products.value);
	const dispatch = useAppDispatch();

	const totalPrice = Number.isInteger(price * 90) ? price * 90 : (price * 90).toFixed(2);

	async function handlePostProduct() {
		dispatch(pstProduct(productData));
	}

	async function handleDeleteProduct() {
		dispatch(delProduct(id));
	}

	const [inBusket, setInBusket] = useState(false);

	function checkIsInBusket(){
		const check = products?.some(item => item.id === id);
		setInBusket(check);
	}

	useMemo(() => {
		checkIsInBusket();
	}, [products])

	return <li className='product-mini'>
		<img className='product-mini__image' src={image} alt={title}/>
		<p className='product-mini__title'>{title}</p>
		<p className='product-mini__price'>Цена: {totalPrice} руб. Рейтинг: {rating.rate}</p>
		{!inBusket && <button className='product-mini__add-button'
		onClick={handlePostProduct}
		>Добавить в корзину</button>}
		{inBusket &&<button className='product-mini__add-button'
		onClick={handleDeleteProduct}
		>Удалить из корзины</button>}
	</li>;
};

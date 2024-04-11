import { FC, useEffect, useMemo, useState } from 'react';
import { ProductPageProps } from '.';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchProducts } from '../../app/Product/productsSlice';
import { ProductType } from '../../types/ProductType';
import Loader from '../UI/Spinner/Loader';
import './ProductPage.css'

export const ProductPage: FC<ProductPageProps> = (props) => {

	const { id } = useParams();
	const products = useAppSelector(state => state.products.value);
	const dispatch = useAppDispatch();
	const [ productData, setProductData ] = useState<ProductType | null >(null);
	const [ inBusket, setInBusket ] = useState(false);
	const [ amountInBusket, setAmountInBusket ] = useState(0);

	function checkIsInBusket(){
		if(productData && products) {
			let check = products.some(item => item.id === productData.id);
			let elementFromBusket = products.filter(item => item.id === productData.id)[0];
			setAmountInBusket(elementFromBusket?.amount);
			setInBusket(check);
		}
	}

	useMemo(async() => {
		dispatch(fetchProducts());
		let res = await fetch(`https://fakestoreapi.com/products/${id}`);
		let data = await res.json();
		setProductData(data);
	}, [])

	useEffect(() => {
		checkIsInBusket();
	}, [products,productData])

	function convertingToRuble() {
		if(productData !== undefined && productData) {
			return Number.isInteger(productData.price * 90) ? productData.price * 90 : (productData.price * 90).toFixed(2);
		}
	}
	const totalPrice = convertingToRuble();

	return (
	productData
	?
	<div className='product-page'>
		<img className='product-page__image' src={productData.image} alt={productData.title}/>

		<div className='product-page__content'>
			<p className='product-page__title'>{productData.title}</p>
			<p>{productData.description}</p>
			<p className='product-page__price'>Цена: {totalPrice} руб. Рейтинг: {productData.rating.rate}</p>
			{inBusket && <p>Количество в корзине: {amountInBusket}</p>}
			{!inBusket && <button className='product-page__add-button'
			// onClick={handlePostProduct}
			>Добавить в корзину</button>}
			{inBusket &&<button className='product-page__add-button'
			// onClick={handleDeleteProduct}
			>Удалить из корзины</button>}
		</div>

	</div>	
	:
	<Loader />
);
};

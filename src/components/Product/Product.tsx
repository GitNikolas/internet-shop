import React, { useEffect, useMemo, useState } from 'react';
import { ProductType } from '../../types/ProductType';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { productsIncrement, productsDecrement, productDelete } from '../Basket/productsSlice';
import './Product.css';

function Product({ description,image,price,rating,title,id,amount}:ProductType) {

  const dispatch = useAppDispatch();

  async function amountIncrement() {
    if(amount !== undefined &&  amount < 10) {
      dispatch(productsIncrement({id}));
    }
  }

  function amountDecrement() {
    if(amount !== undefined && amount > 1) {
      dispatch(productsDecrement({id}));
    }
  }

  function deleteProduct() {
    dispatch(productDelete(id));
  }

  const totalPrice = Number.isInteger(price * 90) ? price * 90 : (price * 90).toFixed(2);

  return (
    <li className='product'>
        <img className='product__image' src={image}></img>
        <h3 className='product__title'>{`Наименование: ${title}`}</h3>
        <button className='product__trash' onClick={deleteProduct}></button>
        <p className='product__description'>{`Описание: ${description}`}</p>
        <p className='product__price'>{`Цена: ${totalPrice} руб.`}</p>
        <p className='product__rating'>{`Рейтинг: ${rating.rate} баллов, На основе ${rating.count} отзывов`}</p>
        <div className='product__amount'>
            <button className='product__amount-button' onClick={amountDecrement}>-</button>
            <p>{amount}</p>
            <button className='product__amount-button' onClick={amountIncrement}>+</button>

        </div>
    </li>
  );
}

export default Product;

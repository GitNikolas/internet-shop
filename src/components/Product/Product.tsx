import React, { useEffect, useMemo, useState } from 'react';
import { ProductType } from '../../types/ProductType';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { productsIncrement, productsDecrement, productDelete } from '../Products/productsSlice';
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

  return (
    <li className='product'>
        <img className='product_image' src={image}></img>
        <h3 className='product_title'>{`Наименование: ${title}`}</h3>
        <button className='product_trash' onClick={deleteProduct}></button>
        <p className='product_description'>{`Описание: ${description}`}</p>
        <p className='product_price'>{`Цена: ${price * 90} руб.`}</p>
        <p className='product_rating'>{`Рейтинг: ${rating.rate} баллов, На основе ${rating.count} отзывов`}</p>
        <div className='product_amount'>
            <button className='product_amount-button' onClick={amountDecrement}>-</button>
            <p>{amount}</p>
            <button className='product_amount-button' onClick={amountIncrement}>+</button>

        </div>
    </li>
  );
}

export default Product;

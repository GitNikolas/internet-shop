import React, { useEffect, useMemo, useState } from 'react';
import './Basket.css';
import Product from '../Product/Product';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchProducts } from './productsSlice';
import TotalCost from '../TotalCost/TotalCost';

function Basket() {

    const products = useAppSelector(state => state.products.value);

    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch])

  return (
    <section className='basket'>
        <ul className='basket__list list-style'>
            {products?.map(product => 
            (<Product
            category = {product.category}
            description={product.description}
            key={product.id}
            image={product.image}
            price={product.price}
            rating={product.rating}
            title={product.title}    
            id={product.id}
            amount={product.amount}
            productData={product}
            ></Product>))}
        </ul>
        <TotalCost/>
    </section>
  );
}

export default Basket;

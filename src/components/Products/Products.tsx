import React, { useEffect, useMemo, useState } from 'react';
import './Products.css';
import Product from '../Product/Product';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchProducts } from './productsSlice';
import TotalCost from '../TotalCost/TotalCost';

function Products() {

    const products = useAppSelector(state => state.products.value);

    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch])

  return (
    <section className='products'>
        <ul className='products_shopping-basket list-style'>
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
            ></Product>))}
        </ul>
        <TotalCost/>
    </section>
  );
}

export default Products;

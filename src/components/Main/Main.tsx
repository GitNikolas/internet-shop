import React, {useEffect, useMemo, useState} from 'react';
import { getProducts } from '../../utils/productsApi/productsApi';
import { ProductMini } from '../ProductMini';
import { ProductType } from '../../types/ProductType';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchProducts,pstProduct,delProduct } from '../../app/Product/productsSlice';
import './Main.css';

function Main() {

  const [products, setProducts] = useState<ProductType[]>([]);
  const dispatch = useAppDispatch();

  useMemo(async() => {
    let res = await getProducts();
    setProducts(res?.data);
  }, [])

  useMemo(async() => {
    dispatch(fetchProducts());
  }, [])

  return (
    <main className="main">
      <ul className="main__product-list list-style">
      {products.map(product => 
            (<ProductMini
            category = {product.category}
            description={product.description}
            key={product.id}
            image={product.image}
            price={product.price}
            rating={product.rating}
            title={product.title}    
            id={product.id}
            productData={product}
            amount={product.amount}
            ></ProductMini>))}
      </ul>
    </main>
  );
}

export default Main;

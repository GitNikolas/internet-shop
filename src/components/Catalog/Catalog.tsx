import React, {useMemo, useState} from 'react';
import './Catalog.css';
import '../Main/Main.css'
import { getCategories } from '../../utils/productsApi/productsApi';
import { ProductMini } from '../ProductMini';
import { ProductType } from '../../types/ProductType';


function Catalog() {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isCategories, setIsCategories] = useState(true);

  useMemo(async() => {
    const res = await getCategories()
    setCategories(res);
  }, [])

  async function fetchCategory(value:string){
    let res = await fetch(`https://fakestoreapi.com/products/category/${value}`);
    let data = await res.json();
    setProducts(data);
    setIsCategories(!isCategories);
  }

  function returnToCatalog(){
    setIsCategories(true);
  }

  return (
    <section className="catalog">
      {!isCategories && (
        <button className="catalog__return-button" onClick={returnToCatalog}>Вернуться</button>
      )}
      {isCategories && <ul className="catalog__menu list-style">
        
          {categories.map((category, index) => (
            <li
              className="catalog__menu-item"
              key={index}
              onClick={() => {
                fetchCategory(category);
              }}
            >
              {category}
            </li>
          ))}
      </ul>
      }
      {!isCategories && 
      <ul className="main__product-list list-style">
        {products.map(product => <ProductMini
        category= {product.category}
        description={product.description}
        key={product.id}
        id={product.id}
        image={product.image}
        price={product.price}
        rating={product.rating}
        title={product.title}
        />)}
      </ul>

      }
    </section>
  );
}

export default Catalog;

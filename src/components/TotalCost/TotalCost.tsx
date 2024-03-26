import React, { useEffect, useState } from 'react';
import './TotalCost.css';
import { useAppSelector } from '../../app/hooks';
import { ProductType } from '../../types/ProductType';

function TotalCost() {

    const products = useAppSelector(state => state.products.value);

    const [totalCost, setTotalCost] = useState(0);

    function getTotalCost(data:ProductType[]) {
      let counter = 0;
      data.forEach((item:ProductType) => {
        if(item.amount !== undefined) {
          counter += item.price * item.amount
        }
      })
    //Умножаем на 90 чтобы привести к рублям. Хотелось бы на 30, но увы(
      setTotalCost(counter  * 90);
    }

    useEffect(() => {
      getTotalCost(products);
    }, [products])

  return (
    <div className='total-cost'>{`Итого: ${totalCost.toFixed(2)} рублей`}</div>
  );
}

export default TotalCost;

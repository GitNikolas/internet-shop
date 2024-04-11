const fakeStoreUrl = 'https://fakestoreapi.com/products';
const dataBaseUrl = 'http://localhost:3001';

interface productTypes{
    id: Number;
    title: String;
    price: Number;
    description: String;
    category: String;
    image: String;
    rating: { rate:Number,count:Number };
    amount: Number;
}

export async function getProducts() {
    try{
        let response = await fetch(fakeStoreUrl , {
            method:'GET'
        })
        if(response.ok) {
            let data = await response.json();
            return { data };
        } else {
            throw new Error('Упс, что-то пошло не так')
        }
    } catch(err) {
        console.error(err);
    }
}

export async function getCategories() {
  const res = await fetch('https://fakestoreapi.com/products/categories')
  return await res.json()
}

export async function postProduct({ id, title, price, description, category,
    image, rating }: productTypes) {
    try{
      let response = await fetch(`${dataBaseUrl}/products`, {
        method:'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, title, price, description, category,
            image, rating, amount: 1 })
      });
       if (!response.ok){
        throw new Error('Произошла ошибка, проверьте корректность введённых данных');
      }
      return await response.json();
    } catch(err: any) {
      console.error(err);
      return err.message;
    }
  }

  export async function deleteProduct(productId:number) {
    try{
      let response = await fetch(`${dataBaseUrl}/products/${productId}`, {
        method:'DELETE',
        credentials: 'include',
      });
      return await response.json();
    } catch(err: any) {
      console.error(err);
      return err.message;
    }
  }

  export async function getUserProducts() {
      try{
        let response = await fetch(`${dataBaseUrl}/products`, {
          method:'GET',
          credentials: 'include',
        });
        if(!response.ok){
          throw new Error(response.statusText)
        }
        return response;
      }
      catch(err:any){
        console.error(err.message);
        return err.message
      }
    }
  
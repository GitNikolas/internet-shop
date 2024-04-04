const fakeStoreUrl = 'https://fakestoreapi.com/products';
const dataBaseUrl = 'http://localhost:3001/products';

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
            data = data.slice(0,5);
            // убрать slice когда доделаю корзину
            return { data };
        } else {
            throw new Error('Упс, что-то пошло не так')
        }
    } catch(err) {
        console.error(err);
    }
}

export async function postFilm({ id, title, price, description, category,
    image, rating, amount }: productTypes) {
    try{
      let response = await fetch(`${dataBaseUrl}/products`, {
        method:'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, title, price, description, category,
            image, rating, amount })
      });
       if (!response.ok){
        throw new Error('Произошла ошибка, проверьте корректность введённых данных');
      }
      return response;
    } catch(err: any) {
      console.error(err);
      return err.message;
    }
  }

  export async function deleteProduct(productId:number) {
    try{
      let response = await fetch(`${dataBaseUrl}/movies/${productId}`, {
        method:'DELETE',
        credentials: 'include',
      });
      return response;
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
        throw new Error('Необходима авторизация');
      };
      return response.json();
    } catch(err: any) {
      console.error(err);
      return err.message;
    }
  }
  
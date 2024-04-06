const baseUrl = 'http://localhost:3001';

interface userTypes{
    name: String;
    email: String;
    password: String;
    surname: String;
}

export async function register({ email, password, name, surname }: userTypes) {
  try{
    let response = await fetch(`${baseUrl}/signup`, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password,surname })
    });
    if(response.status === 409) {
      throw new Error('Пользователь с таким email уже существует');
    }
    else if (!response.ok){
      throw new Error('Произошла ошибка, проверьте корректность введённых данных');
    }
    return response;
  } catch(err: any) {
    console.error(err);
    return err.message;
  }
}

export async function login({ email, password }: userTypes) {
  try{
    let response = await fetch(`${baseUrl}/signin`, {
      method:'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    if(response.status === 401) {
      throw new Error('Неправильная почта или пароль');
    }
    else if (!response.ok){
      throw new Error('Произошла ошибка, проверьте корректность введённых данных');
    }
    return response;
  } catch(err: any) {
    console.error(err);
    return err.message;
  }
}

export async function getUser() {
  try{
    let response = await fetch(`${baseUrl}/users/me`, {
      method:'GET',
      credentials: 'include',
    });
    if(!response.ok){
      throw new Error('Необходима авторизация');
    };
    return response;
  } catch(err: any) {
    console.error(err);
    return err.message;
  }
}

export async function patchUser({ name, surname }: userTypes) {
  try{
    let response = await fetch(`${baseUrl}/users/me`, {
      method:'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, surname }),
    });
    if(!response.ok){
      let message = await response.json();
      throw new Error(message.message);
    };
    return response;
  } catch(err: any) {
    console.error(err);
    return err.message;
  }
}

export async function signOut() {
  try{
    let response = await fetch(`${baseUrl}/signout`, {
      method:'POST',
      credentials: 'include',
    });
    if(!response.ok) {
      throw new Error('Необходима авторизация');
    }
    return response;
  } catch(err: any) {
    console.error(err);
    return err;
  }
}





import { useState } from "react";

interface FormInterface{
    name: string;
    email: string;
    password: string;
    surname: string;
    serverError?: string;
}

export function UseForm() {
    
    const [ values, setValues ] = useState<FormInterface>({
        name: '',
        email: '',
        password: '',
        surname: '',
    });

    const [ errors, setErrors ] = useState<FormInterface>({
        name: '',
        email: '',
        password: '',
        surname: '',
        serverError:'',
    })

    const [formIsValid, setFormIsValid] = useState(false);

    function handleChange(event:any){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setValues({...values, [name]: value});
        setErrors({...errors, [name]: ''});
    }

    function checkValidity(event:any){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setErrors({...errors, [name]: target.validationMessage});
        setFormIsValid(target.closest("form").checkValidity());
    }


    return {values, errors, formIsValid, setValues, setErrors, handleChange, checkValidity};
}
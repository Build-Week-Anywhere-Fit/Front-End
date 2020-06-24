import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import * as Yup from 'yup'
import ClientForm from './ClientForm'
import formSchema from '../../validation/clientLoginFormSchema'

export default function Client(){

    const history = useHistory();

    const initialFormValues = {
        userName: '',
        password: ''
    }

    const initialFormErrors = {
        userName: '',
        password: ''
    }

    const postLogin = loginTry => {
        axios.post('https://lambda-anywhere-fitness.herokuapp.com/api/auth/login', loginTry)
            .then(res => {
                setFormValues(initialFormValues)
                console.log(res.data.message)
                history.push('/udash')
            })
            .catch(err => {
                setFormValues(initialFormValues)
                setError("Unfortunately there is no record for that username and password. You can signup or try again.")
                history.push('/login')
            })
    }

    const initialError = '';
    const initialDisabled = true;

    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
    const [loginErr, setError] = useState(initialError)

    const onInputChange = event => {
        const {name, value} = event.target

        Yup
            .reach(formSchema, name)
            .validate(value)
            .then(() => {
                setFormErrors({
                    ...formErrors, 
                    [name]: ''
                })
            })
            .catch(err => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0]
                })
            })
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const onSubmit = event => {
        event.preventDefault()

        const loginAttempt = {
            username: formValues.userName.trim(),
            password: formValues.password.trim()
        }

        console.log(loginAttempt)
        postLogin(loginAttempt)
    }

    useEffect(() => {
        if(formValues.userName !== '' && formValues.password !== ''){
            setDisabled(false)
        }
    }, [formValues])

    return (
        <div>
            <h1>Login</h1>
            <ClientForm 
                values={formValues}
                onInputChange={onInputChange}
                onSubmit={onSubmit}
                disabled={disabled}
                errors={formErrors}
                loginErr={loginErr}
            />

        </div>
    )
}
import React, {useState, useEffect} from 'react';
import {useHistory, Redirect} from 'react-router-dom'
import axios from 'axios'
import * as Yup from 'yup'
import Signup from './ClientSignupForm'
import formSchema from '../../validation/clientSignupFormSchema'

export default function ClientSignup(){
    const history = useHistory(); 

    const initialFormvalues = {
        userName: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        roleId: ''
    }

    const initialFormErrors = {
        userName: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        roleId: ''
    }

    const postSignup = signUp => {
        axios.post('https://lambda-anywhere-fitness.herokuapp.com/api/auth/register', signUp)
            .then(res => {
                setFormValues(initialFormvalues)
                console.log(res.data)
                if(res.data.roleId === 1){
                    return <Redirect to={{
                        pathname: `/instructor/${res.data.roleId}`
                    }}/>
                } else {
                    return <Redirect to={{
                        pathname: `/client/${res.data.roleId}`
                    }}/>
                }
            })
            .catch(err => {
                setFormValues(initialFormvalues)
                console.log(err)
                console.log(err.message)
            })
    }

    const initialDisabled = true

    const [formValues, setFormValues] = useState(initialFormvalues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

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
            [name]:value
        })
    }

    const onSubmit = event => {
        event.preventDefault()

        const newClient = {
            username: formValues.userName,
            password: formValues.password,
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            email: formValues.email,
            roleId: checkRoleId()
        }

        
        postSignup(newClient)
    }

    const checkRoleId = () => {
        if(formValues.roleId === 'Instructor'){
            return 1
        } else {
            return 2
        }
    }

    useEffect(() => {
        if(formValues.userName !== '' && formValues.password !== '' && formValues.roleId !== ''){
            setDisabled(false)
        }
    }, [formValues])

    return (
        <div>
            <h2>Signup</h2>
            <Signup 
                values={formValues}
                onInputChange={onInputChange}
                onSubmit={onSubmit}
                disabled={disabled}
                errors={formErrors}
            />
        </div>
    )
}
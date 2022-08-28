import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import {Row, Col} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {logDOM} from "@testing-library/react";

export function SignIn() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const consoleFunc = () => {
        console.log(formData)
    }

    const validateForm = () => {
         (formData.email.length && formData.password.length) ? console.log('its all ok') : console.log('formData is empty')
    }

    return (
        <div>
            <Row className="align-items-center justify-content-center">
                <Form className="sign-in-form my-3 w-25">
                    <Form.Group className="p-2">
                        <Form.Label htmlFor='emailText'>Enter Email</Form.Label>
                        <Form.Control name='email' onChange={handleChange} value={formData.email} id='emailText'
                                      type="email" placeholder="Email"/>
                    </Form.Group>
                    <Form.Group className="p-2">
                        <Form.Label htmlFor='passwordText'>Enter password</Form.Label>
                        <Form.Control name='password' onChange={handleChange} value={formData.password}
                                      id='passwordText' type="password" placeholder="Password"/>
                    </Form.Group>
                    <Button onClick={validateForm} className='mt-2 px-4' variant='primary'>Login</Button>
                </Form>
                <p className='mt-5'>
                    <Link className='mt-3' to="/sign-up">
                        SignUp
                    </Link>
                </p>
            </Row>
        </div>
    )
}

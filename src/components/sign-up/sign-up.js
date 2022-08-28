import React, {useState, useContext} from 'react';
import {ChildContext} from "../childContext/childContext";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Row} from "react-bootstrap";

export const UserNameContext = React.createContext({})

export function SignUp() {

    const [signupData, setSignupData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleSignUpData = (e) => {
        const {name, value} = e.target
        setSignupData((prestate) => ({
            ...prestate,
            [name]: value
        }))
    }

    const singUpDataConsole = () => {
        if (signupData.name.length &&
            signupData.email.length &&
            signupData.password.length &&
            signupData.confirmPassword.length
        ) {
            console.log(signupData)

        } else if ((signupData.password.length && signupData.confirmPassword.length) && (signupData.password.trim() === signupData.confirmPassword.trim())) {
            console.log('password and password confirm is same as each other')
        } else {
            console.log('maybe one of states is empty')
        }
    }

    return (
        <React.Fragment>
            <UserNameContext.Provider value={signupData}>
                <Row className='align-items-center justify-content-center'>
                    <Form className="signup-form w-25 my-3 ">
                        <Form.Group className='p-2'>
                            <Form.Label htmlFor='userName'>Enter Name</Form.Label>
                            <Form.Control onChange={handleSignUpData} name='name' value={signupData.name} id='userName'
                                          type="text"
                                          placeholder="Enter your name"/>
                        </Form.Group>
                        <Form.Group className='my-4'>
                            <Form.Label htmlFor='emailText'>Enter email</Form.Label>
                            <Form.Control onChange={handleSignUpData} name='email' value={signupData.email}
                                          id='emailText'
                                          type="email"
                                          placeholder="name@example.com"/>
                        </Form.Group>
                        <Form.Group className='my-4'>
                            <Form.Label htmlFor='passwordText'>Enter password</Form.Label>
                            <Form.Control onChange={handleSignUpData} name='password' value={signupData.password}
                                          id='passwordText' type="password"
                                          placeholder="example arz777"/>
                        </Form.Group>
                        <Form.Group className='my-4'>
                            <Form.Label htmlFor='passwordTextConfirm'>Confirm password</Form.Label>
                            <Form.Control onChange={handleSignUpData} name='confirmPassword'
                                          value={signupData.confirmPassword} id='passwordTextConfirm'
                                          type="password"
                                          placeholder="Confirm password"/>
                        </Form.Group>
                        <Button onClick={singUpDataConsole} variant='primary' className='px-4 my-3'>Sign Up</Button>
                    </Form>
                    <Link to='/sign-in'>SignIn</Link>
                    <ChildContext/>
                </Row>
            </UserNameContext.Provider>
        </React.Fragment>
    )
}

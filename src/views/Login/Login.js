import React from 'react';
import Heading from '../../components/Heading/Heading'
import Button from '../../components/Button/Button'

const Login = () => {
    return (
        <div>
            <Heading>Login Page</Heading>
            <form>
                <div>
                    <label for="email">Email</label>
                    <input id="email" type="email"></input>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input id="password" type="password"></input>
                </div>
                <div>
                    <Button>Login</Button>
                </div>
            </form>
        </div>
    );
};

export default Login;
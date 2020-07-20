import React from 'react';
import Heading from '../../components/Heading/Heading'
import Button from '../../components/Button/Button'


const Register = () => {
    return (
        <div>
            <Heading>Register Page</Heading>
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
                    <label for="rePassword">Repeat Password</label>
                    <input id="rePassword" type="password"></input>
                </div>
                <div>
                    <Button>Register</Button>
                </div>
            </form>
        </div>
    );
};

export default Register;
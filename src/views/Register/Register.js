import React from 'react';
import Heading from '../../components/Heading/Heading'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            rePassword: ""
        }
    }

    onChange = (event, type)=>{
        const newState = {}
        newState[type] = event.target.value
        this.setState(newState)
    }

    render() {
        const {email, password, rePassword} = this.state
        return (
            <div>
                <Heading>Register Page</Heading>
                <form>
                    <Input value={email} id="email" label="Email" type="email" onChange={(e) => this.onChange(e, "email")} />
                    <Input value={password} id="password" label="Password" type="password" onChange={(e) => this.onChange(e, "password")} />
                    <Input value={rePassword} id="rePassword" label="Repeat Password" type="password" onChange={(e) => this.onChange(e, "rePassword")} />
                    <div>
                        <Button>Register</Button>
                    </div>
                </form>
            </div>
        );
    }

};

export default Register;
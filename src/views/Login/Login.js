import React from 'react';
import Heading from '../../components/Heading/Heading'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    onChange = (event, type)=>{
        const newState = {}
        newState[type] = event.target.value
        this.setState(newState)
    }

    render() {
        const {email, password} = this.state
        return (
            <div>
                <Heading>Login Page</Heading>
                <form>
                    <Input value={email} id="email" label="Email" type="email" onChange={(e) => this.onChange(e, "email")} />
                    <Input value={password} id="password" label="Password" type="password" onChange={(e) => this.onChange(e, "password")} />
                    <div>
                        <Button>Login</Button>
                    </div>
                </form>
            </div>
        );
    }

};

export default Login;
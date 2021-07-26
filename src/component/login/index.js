import React, { useState } from 'react';
import { LoginWrapper } from './login.styled';
import TextBox from '../hoc/textBox';
import { Button } from '../hoc/button';



const Login = (props) => {

    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const { onLogin, errors } = props;


    return (
        <LoginWrapper>
            <h1>Login</h1>
            <p>Don't have an account? sign up</p>
            <div className="row">
                <TextBox
                    label="Email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="row">
                <TextBox
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => {
                        let keyCode = e.keyCode;
                        if (keyCode === 13) {
                            onLogin(email, e.target.value);
                        }

                    }} />
            </div>
            <div style={{ margin: '1rem 0px', color: 'red' }}>
                {errors && Object.keys(errors).length > 0 && Object.keys(errors).map((key) => {
                    return <span>{key}:- {errors[key]} <br /></span>
                })}
            </div>
            <div className="row">
                <Button width="100%" onClick={() => onLogin(email, password)}>Login</Button>
            </div>
        </LoginWrapper>
    )
}

export default Login;

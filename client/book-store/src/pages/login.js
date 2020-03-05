import React, { useContext } from 'react';
import axios from 'axios';

import { BookContext } from '../contexts/ProviderContext';


export default function () {
    const { stateLogin, getUsername, getPassword, login } = useContext(BookContext);
    
    return (
        <div>
            {
                !stateLogin.login ?
                <div>
                    <input type="text" name="username" onChange={(e) => {
                        getUsername(e.target.value);
                    }} />
                    <input type="password" name="password" onChange={(e) => {
                        getPassword(e.target.value);
                    }} />
                    <button onClick={() => login()}>Login</button>
                </div>
                :
                <div>
                    <h2>Login seccessfully</h2>
                </div>

            }
        </div>
    );
}
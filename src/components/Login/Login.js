import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app) ;
const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    return (
        <div>
            <h3> Please Login </h3>
            <div style={{ margin: '20px', padding: '10px' }}>
                <button onClick={() => signInWithGoogle() }>Goggle Sign In</button>
            </div>
            <form>
                <input type="email" name="" id="" placeholder='Email' />
                <br />
                <input type="password" name="" id="" placeholder='Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;
import React from 'react';
import './Login.css';
import fgcm from './images/fgcm.jpeg';
import {Link,useHistory} from 'react-router-dom';
import {useStateValue} from './StateProvider'
import {Email} from '@material-ui/icons';
import {auth} from './firebase';

function Login() {
   const history=useHistory();
    const[email,setEmail]=useStateValue('');
       const[password,setPassword]=useStateValue('');
       const signIn = (e)=>{
e.preventDefault();
       }
       const register = e=>{
           e.preventDefault();
           auth
           .createUserWithEmailAndPassword(email,password)
           .then((auth)=>{
               console.log(auth);
               if(auth){
                   history.push("/");
               }
           })
           .catch(error=>alert(error.message))
       }
    return (
        <div className="login">
            <Link to="/">
    <img src={fgcm} className="login__logo"/>
    </Link>
    <div className="login__container">
<h2>Sign in</h2>
<form>
    <h5>Email</h5>
    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
    <h5>Password</h5>
    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
    <button type="submit" onClick={signIn}
    className="login__sighInButton">Sign In</button>
    <p>By signing in, you agree to FPMC policy, terms & conditions of sale!!! </p>
    <button onClick={register}
    className="login__registerButton"> You don't have account, Create now!!!</button>
</form>
    </div>
        </div>
    )
}

export default Login;

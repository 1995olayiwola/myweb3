import React, {useState} from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom"
import {auth} from "./firebase";
import fgcm from './images/fgcm.jpeg'
function Login() {
    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = (event) => {
        event.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then( auth => {
                //redirect to home page
                history.push("/")
            })
            .catch(err => {
                alert(err.message)
            })
    }
    const register = (event) => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                //create a user, login and redirect to homepage
                history.push("/")
            })
            .catch(err => {
                alert(err.message)
            })
    }
    return (
        <div className="login">
            <Link to="/">
                <img src={fgcm} alt="" className="login__logo"/>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email:</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password:</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button type="submit" onClick={signIn}  className="login__sighInButton">sign in</button>
                    <p>
                      You must agree to the terms & condition lay down by FPCM in other to sign in 
                    </p>
                    <button onClick={register} className="login__registerButton">Create accout, if you have not register</button>
                </form>
            </div>
        </div>
    )
}
export default Login
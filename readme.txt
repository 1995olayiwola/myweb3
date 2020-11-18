<form>
    <h5>Email</h5>
    <input type="email" value={email} onChange={e=>setEmail(e.target.value
        )}/>
    <h5>Password</h5>
    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
    <button type="submit" onClick={signIn}
    className="login__sighInButton">Sign In</button>
    <p>By signing in, you agree to FPMC policy, terms & conditions of sale!!! </p>
    <button onClick={register} 
    className="login__registerButton"> You don't have account, Create now!!!</button>
</form>
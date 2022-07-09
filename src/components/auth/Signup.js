import React from 'react';

const Signup = () => {
    return (<div id='Signup'>
        <div>
            <img src="./images/signup/phase1.png" alt="signup alt" width="300px"/>
        </div>
        <div>
            <img src="./images/signup/phase2.png" alt="signup alt2" width="300px"/>
        </div>
        <div id='form'>
            <div>
                <p>Welcome to ArticleUz</p>
                <div>
                    <p>Have an account?</p>
                    <p className="main-color" style={{fontWeight: 800, fontSize: "18px"}}>Sign in</p>
                </div>
            </div>
            <h1>Sign Up</h1>

            <form>
                <div className="form-group">
                    <p className="form-text">Enter your email address</p>
                    <input type="email" className="form-input" placeholder="Name@example.com"/>
                </div>
                <div className="form-group">
                    <p className="form-text">Enter your username</p>
                    <input type="text" className="form-input" placeholder="Username"/>
                </div>
                <div className="form-group">
                    <p className="form-text">Enter your password</p>
                    <input type="password" className="form-input" placeholder="Password"/>
                </div>
                <button type="submit">Sign up</button>
            </form>
        </div>
    </div>)
};

export default Signup;
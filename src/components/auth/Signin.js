import React from 'react';

const Signin = () => {
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
                    <p>No account?</p>
                    <p className="main-color" style={{fontWeight: 600, fontSize: "18px"}}>Sign up</p>
                </div>
            </div>
            <h1>Sign in</h1>

            <form>
                <div className="form-group signin">
                    <p className="form-text">Enter your email address</p>
                    <input type="email" className="form-input" placeholder="Name@example.com"/>
                </div>
                <div className="form-group signin">
                    <p className="form-text">Enter your password</p>
                    <input type="password" className="form-input" placeholder="Password"/>
                </div>
                <button type="submit" className='signin-button'>Sign in</button>
            </form>
        </div>
    </div>)
};

export default Signin;
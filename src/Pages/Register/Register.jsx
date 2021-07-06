import './Register.css'

function Register() {
    return (
        <div className="register">
            <form className="registerForm">
                <span className="registerTitle">register</span>
                <label >Email</label>
                <input type="email" className="registerInput" placeholder="Enetr Your email ..." />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enetr Password" />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">Login</button>
        </div>
    )
}

export default Register

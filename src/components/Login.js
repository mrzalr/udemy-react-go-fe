import { useState } from "react"
import Input from "./form/Input"
import { useNavigate, useOutletContext } from "react-router-dom"

const Login = () => {
    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")

    const {SetJwt, SetAlertClassName, SetAlertMessage} = useOutletContext()

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        if(email === "admin@example.com") {
            SetJwt("abc")
            SetAlertClassName("d-none")
            SetAlertMessage("")
            navigate("/")
        } else {
            SetAlertClassName("alert-danger")
            SetAlertMessage("Username or password is invalid")
        }
    }
    return(
        <div className="col-md-6 offset-md-3">
            <h2 className="mb-5">Login</h2>
            <form onSubmit={handleSubmit}>
                <Input 
                    title="Email Address"
                    name="email"
                    type="email"
                    className="form-control"
                    autoComplete="email-new"
                    onChange={(event)=>{ SetEmail(event.target.value) }}
                />
                <Input 
                    title="Password"
                    name="password"
                    type="password"
                    className="form-control"
                    autoComplete="password-new"
                    onChange={(event)=>{ SetPassword(event.target.value) }}
                />

                <div className="d-flex justify-content-end mt-3">
                    <input type="submit" className="btn btn-primary" value="Login"/>
                </div>
            </form>
        </div>
    )
}

export default Login
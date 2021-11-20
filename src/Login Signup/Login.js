import { useState } from "react"
import { Form , Button} from "react-bootstrap"
import { Link } from "react-router-dom"
import { useGlobalContext } from '../Context'
const Login = () => {
    const {changeLogin}=useGlobalContext()
    const [form, setForm] = useState({  password: '', email: '' })

    const formControl = (e) => {
        const { name, value } = e.target
        setForm((prev) => { return ({ ...prev, [name]: value }) })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch("https://survey-app-backend-1234.herokuapp.com/signin", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({...form})
        })
        const result = await res.json()
        console.log(result);
        if (!result.id) {
            console.log("failed");
        }
        else {
            localStorage.setItem('token', result?.token)
            changeLogin(true)
        }
    }
    return (
        <div className="my-5 col-md-7 col-sm-8 col-xs-8 col-lg-6 mx-auto">
            <h1 align="center" className="my-5">Login</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="validateEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" onChange={formControl} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validatePassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" onChange={formControl} required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div className="mt-4"></div><Link to="/signup">Don't have an account? Signup</Link>

        </div>
    )
}

export default Login

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Login({ setToken }) {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3000/api/users/login", {
                email,
                password
            })

            console.log("Response from server:", res.data)
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("user", JSON.stringify(res.data.user));

            setToken(res.data.token); 

            const role = res.data.user.role.toLowerCase();
            
            if (["student", "teacher", "admin"].includes(role)) {
                navigate(`/${role}`);
            } else {
                navigate("/login");
            }
        }

        catch (err) {
            console.log("Error:", err.response?.data || err.message)
            console.log("THis catch is of login.jsx")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit} 
                className="bg-white p-6 rounded-xl shadow-md w-80"
            >
                <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-3 p-2 border rounded"
                    onChange={(e) => setEmail(e.target.value)} 
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-4 p-2 border rounded"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login

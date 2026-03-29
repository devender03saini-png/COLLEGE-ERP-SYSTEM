import { useState } from "react";
import axios from "axios";

function Admin_Home() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        role: "student",
        userId: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:3000/api/users/register",
                formData
            );

            alert(res.data.message);

            setFormData({
                email: "",
                password: "",
                name: "",
                role: "student",
                userId: ""
            });

        } catch (err) {
            console.log("admin_home error")
            alert(err.response?.data?.message || "Error");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

                <h2 className="text-2xl font-bold text-center mb-6">
                    Create User
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />

                    <input
                        type="text"
                        name="userId"
                        placeholder="User ID"
                        value={formData.userId}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />

                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="student">Student</option>
                        <option value="admin">Admin</option>
                        <option value="teacher">Teacher</option>
                        <option value="staff">Staff</option>
                    </select>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Create User
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Admin_Home;
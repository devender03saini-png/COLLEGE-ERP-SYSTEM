// useState manages the admin form state locally in this component.
import { useState } from "react";
// axios is the HTTP library used for the user creation request.
import axios from "axios";
// lucide-react adds polish to the admin form header.
import { UserPlus2 } from "lucide-react";

// Admin_Home renders the admin-side user creation form.
function Admin_Home() {
    // This object stores the current values entered into the form fields.
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        role: "student",
        userId: "",
    });

    // handleChange updates a single field based on the input's name attribute.
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    // handleSubmit sends the admin's create-user request to the backend.
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.post("http://localhost:3000/api/users/register", formData);
            alert(res.data.message);
            setFormData({
                email: "",
                password: "",
                name: "",
                role: "student",
                userId: "",
            });
        } catch (err) {
            alert(err.response?.data?.message || "Error");
        }
    };

    // Returns the upgraded admin user creation form.
    return (
        <div className="flex min-h-screen items-center justify-center p-6">
            <div className="w-full max-w-xl rounded-[32px] border border-white/40 bg-white/55 p-8 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#e1c78f] to-[#b99249] text-slate-900">
                        <UserPlus2 className="h-7 w-7" />
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#8b6a2b]">Admin Panel</p>
                        <h2 className="mt-2 text-3xl font-semibold text-slate-800">Create user</h2>
                    </div>
                </div>

                <p className="mt-4 text-sm text-slate-600">
                    This screen uses axios for API calls, Tailwind CSS for the form styling, and lucide-react for the icon in the header.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full rounded-2xl border border-[#eadcc0] bg-[#fffaf3] px-4 py-3 outline-none transition-all duration-300 focus:border-[#d7bf7e] focus:ring-4 focus:ring-[#f3e5c5]" required />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full rounded-2xl border border-[#eadcc0] bg-[#fffaf3] px-4 py-3 outline-none transition-all duration-300 focus:border-[#d7bf7e] focus:ring-4 focus:ring-[#f3e5c5]" required />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full rounded-2xl border border-[#eadcc0] bg-[#fffaf3] px-4 py-3 outline-none transition-all duration-300 focus:border-[#d7bf7e] focus:ring-4 focus:ring-[#f3e5c5]" required />
                    <input type="text" name="userId" placeholder="User ID" value={formData.userId} onChange={handleChange} className="w-full rounded-2xl border border-[#eadcc0] bg-[#fffaf3] px-4 py-3 outline-none transition-all duration-300 focus:border-[#d7bf7e] focus:ring-4 focus:ring-[#f3e5c5]" required />

                    <select name="role" value={formData.role} onChange={handleChange} className="w-full rounded-2xl border border-[#eadcc0] bg-[#fffaf3] px-4 py-3 outline-none transition-all duration-300 focus:border-[#d7bf7e] focus:ring-4 focus:ring-[#f3e5c5]">
                        <option value="student">Student</option>
                        <option value="admin">Admin</option>
                        <option value="teacher">Teacher</option>
                    </select>

                    <button type="submit" className="erp-button w-full rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5">
                        Create User
                    </button>
                </form>
            </div>
        </div>
    );
}

// Exports the admin route component.
export default Admin_Home;

// useState stores the form fields for the bypass login screen.
import { useState } from "react";
// useNavigate from react-router-dom performs client-side routing after login.
import { useNavigate } from "react-router-dom";
// lucide-react adds the visual identity for the upgraded login card.
import { ArrowUpRight, GraduationCap, ShieldCheck, Sparkles, Globe, Circle } from "lucide-react";

// This token marks the frontend-only bypass login session.
const BYPASS_TOKEN = "dev-bypass-token";

// Login renders the styled prototype-inspired login screen.
function Login({ setToken }) {
    // useNavigate lets the form move the user to the student route after login.
    const navigate = useNavigate();
    // Stores the email typed into the form.
    const [email, setEmail] = useState("");
    // Stores the password typed into the form.
    const [password, setPassword] = useState("");

    // handleSubmit stores a bypass token and a demo user instead of calling the backend.
    const handleSubmit = async (event) => {
        event.preventDefault();
        const bypassUser = {
            name: email || "Demo Student",
            email: email || "student@example.com",
            role: "student",
        };

        localStorage.setItem("token", BYPASS_TOKEN);
        localStorage.setItem("user", JSON.stringify(bypassUser));
        setToken(BYPASS_TOKEN);
        navigate("/student");
    };

    // Returns the upgraded login page UI.
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 md:px-8">
            <div className="erp-orb left-[-6rem] top-[-4rem] h-96 w-96 bg-[#ead7ae]"></div>
            <div className="erp-orb right-[-8rem] top-8 h-[28rem] w-[28rem] bg-[#e5d1a4]/50"></div>
            <div className="erp-orb bottom-[-8rem] left-1/3 h-96 w-96 bg-[#f2e4c2]"></div>

            <div className="relative z-10 w-full max-w-6xl rounded-[28px] border border-[#eadcc0] bg-[#f5efe4] p-4 shadow-[0_28px_70px_rgba(94,72,29,0.15)] md:p-6">
                <div className="flex items-center justify-between px-2 py-2 md:px-4">
                    <div>
                        <p className="text-xl uppercase tracking-[0.35em] text-[#8b6a2b]">College ERP</p>
                        <h1 className="mt-1 text-lg font-semibold text-slate-800 md:text-2xl"></h1>
                    </div>

                    <div className="flex items-center gap-3">
                        <button type="button" className="hidden items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 md:flex">
                            <Globe className="h-4 w-4" />
                            
                        </button>
                        <button type="button" className="flex items-center gap-2 rounded-xl bg-[#d7bf7e] px-4 py-2 text-sm font-semibold text-slate-900 transition-all duration-300 hover:bg-[#c9ac63]">
                            PH- 9XXXX-XXXXX
                            <ArrowUpRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                <div className="grid items-center gap-10 px-2 py-4 lg:min-h-[620px] lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-8">
                    <div className="flex items-center justify-center">
                        <div className="w-full max-w-sm rounded-[26px] bg-white px-7 py-9 shadow-[0_18px_40px_rgba(15,23,42,0.08)] md:px-8">
                            <h2 className="text-center text-[2.35rem] font-semibold tracking-[-0.03em] text-slate-900">Sign in</h2>
                            <p className="mx-auto mt-4 max-w-[15rem] text-center text-sm leading-6 text-slate-600">
                                Hey, Enter your details to login to your account
                            </p>

                            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Enter Email / Phone No"
                                        value={email}
                                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-all duration-300 focus:border-[#d7bf7e] focus:ring-4 focus:ring-[#f3e5c5]"
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </div>

                                <div>
                                    <div className="flex items-center rounded-xl border border-slate-300 bg-white px-4">
                                        <input
                                            type="password"
                                            placeholder="Passcode"
                                            value={password}
                                            className="w-full bg-transparent py-3 text-sm text-slate-800 outline-none"
                                            onChange={(event) => setPassword(event.target.value)}
                                        />
                                        <span className="text-xs font-medium text-slate-500">Hide</span>
                                    </div>
                                </div>

                                <button type="submit" className="w-full rounded-xl bg-[#d7bf7e] px-4 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:bg-[#c9ac63]">
                                    Sign in
                                </button>
                            </form>

                            <div className="my-6 flex items-center gap-3 text-xs text-slate-400">
                                <div className="h-px flex-1 bg-slate-200"></div>
                                <span></span>
                                <div className="h-px flex-1 bg-slate-200"></div>
                            </div>

                           
                            <p className="mt-6 text-center text-xs text-slate-500">
                                Can`t Login? <span className="font-semibold text-slate-700">Contact Erp Cell</span>
                            </p>

                            
                        </div>
                    </div>

                    <div className="relative hidden items-center justify-center overflow-hidden rounded-[32px] bg-[#f5efe4] p-8 lg:flex">

                        <div className="relative flex w-full max-w-xl items-end justify-center">
                            <div className="absolute bottom-10 h-10 w-72 rounded-full bg-slate-400/20 blur-2xl"></div>

                            <div className="absolute left-12 bottom-14">
                                <div className="h-24 w-16 rounded-t-[30px] rounded-b-[18px] bg-gradient-to-b from-rose-400 to-rose-500 shadow-lg"></div>
                                <div className="absolute -top-7 left-2 h-12 w-12 rounded-full bg-gradient-to-br from-violet-700 to-slate-800"></div>
                                <div className="absolute -top-10 left-8 h-4 w-4 rounded-full bg-rose-400"></div>
                            </div>

                            <div className="absolute left-28 bottom-14">
                                <div className="h-20 w-12 rounded-t-[26px] rounded-b-[14px] bg-gradient-to-b from-[#e6d1a0] to-[#c8a55b] shadow-md"></div>
                                <div className="absolute -top-6 left-2 h-10 w-10 rounded-full bg-gradient-to-br from-[#f0e2c0] to-[#d7bf7e]"></div>
                                <div className="absolute -top-8 left-6 h-3 w-3 rounded-full bg-rose-400"></div>
                            </div>

                            <div className="relative">
                                <div className="absolute left-1/2 top-2 h-20 w-20 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#f3dec4] via-[#f3e5c5] to-[#e8c8b6] shadow-md"></div>
                                <div className="absolute left-1/2 top-9 h-3 w-3 -translate-x-6 rounded-full bg-slate-600"></div>
                                <div className="absolute left-1/2 top-9 h-3 w-3 translate-x-3 rounded-full bg-slate-600"></div>
                                <div className="absolute left-1/2 top-14 h-5 w-9 -translate-x-1/2 rounded-b-full border-b-2 border-[#9d7530]"></div>

                                <div className="absolute left-1/2 top-0 flex -translate-x-1/2 gap-2">
                                    <span className="h-5 w-1 rotate-[-25deg] rounded-full bg-[#d7bf7e]"></span>
                                    <span className="h-6 w-1 rounded-full bg-[#d7bf7e]"></span>
                                    <span className="h-5 w-1 rotate-[25deg] rounded-full bg-[#d7bf7e]"></span>
                                </div>

                                <div className="mt-20 h-32 w-44 rounded-[28px] bg-gradient-to-br from-rose-400 via-rose-500 to-rose-600 shadow-xl">
                                    <div className="grid h-full place-items-center p-4">
                                        <div className="w-full space-y-3">
                                            <div className="h-2 rounded-full bg-[#f2e4c2]"></div>
                                            <div className="h-2 rounded-full bg-[#f2e4c2]"></div>
                                            <div className="h-2 rounded-full bg-[#f2e4c2]"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute left-[-7.5rem] top-12 h-7 w-32 origin-right rotate-[-24deg] rounded-full bg-gradient-to-r from-rose-400 via-[#d7bf7e] to-[#c19c56] shadow-md"></div>
                                <div className="absolute right-[-7.5rem] top-12 h-7 w-32 origin-left rotate-[24deg] rounded-full bg-gradient-to-r from-[#c19c56] via-rose-400 to-[#d7bf7e] shadow-md"></div>
                                <div className="absolute left-[-9rem] top-4 h-7 w-36 origin-right rotate-[-52deg] rounded-full bg-gradient-to-r from-rose-400 via-[#d7bf7e] to-[#c19c56] shadow-md"></div>
                                <div className="absolute right-[-9rem] top-4 h-7 w-36 origin-left rotate-[52deg] rounded-full bg-gradient-to-r from-[#c19c56] via-rose-400 to-[#d7bf7e] shadow-md"></div>

                                <div className="absolute left-2 top-[9.4rem] h-28 w-24 origin-top rotate-[38deg] rounded-[26px] border-4 border-[#ead7ae]/80 bg-[#e8d7b1]/45 shadow-md"></div>
                                <div className="absolute right-2 top-[9.4rem] h-28 w-24 origin-top rotate-[-38deg] rounded-[26px] border-4 border-[#ead7ae]/80 bg-[#e8d7b1]/45 shadow-md"></div>
                                <div className="absolute left-10 top-[10.7rem] h-24 w-24 rounded-[26px] border-4 border-[#ead7ae]/80 bg-[#e8d7b1]/45 shadow-md"></div>
                            </div>
                        </div>

                       <a
                          href="https://www.skit.ac.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute bottom-2 right-18"
                        >
                          <div className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-slate-700 shadow hover:bg-white transition">
                            <Sparkles className="h-4 w-4 text-[#9d7530]" />
                            <span>College Official Webpage</span>
                          </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Exports the login page component.
export default Login;

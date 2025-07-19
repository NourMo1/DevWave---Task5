import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  const handleRegister = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!passwordRegex.test(password)) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some((user) => user.email === email);
    if (userExists) {
      toast.error("User already registered with this email");
      return;
    }
    const newUser = { username, email, password };
    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
    toast.success("Registration successful");
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    navigate("/login")
  };


  return (
    <section className="w-full relative top-[72px] py-20 min-h-[calc(100vh-72px)]">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-semibold text-(--primary-color) text-center uppercase mb-15">
          Signup
        </h2>
        <form
          onSubmit={handleRegister}
          className="w-[90%] md:w-[400px] mx-auto flex flex-col justify-center items-center"
        >
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_username"
              id="floating_username"
              className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-zinc-800 appearance-none focus:outline-none focus:ring-0 focus:border-(--primary-color) focus:caret-zinc-800 focus:text-zinc-800 peer"
              placeholder=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label
              htmlFor="floating_username"
              className="peer-focus:font-medium absolute text-sm text-zinc-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-(--primary-color) rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Username
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-zinc-800 appearance-none focus:outline-none focus:ring-0 focus:border-(--primary-color) focus:caret-zinc-800 focus:text-zinc-800 peer"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-zinc-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-(--primary-color) rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-zinc-800 appearance-none focus:outline-none focus:ring-0 focus:border-(--primary-color) focus:caret-zinc-800 focus:text-zinc-800 peer"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-zinc-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-(--primary-color) rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="floating_rePassword"
              id="floating_rePassword"
              className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-zinc-800 appearance-none focus:outline-none focus:ring-0 focus:border-(--primary-color) focus:caret-zinc-800 focus:text-zinc-800 peer"
              placeholder=" "
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label
              htmlFor="floating_rePassword"
              className="peer-focus:font-medium absolute text-sm text-zinc-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-(--primary-color) rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Re password
            </label>
          </div>
          <button
            type="submit"
            className="relative w-full px-7 py-2 md:px-10 md:py-3.5 overflow-hidden group bg-gradient-to-r from-(--secondary-color) to-(--primary-color) hover:bg-gradient-to-r hover:from-(--secondary-color) hover:to-(--primary-color) text-white transition-all ease-out duration-300 cursor-pointer"
          >
            <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
            <span className="relative text-xl font-semibold">Submit</span>
          </button>
          <Link
            to="/login"
            className="text-(--secondary-color) mt-6 hover:text-(--primary-color) font-medium text-lg transition-all ease-out duration-300"
          >
            Login
          </Link>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
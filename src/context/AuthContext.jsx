import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("currentUser");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      }
    } catch (error) {
      localStorage.removeItem("currentUser");
      setUser(null);
    }
  }, []);

  const login = (email, password) => {
    let users = [];
    try {
      users = JSON.parse(localStorage.getItem("users")) || [];
    } catch (error) {
      toast.error(
        "An error occurred reading user data. Please try again later."
      );
      return { success: false, message: "Internal error" };
    }

    const existingUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (existingUser) {
      setUser(existingUser);
      localStorage.setItem("currentUser", JSON.stringify(existingUser));
      toast.success("Successfully logged in!");
      return { success: true, user: existingUser };
    } else {
      return { success: false, message: "Invalid email or password." };
    }
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    toast.success("Successfully logged out.");
  };

  const isLoggedIn = !!user;
  return (
    <AuthContext.Provider value={{ 
      user, 
      isLoggedIn, 
      login, 
      logout 
    }}
      >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
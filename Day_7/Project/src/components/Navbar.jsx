import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const navigate = useNavigate();
  const cardRef = useRef();

  // Track login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Close profile card on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setShowProfileCard(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    setShowProfileCard(false);
    navigate("/login");
  };

  const navLinkStyle = ({ isActive }) =>
    `relative px-3 py-2 font-medium transition duration-300 
     ${isActive ? "text-yellow-400" : "text-white hover:text-yellow-300"}`;

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-md shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-yellow-400 tracking-wide cursor-pointer hover:scale-105 transition duration-300">
          MyStore
        </h1>

        {/* Links */}
        <div className="flex gap-8 items-center">

          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/products" className={navLinkStyle}>
            Product
          </NavLink>

          <NavLink to="/addproducts" className={navLinkStyle}>
            Add Product
          </NavLink>

          {/* Conditional Login/Profile */}
          {!user ? (
            <NavLink to="/login" className={navLinkStyle}>
              Login / Signup
            </NavLink>
          ) : (
            <div className="relative" ref={cardRef}>
              {/* Profile Icon */}
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  onClick={() => setShowProfileCard(!showProfileCard)}
                />
              ) : (
                <FaUserCircle
                  size={32}
                  className="text-white cursor-pointer"
                  onClick={() => setShowProfileCard(!showProfileCard)}
                />
              )}

              {/* Profile Card Dropdown */}
              {showProfileCard && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50">
                  <div className="flex flex-col items-center">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-16 h-16 rounded-full object-cover mb-2"
                      />
                    ) : (
                      <FaUserCircle size={64} className="text-gray-500 mb-2" />
                    )}
                    <h2 className="font-bold text-lg">{user.displayName || "No Name"}</h2>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    

                    <button
                      onClick={handleLogout}
                      className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
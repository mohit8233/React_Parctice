
 import React, { useState } from "react";
 import Navbar from "../components/Navbar";
 import { auth } from "../firebase";
 import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   GoogleAuthProvider,
   signInWithPopup
 } from "firebase/auth";
 import { useNavigate } from "react-router-dom";

 const LoginSignup = () => {

   const [isLogin, setIsLogin] = useState(true);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [name, setName] = useState("");
   const [loading, setLoading] = useState(false);

   const navigate = useNavigate();

   // 🔹 Email Login / Signup
   const handleSubmit = async () => {
     if (!email || !password) {
       alert("Please fill all fields");
       return;
     }

     try {
       if (isLogin) {
         await signInWithEmailAndPassword(auth, email, password);
         alert("Login Successful ✅");
         navigate("/");
       } else {
         await createUserWithEmailAndPassword(auth, email, password);
         alert("Account Created ✅");
         setIsLogin(true);
       }
     } catch (error) {
       alert(error.message);
     }
   };

 // 🔹 Google Login
   const handleGoogleLogin = async () => {
     if (loading) return;

     setLoading(true);

     try {
       const provider = new GoogleAuthProvider();
       await signInWithPopup(auth, provider);

       alert("Google Login Successful ✅");
       navigate("/");

     } catch (error) {
       console.log(error.code);
     }
    setLoading(false);
   };

  return (
    <>
       <Navbar />

       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-300">
        <div className="backdrop-blur-lg bg-white/70 p-8 rounded-2xl shadow-2xl w-96 border border-white/40">

          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
           {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
         </h2>

           <p className="text-center text-gray-600 mb-6 text-sm">
             {isLogin ? "Login to continue" : "Sign up to get started"}
        </p>

           {!isLogin && (
           <input
              type="text"
              placeholder="Full Name"
             onChange={(e) => setName(e.target.value)}
               className="w-full border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none p-3 mb-4 rounded-lg transition"
             />
           )}

           <input
             type="email"
             placeholder="Email Address"
             onChange={(e) => setEmail(e.target.value)}
             className="w-full border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none p-3 mb-4 rounded-lg transition"
           />

           <input
             type="password"
             placeholder="Password"
             onChange={(e) => setPassword(e.target.value)}
           className="w-full border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none p-3 mb-6 rounded-lg transition"
           />

           <button
             onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition duration-300 shadow-md"
           >
             {isLogin ? "Login" : "Sign Up"}
           </button>

           <div className="flex items-center my-6">
             <div className="flex-1 h-px bg-gray-300"></div>
             <span className="px-3 text-gray-500 text-sm">OR</span>
             <div className="flex-1 h-px bg-gray-300"></div>
           </div>


           <button className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"

             onClick={handleGoogleLogin}
           disabled={loading}
           >
             Continue with Google
           </button>

          <p className="text-center mt-6 text-sm text-gray-600">
             {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-purple-600 font-semibold cursor-pointer ml-2 hover:underline"
             >
               {isLogin ? "Sign Up" : "Login"}
             </span>
           </p>
         </div>
       </div>
     </>
  );
 };

export default LoginSignup;














// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import { auth, db } from "../firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
//   onAuthStateChanged,
//   signOut,
//   updateProfile
// } from "firebase/auth";
// import { doc, setDoc, getDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa"; // Profile icon

// const LoginSignup = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [user, setUser] = useState(null);
//   const [extraData, setExtraData] = useState(null);

//   const navigate = useNavigate();

//   // 🔹 Fetch profile data from Firestore
//   const fetchExtraProfile = async (uid) => {
//     try {
//       const docRef = doc(db, "users", uid);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         setExtraData(docSnap.data());
//       } else {
//         setExtraData(null);
//       }
//     } catch (error) {
//       console.log("Error fetching profile:", error.message);
//     }
//   };

//   // 🔹 Detect logged-in user
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//         fetchExtraProfile(currentUser.uid);
//       } else {
//         setUser(null);
//         setExtraData(null);
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   // 🔹 Email Login / Signup
//   const handleSubmit = async () => {
//     if (!email || !password || (!isLogin && !name)) {
//       alert("Please fill all fields");
//       return;
//     }

//     try {
//       if (isLogin) {
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         setUser(userCredential.user);
//         await fetchExtraProfile(userCredential.user.uid);
//         alert("Login Successful ✅");
//         navigate("/");
//       } else {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);

//         // Update Firebase Auth profile
//         await updateProfile(userCredential.user, { displayName: name });

//         // Save extra info in Firestore
//         await setDoc(doc(db, "users", userCredential.user.uid), {
//           name,
//           email,
//           createdAt: new Date().toISOString()
//         });

//         alert("Account Created ✅");
//         setIsLogin(true);
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   // 🔹 Google Login
//   const handleGoogleLogin = async () => {
//     if (loading) return;
//     setLoading(true);

//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);

//       // Save extra info in Firestore if new user
//       const docRef = doc(db, "users", result.user.uid);
//       const docSnap = await getDoc(docRef);
//       if (!docSnap.exists()) {
//         await setDoc(docRef, {
//           name: result.user.displayName || "",
//           email: result.user.email,
//           createdAt: new Date().toISOString()
//         });
//       }

//       setUser(result.user);
//       await fetchExtraProfile(result.user.uid);

//       alert("Google Login Successful ✅");
//       navigate("/");
//     } catch (error) {
//       console.log(error.message);
//     }

//     setLoading(false);
//   };

//   // 🔹 Logout
//   const handleLogout = async () => {
//     await signOut(auth);
//     setUser(null);
//     setExtraData(null);
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-300">
//         <div className="backdrop-blur-lg bg-white/70 p-8 rounded-2xl shadow-2xl w-96 border border-white/40">

//           {!user ? (
//             <>
//               <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
//                 {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
//               </h2>
//               <p className="text-center text-gray-600 mb-6 text-sm">
//                 {isLogin ? "Login to continue" : "Sign up to get started"}
//               </p>

//               {!isLogin && (
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   onChange={(e) => setName(e.target.value)}
//                   className="w-full border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none p-3 mb-4 rounded-lg transition"
//                 />
//               )}

//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none p-3 mb-4 rounded-lg transition"
//               />

//               <input
//                 type="password"
//                 placeholder="Password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none p-3 mb-6 rounded-lg transition"
//               />

//               <button
//                 onClick={handleSubmit}
//                 className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition duration-300 shadow-md"
//               >
//                 {isLogin ? "Login" : "Sign Up"}
//               </button>

//               <div className="flex items-center my-6">
//                 <div className="flex-1 h-px bg-gray-300"></div>
//                 <span className="px-3 text-gray-500 text-sm">OR</span>
//                 <div className="flex-1 h-px bg-gray-300"></div>
//               </div>

//               <button
//                 className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
//                 onClick={handleGoogleLogin}
//                 disabled={loading}
//               >
//                 Continue with Google
//               </button>

//               <p className="text-center mt-6 text-sm text-gray-600">
//                 {isLogin ? "Don't have an account?" : "Already have an account?"}
//                 <span
//                   onClick={() => setIsLogin(!isLogin)}
//                   className="text-purple-600 font-semibold cursor-pointer ml-2 hover:underline"
//                 >
//                   {isLogin ? "Sign Up" : "Login"}
//                 </span>
//               </p>
//             </>
//           ) : (
//             <>
//               <div className="flex flex-col items-center mt-4">
//                 {/* Profile Picture */}
//                 {user.photoURL ? (
//                   <img
//                     src={user.photoURL}
//                     alt="Profile"
//                     className="w-20 h-20 rounded-full object-cover"
//                   />
//                 ) : (
//                   <FaUserCircle size={80} className="text-gray-500" />
//                 )}

//                 {/* User Info */}
//                 <h2 className="text-2xl font-bold mt-2">{user.displayName || extraData?.name || "No Name"}</h2>
//                 <p><strong>Email:</strong> {user.email}</p>
//                 <p><strong>UID:</strong> {user.uid}</p>

//                 {extraData && (
//                   <div className="mt-4 text-left w-full px-4">
//                     <h3 className="font-semibold mb-2">Extra Info:</h3>
//                     {Object.keys(extraData).map((key) => (
//                       <p key={key}><strong>{key}:</strong> {extraData[key]}</p>
//                     ))}
//                   </div>
//                 )}

//                 <button
//                   onClick={handleLogout}
//                   className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </>
//           )}

//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginSignup;
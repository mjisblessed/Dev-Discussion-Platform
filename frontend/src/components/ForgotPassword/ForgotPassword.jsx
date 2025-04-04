// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";
// import axios from "axios";
//  import "./ForgotPassword.css";

// const ForgotPassword = () => {
//   const [emailid, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const BASE_URL = "http://localhost:5000";

//   const handleEmailChange = (e) => setEmail(e.target.value);
//   console.log("API Endpoint:", `${BASE_URL}/auth/send-otp`);
  
//   const sendOtp = async () => {
//     console.log(" Sending OTP request...");
//     setLoading(true);
//     try {
//       console.log(" Making POST request to:", `${BASE_URL}/auth/send-otp`);
//       console.log(" Request body:", { emailid });
//       const response = await axios.post(`${BASE_URL}/auth/send-otp/${emailid}`);
//       console.log("Response received:", response);
//       if (response.status===200) {
//         toast.success("OTP sent successfully !");
//         console.log(`Navigating to: /verify-otp/${emailid}`);
//         navigate(`/verify-otp/${emailid}`);
//       }
//     } catch (error) {
//       console.error(" Error sending OTP:", error.response?.data || error.message);
//       setError("An error occurred. Please try again later.");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="forgot-password-container">
//       <div className="forgot-password-card">
//         <h2>Forgot Password?</h2>
//         <p>Enter your email and we’ll send you an OTP.</p>
//         <div className="forgot-password-form">
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             placeholder="Enter your email"
//             autoComplete="email"
//             value={emailid}
//             onChange={handleEmailChange}
//             className="forgot-password-input"
//           />
//           <button
//             className="forgot-password-btn"
//             onClick={sendOtp}
//             disabled={loading}
//           >
//             {loading ? "Sending..." : "Send OTP"}
//           </button>
//         </div>
//         {error && <p className="error-text">{error}</p>}
//         <p className="back-to-login" onClick={() => navigate("/login")}>⬅ Back to Login</p>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

import pic from "../Images/login1.jpg";
import "../Css/Login.css";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import pic1 from "../Images/success.png";
import pic2 from "../Images/error.png";
function Login() {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const [showPassword, setShowPassword] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);

  const navigate = useNavigate();

  // Optional: Validate email format
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const emailHandler = (e) => {
    const value = e.target.value;
    setEmailOrPhone(value);
    if (value.includes("@") && !isValidEmail(value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  // ✅ Handle Login Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (emailOrPhone === "" || password === "") {
      swal("Oops!", "Please fill out all required fields!", "error");
      return;
    }

    try {
      const res = await axios.post(`${ROOT_URL}/api/users/login`, {
        emailOrPhone, // ✅ backend expects this
        password,
      });

      console.log("Login Response:", res.data);

      const { token, user } = res.data;

      // Save credentials locally
      localStorage.setItem("token", token);
      sessionStorage.setItem("username", user.name);
      sessionStorage.setItem("userid", user.userId);
      sessionStorage.setItem("useremail", user.email);
      sessionStorage.setItem("userphone", user.phone);
      sessionStorage.setItem("userstatus", user.status);

      // swal("Login Successful!", "Welcome back!", "success");
      swal({
  content: {
    element: "div",
    attributes: {
      innerHTML: `
        <div>
          <img src="${pic1}" alt="success" class="swal-icon-animate"  />
          <h2 style="margin-top:10px;">Congratulations!</h2>
          <p style="margin-top:10px; font-size:18px;">Login Successful</p>
        </div>
      `,
    },
  },
  buttons: true,

  className: "swal-toast",
});

      navigate("/"); // Redirect after login
    } catch (err) {
      console.error("Login Error:", err);
      const msg =
        err.response?.data?.message || "Email/Phone or password incorrect!";
     swal({
  content: {
    element: "div",
    attributes: {
      innerHTML: `
        <div>
          <img src="${pic2}" alt="error" class="swal-icon-animate"  />
          <h2 style="margin-top:15px;">Oops!</h2>
          <p style="margin-top:16px; font-size:18px;">${msg}</p>
        </div>
      `,
    },
  },
  buttons: true,

  className: "swal-toast",
});
    }
  };

  return (
    <>
      <section>
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col col-xl-10">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-md-block mt-5 loginimage">
                    <img src={pic} alt="loginform" className="img-fluid" />
                  </div>
                  <div
                    className="col-md-6 col-lg-7 d-flex align-items-center"
                    id="loginform"
                  >
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span className="h1 fw-bold mb-0 text-white">
                            Synthosphere Academy
                          </span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3 text-white">
                          Sign into your account
                        </h5>

                        <div className="form-group mb-4">
                          <label className="text-white">
                            Email or Phone number
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your email or phone"
                            onChange={emailHandler}
                            value={emailOrPhone}
                          />
                          {emailError && (
                            <span className="link-warning">Invalid email</span>
                          )}
                        </div>

                        <div className="form-group mb-4 position-relative">
                          <label className="text-white">Password</label>
                          <input
                            type={showPassword ? "text" : "password"}
                            className="form-control form-control-lg"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                          />
                          <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="passwordtoggle"
                            style={{
                              position: "absolute",
                              right: "20px",
                              top: "35px",
                              cursor: "pointer",
                              
                            }}
                          >
                            {showPassword ? (
                              <i className="fa fa-eye"></i>
                            ) : (
                              <i className="fa fa-eye-slash"></i>
                            )}
                          </span>
                        </div>

                        <div className="pt-1 mb-4 text-center">
                          <button
                             className="btn-lg signupbutton w-25"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>

                        <div className="d-flex justify-content-between">
                          <a className="text-success" href="/forgotpassword">
                            Forgot password?
                          </a>
                          <span className="text-white register_text">
                            Don’t have an account?{" "}
                            <a className="reg text-success" href="/register">
                              Register here
                            </a>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;

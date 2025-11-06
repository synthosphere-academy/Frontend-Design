import React  from "react";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import "../../Css/Register.css";
// import { useParams } from "react-router-dom";
// const { refid } = useParams();
function Registrationanyuser() {
  const navigate = useNavigate();
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const [showPassword, setShowPassword] = useState(false);
  const[ showconfirmPassword, setShowConfirmPassword]= useState(false);
  // const { parentId } = useParams();
  // form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [aadharNo, setAadharNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [panNo, setpancardno] = useState("");
  const [panPhoto, setpanphoto] = useState("");
   const [parentId, setParentId] = useState("SA14316");
  //  const [parentId, setParentId] = useState(refid || "SA37499");
  const [mobilenoerror, setmobileerror] = useState(false);
  const [aadharFront, setAadharPhoto] = useState(null);
   const [aadharBack, setAadharPhotoback] = useState(null);

  // validation states
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [aadharError, setAadharError] = useState(false);
  const [confirmPassError, setConfirmPassError] = useState(false);

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const emailHandler = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(!isValidEmail(value));
  };
  const mobileHandler = (e) => {
    const value = e.target.value;

    // Allow only numbers (remove any non-digit characters)
    const numericValue = value.replace(/\D/g, "");

    // Update state
    setPhone(numericValue);

    // Validate length (10 digits required)
    setPhoneError(numericValue.length !== 10);
  };

  const aadharHandler = (e) => {
    const value = e.target.value;

    // Allow only digits
    const numericValue = value.replace(/\D/g, "");

    // Update state
    setAadharNo(numericValue);

    // Aadhaar must be exactly 12 digits
    setAadharError(numericValue.length !== 12);
  };

  const passwordHandler = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!/[A-Z]/.test(value)) {
      setPasswordError("Must contain one uppercase letter");
    } else if (!/[!@#$%^&*(),.?\":{}|<>]/.test(value)) {
      setPasswordError("Must contain one special character");
    } else if (!/\d/.test(value)) {
      setPasswordError("Must contain one number");
    } else if (value.length < 8) {
      setPasswordError("Must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const confirmPasswordHandler = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmPassError(value !== password);
  };

  const handleAadharPhoto = (e) => {
     const file = e.target.files[0];
  if (file && file.size > 1 * 1024 * 1024) { // 1 MB limit
    swal("Error!", "Aadhar Front image must be smaller than 1 MB!", "error");
    e.target.value = ""; // reset file input
    return;
  }
  setAadharPhoto(file);
  };
   const handleAadharPhoto_back = (e) => {
   const file = e.target.files[0];
  if (file && file.size > 1 * 1024 * 1024) { // 1 MB limit
    swal("Error!", "Aadhar Back image must be smaller than 1 MB!", "error");
    e.target.value = "";
    return;
  }
  setAadharPhotoback(file);
  };
  const handlepanPhoto = (e) => {
     const file = e.target.files[0];
  if (file && file.size > 1 * 1024 * 1024) { // 1 MB limit
    swal("Error!", "PAN card image must be smaller than 1 MB!", "error");
    e.target.value = "";
    return;
  }
  setpanphoto(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (!name || !phone || !email || !address || !aadharNo || !password) {
      swal("Oops!", "Please fill all required fields!", "error");
      return;
    }

    if (emailError || phoneError || passwordError || confirmPassError) {
      swal("Oops!", "Please correct all validation errors!", "error");
      return;
    }

    const checkbox = document.getElementById("checkbox_terms");
    if (!checkbox.checked) {
      swal("Oops!", "You must agree to the terms & conditions!", "error");
      return;
    }

    try {
      // Create FormData for sending text + file
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("address", address);
      formData.append("aadharNo", aadharNo);
      formData.append("panNo", panNo);
      formData.append("password", password);
      formData.append("parentId", parentId);
      if (aadharFront) formData.append("aadharFront", aadharFront);
      if (panPhoto) formData.append("panPhoto", panPhoto);
      if (aadharBack) formData.append("aadharBack", aadharBack);

      const res = await axios.post(`${ROOT_URL}/api/users/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        swal("Success!", "Registration completed successfully!", "success");
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      swal(
        "Error!",
        error.response?.data?.message || "Something went wrong!",
        "error"
      );
    }
  };

  return (
    <section>
      <div className="container formcontainer mt-5 mb-5">
        <div className="display-5 text-white text-center">Register Here!</div>
        <form className="row g-3 py-2" onSubmit={handleSubmit}>
          <div className="col-lg-6">
            <label className="form-label text-white">Sponser ID</label>
            <input
              type="text"
              className="form-control form-control-lg inputform"
              onChange={(e) => setParentId(e.target.value)}
              placeholder="Enter sponsor Id"
              // value={parentId}
             
            />
          </div>

          <div className="col-lg-6">
            <label className="form-label text-white">Full Name</label>
            <input
              type="text"
              className="form-control form-control-lg inputform"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="col-lg-6">
            <label className="form-label text-white">Phone Number</label>
            <input
              type="text"
              className="form-control form-control-lg inputform"
              placeholder="Enter phone number"
              onChange={mobileHandler}
              value={phone}
            />
            {phoneError && (
              <span className="link-danger">Invalid phone number</span>
            )}
          </div>

          <div className="col-lg-6">
            <label className="form-label text-white">Email</label>
            <input
              type="email"
              className="form-control form-control-lg inputform"
              placeholder="Enter your email"
              onChange={emailHandler}
              value={email}
            />
            {emailError && <span className="link-danger">Invalid email</span>}
          </div>

          <div className="col-lg-6">
            <label className="form-label text-white">Address</label>
            <input
              type="text"
              className="form-control form-control-lg inputform"
              placeholder="Enter address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="col-lg-6">
            <label className="form-label text-white">Aadhar Number</label>
            <input
              type="text"
              className="form-control form-control-lg inputform"
              placeholder="Enter 12-digit Aadhaar number"
              onChange={aadharHandler}
              value={aadharNo}
              maxLength={12}
            />
            {aadharError && (
              <small className="text-danger">
                Aadhaar number must be 12 digits
              </small>
            )}
          </div>
          <div className="col-lg-6">
            <label className="form-label text-white">Pan Number</label>
            <input
              type="text"
              className="form-control form-control-lg inputform"
              placeholder="Enter Pancard Number"
              onChange={(e) => setpancardno(e.target.value)}
              value={panNo}
            />
          </div>

          <div className="col-lg-6">
            <label className="form-label text-white">Upload Aadhar Photo(Front)</label>
            <input
              type="file"
              className="form-control form-control-lg inputform"
              accept=".jpg,.jpeg,.png"
              onChange={handleAadharPhoto}
            />
          </div>
            <div className="col-lg-6">
            <label className="form-label text-white">Upload Aadhar Photo(Back)</label>
            <input
              type="file"
              className="form-control form-control-lg inputform"
              accept=".jpg,.jpeg,.png"
              onChange={handleAadharPhoto_back}
            />
          </div>
          <div className="col-lg-6">
            <label className="form-label text-white">
              Upload Pancard Photo
            </label>
            <input
              type="file"
              className="form-control form-control-lg inputform"
              accept=".jpg,.jpeg,.png"
              onChange={handlepanPhoto}
            />
          </div>
          <div className="col-lg-6">
            <label className="form-label text-white">Password</label>
            <div className="d-flex">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control form-control-lg inputform"
                placeholder="Enter password"
                onChange={passwordHandler}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  cursor: "pointer",
                  marginLeft: "-9%",
                  fontSize: "20px",
                }}
                className="mt-2"
              >
                {showPassword ? (
                  <i className="fa fa-eye"></i>
                ) : (
                  <i className="fa fa-eye-slash"></i>
                )}
              </span>
            </div>
            {passwordError && (
              <span className="link-danger">{passwordError}</span>
            )}
          </div>

          <div className="col-lg-6">
            <label className="form-label text-white">Confirm Password</label>
            <div className="d-flex">
            <input
                onClick={() => setShowConfirmPassword(!showconfirmPassword)}
              className="form-control form-control-lg inputform"
              placeholder="Confirm Password"
              onChange={confirmPasswordHandler}
              value={confirmPassword}
            />
            <span
                onClick={() => setShowConfirmPassword(!showconfirmPassword)}
                style={{
                  cursor: "pointer",
                  marginLeft: "-9%",
                  fontSize: "20px",
                }}
                className="mt-2"
              >
                {showPassword ? (
                  <i className="fa fa-eye"></i>
                ) : (
                  <i className="fa fa-eye-slash"></i>
                )}
              </span>
              </div>
            {confirmPassError && (
              <span className="link-danger">Passwords do not match</span>
            )}
          </div>

          <div className="col-12 text-white">
            <input type="checkbox" id="checkbox_terms" /> I agree to the{" "}
            <a href="/terms" target="_blank" rel="noreferrer">
              Terms and Conditions
            </a>
          </div>

          <div className="pt-1 text-center">
            <button className="btn-lg signupbutton w-25" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Registrationanyuser;

import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const KYC = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const userId = sessionStorage.getItem("userid") || "SA12345";
console.log("UserID:", userId);
  const [bankDetails, setBankDetails] = useState(null);
  const [loading, setLoading] = useState(true);
    const [KycError, setKYcError] = useState("");

  // Form state
  const [formData, setFormData] = useState({
    userId,
    name: "",
    nameAsPerDocument: "",
    bankName: "",
    accountNo: "",
    branchName: "",
    ifscCode: "",
  });
  const [passbookPhoto, setPassbookPhoto] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Fetch bank details on load
  useEffect(() => {
    const fetchBankDetails = async () => {
      try {
        const response = await axios.post(`${ROOT_URL}/api/users/full-details`, { userId });
        if (response.data.success && response.data.data) {
          console.log("Bank Details:", response.data.data);
          
           setBankDetails(response.data.data.bankDetails);
        }
      } catch (error) {
        console.log("Bank details not found:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBankDetails();
  }, [ROOT_URL, userId]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file change
  const handleFileChange = (e) => {
   
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!validTypes.includes(file.type)) {
        setKYcError("Only JPG, JPEG, or PNG files are allowed.");
         swal("Invalid File", "Only JPG, JPEG, or PNG files are allowed.", "error");
        e.target.value = null;
        return;
      }

      if (file.size > 1 * 1024 * 1024) {
        setKYcError("File size must be less than 1 MB.");
           swal("File Too Large", "File size must be less than 1 MB.", "warning");
        e.target.value = null;
        return;
      }
     
      setPassbookPhoto(file);
      setKYcError("");
      console.log("PAN Photo:", file);
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let key in formData) {
      if (!formData[key]) {
        swal("Warning", "All fields are required", "warning");
        return;
      }
    }

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => form.append(key, value));
    if (passbookPhoto) form.append("passbookPhoto", passbookPhoto);

    try {
      setSubmitting(true);
      const response = await axios.post(`${ROOT_URL}/api/bankdetails/save`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      swal("Success", response.data.message || "Bank details saved!", "success");
      setBankDetails(response.data.data);
      setSubmitting(false);
    } catch (error) {
      console.error(error);
      setSubmitting(false);
      swal(
        "Error",
        error.response?.data?.message || "Failed to save bank details",
        "error"
      );
    }
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;

  // If bank details exist → show table
  if (bankDetails) {
    return (
      <div className="container my-4 d-flex justify-content-center">
        <table className="table table-striped w-75 shadow-sm">
          <thead>
            <tr>
              <th className="text-center">User ID</th>
              <th className="text-center">Name as per Document</th>
              <th className="text-center">KYC Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">{bankDetails.userId}</td>
              <td className="text-center">{bankDetails.nameAsPerDocument}</td>
              <td className="text-center">{bankDetails.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  // Otherwise → show KYC form
  return (
    <div
      className="container my-2 d-flex justify-content-center align-items-center"
      style={{ minHeight: "70vh" }}
    >
      <form
        onSubmit={handleSubmit}
        className="shadow p-4 rounded bg-white"
        style={{ maxWidth: "900px", width: "100%" }}
      >
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">User ID</label>
            <input type="text" name="userId" className="form-control" value={formData.userId} readOnly />
          </div>
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input type="text" name="name" className="form-control" placeholder="Enter full name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Name as per Document</label>
            <input type="text" name="nameAsPerDocument" className="form-control" placeholder="Enter name as per document" value={formData.nameAsPerDocument} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Bank Name</label>
            <input type="text" name="bankName" className="form-control" placeholder="Enter bank name" value={formData.bankName} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Account Number</label>
            <input type="text" name="accountNo" className="form-control" placeholder="Enter account number" value={formData.accountNo} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Branch Name</label>
            <input type="text" name="branchName" className="form-control" placeholder="Enter branch name" value={formData.branchName} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">IFSC Code</label>
            <input type="text" name="ifscCode" className="form-control" placeholder="Enter IFSC code" value={formData.ifscCode} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Upload Passbook Photo</label>
            <input type="file"  accept=".jpg,.jpeg,.png" className="form-control" onChange={handleFileChange} />
          </div>
            {KycError && <span className="link-danger">{KycError}</span>}
        </div>

        <div className="text-center mt-4">
          <button type="submit" className=" signupbutton w-25" disabled={submitting}>
            {submitting ? "Saving..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default KYC;
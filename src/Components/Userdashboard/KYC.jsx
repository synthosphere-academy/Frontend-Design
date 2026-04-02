import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const KYC = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const userId = sessionStorage.getItem("userid") || "SA12345";

  const [bankDetails, setBankDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [KycError, setKYcError] = useState("");

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

  // Fetch KYC details
  useEffect(() => {
    const fetchBankDetails = async () => {
      try {
        const response = await axios.post(
          `${ROOT_URL}/api/users/full-details`,
          { userId },
        );

        if (response.data.success && response.data.data) {
          const bank = response.data.data.bankDetails;

          if (bank) {
            setBankDetails(bank);

            // Prefill form if rejected
            if (bank.status?.toLowerCase() === "rejected") {
              setFormData({
                userId: bank.userId || userId,
                name: bank.name || "",
                nameAsPerDocument: bank.nameAsPerDocument || "",
                bankName: bank.bankName || "",
                accountNo: bank.accountNo || "",
                branchName: bank.branchName || "",
                ifscCode: bank.ifscCode || "",
              });
            }
          }
        }
      } catch (error) {
        console.log("No KYC found for this user");
      } finally {
        setLoading(false);
      }
    };

    fetchBankDetails();
  }, [ROOT_URL, userId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const validTypes = ["image/jpeg", "image/jpg", "image/png"];

      if (!validTypes.includes(file.type)) {
        setKYcError("Only JPG, JPEG, or PNG files allowed");
        swal("Invalid File", "Only JPG, JPEG, or PNG files allowed", "error");
        e.target.value = null;
        return;
      }

      if (file.size > 1 * 1024 * 1024) {
        setKYcError("File must be under 1MB");
        swal("File Too Large", "File must be under 1MB", "warning");
        e.target.value = null;
        return;
      }

      setPassbookPhoto(file);
      setKYcError("");
    }
  };

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

    if (passbookPhoto) {
      form.append("passbookPhoto", passbookPhoto);
    }

    try {
      setSubmitting(true);

      const response = await axios.post(
        `${ROOT_URL}/api/bankdetails/save`,
        form,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );

      swal("Success", response.data.message || "KYC submitted!", "success");

      setBankDetails(response.data.data);
      setSubmitting(false);
    } catch (error) {
      console.error(error);
      setSubmitting(false);

      swal(
        "Error",
        error.response?.data?.message || "Failed to submit KYC",
        "error",
      );
    }
  };

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  // Show table if KYC exists AND not rejected
  if (bankDetails && bankDetails.status?.toLowerCase() !== "rejected") {
    return (
      <div className=" container my-4">
        <div className="table-responsive">
          <table className="table table-striped shadow-sm text-center">
            <thead>
              <tr>
                <th style={{ minWidth: "120px" }} className="text-center">
                  User ID
                </th>
                <th style={{ minWidth: "120px" }} className="text-center">
                  Name as per Document
                </th>
                <th style={{ minWidth: "100px" }} className="text-center">
                  KYC Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">{bankDetails.userId}</td>
                <td className="text-center">{bankDetails.nameAsPerDocument}</td>
                <td>
                  <span
                    className={`badge ${
                      bankDetails.status === "verified"
                        ? "bg-success"
                        : "bg-warning text-dark"
                    }`}
                    style={{ whiteSpace: "normal" }}
                  >
                    {bankDetails.status}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

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
        {/* Message for new user */}
        {!bankDetails && (
          <div className="alert alert-info text-center">
            Please give your bank details.
          </div>
        )}

        {/* Message for rejected */}
        {bankDetails?.status === "rejected" && (
          <div className="alert alert-danger text-center">
            Your bank details were rejected. Please correct the details and
            submit again.
          </div>
        )}

        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">User ID</label>
            <input
              type="text"
              name="userId"
              className="form-control"
              value={formData.userId}
              readOnly
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Name as per Document</label>
            <input
              type="text"
              name="nameAsPerDocument"
              className="form-control"
              value={formData.nameAsPerDocument}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Bank Name</label>
            <input
              type="text"
              name="bankName"
              className="form-control"
              value={formData.bankName}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Account Number</label>
            <input
              type="text"
              name="accountNo"
              className="form-control"
              value={formData.accountNo}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Branch Name</label>
            <input
              type="text"
              name="branchName"
              className="form-control"
              value={formData.branchName}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">IFSC Code</label>
            <input
              type="text"
              name="ifscCode"
              className="form-control"
              value={formData.ifscCode}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Upload Passbook Photo</label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              className="form-control"
              onChange={handleFileChange}
            />
          </div>

          {KycError && <span className="text-danger">{KycError}</span>}
        </div>

        <div className="text-center mt-4">
          <button
            type="submit"
            className="signupbutton w-lg-25 w-sm-100"
            disabled={submitting}
          >
            {submitting ? "Saving..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default KYC;

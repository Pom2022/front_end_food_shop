import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import validateRegister from "../../validators/validate-register";
import useLoading from "../../hooks/useLoading";
import * as authApi from "../../apis/auth-api";

const initialInput = {
  firstName: "",
  lastName: "",
  emailOrMobile: "",
  password: "",
  repassword: "",
  address: "",
};

function RegisterForm() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const { startLoading, stopLoading } = useLoading();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    console.log("g");
    try {
      e.preventDefault();
      console.log(input);
      const result = validateRegister(input);
      console.log(result);
      if (result) {
        setError(result);
      } else {
        setError({});
        startLoading();
        await authApi.register(input);
        navigate("/login");
        setInput(initialInput);

        toast.success("success register. please log in to continue");

        console.log("input");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="d-flex justify-content-center pt-5 pb-3 mt-5">
      <form onSubmit={handleSubmitForm}>
        <div className="mb-3">
          <input
            type="text"
            value={input.firstName}
            onChange={handleChangeInput}
            className="form-control rounded-md h-13"
            name="firstName"
            placeholder="firstName"
            error={error.firstName}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={input.lastName}
            onChange={handleChangeInput}
            className="form-control rounded-md h-13"
            id="lastName"
            name="lastName"
            placeholder="lastName"
            error={error.lastName}
          />
        </div>
        <div className="mb-3">
          <input
            // type="email"
            value={input.emailOrMobile}
            onChange={handleChangeInput}
            className="form-control rounded-md h-13"
            // id="email"
            name="emailOrMobile"
            placeholder="Email or Mobile number"
            error={error.emailOrMobile}
          />
        </div>
        <div className="mb-3">
          <textarea
            type="text"
            value={input.address}
            onChange={handleChangeInput}
            className="form-control rounded-md h-13"
            id="address"
            name="address"
            placeholder="address"
            error={error.address}
          />
        </div>

        <div>
          <select
            name="role"
            id="role"
            onChange={handleChangeInput}
            error={error.role}
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* address */}
        {/* <div className="mb-3">
          <input
            type="address"
            value={input.address}
            onChange={handleChangeInput}
            className="from-control"
            id="address"
            name="address"
            placeholder="address"
            error={error.address}
          />
        </div> */}
        <div className="mb-3">
          <input
            type="password"
            value={input.password}
            onChange={handleChangeInput}
            className="form-control rounded-md h-13"
            id="password"
            name="password"
            placeholder="password"
            error={error.password}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={input.repassword}
            onChange={handleChangeInput}
            className="form-control rounded-md h-13"
            id="repassword"
            name="repassword"
            placeholder="repassword"
            error={error.repassword}
          />
        </div>
        <nav>
          <div>
            <button
              type="submit"
              name=""
              id=""
              className="btn btn-secondary w-100"
            >
              Register
            </button>
          </div>
        </nav>
      </form>
    </div>
  );
}

export default RegisterForm;

import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

import useAuth from "../../hooks/useAuth";
function LoginForm() {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await login(emailOrMobile, password);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  return (
    <form
      className="d-flex flex-column justify-center items-center mt-[250px] gap-3 px-[25px]"
      onSubmit={handleSubmitForm}
    >
      <input
        type="text"
        className="form-control rounded-md h-13"
        placeholder="Email address or phone number"
        value={emailOrMobile}
        onChange={(e) => setEmailOrMobile(e.target.value)}
      />
      <input
        type="password"
        className="form-control rounded-md h-13"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn-success w-100">Log In</button>
    </form>
  );
}

export default LoginForm;

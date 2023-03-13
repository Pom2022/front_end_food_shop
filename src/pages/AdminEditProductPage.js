import React from "react";

import { useState } from "react";

// import useClickFileInput from "../../hooks/useClickFileInput";
import * as postApi from "../apis/createProduct-api";
import { MdFastfood } from "react-icons/md";
import { TbCurrencyBaht } from "react-icons/tb";
import useLoading from "../hooks/useLoading";
import useClickFileInput from "../hooks/useClickFileInput";
import { useParams } from "react-router-dom";

export default function AdminEditProductPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const { startLoading, stopLoading } = useLoading();
  const params = useParams();

  const { file, ref, openFileInput, onChangeFileInput, onCancel } =
    useClickFileInput();

  const handleSubmitForm = async (e) => {
    startLoading();
    e.preventDefault();
    const formData = new FormData();

    if (name) {
      formData.append("name", name);
    }
    if (file) {
      formData.append("productImage", file);
    }
    if (description) {
      formData.append("description", description);
    }

    if (price) {
      formData.append("price", price);
    }

    for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    await postApi.updateProduct(formData, params.id);
    setName("");
    setDescription("");
    onCancel();

    stopLoading();
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div
        className="w-full py-2 border-b border-gray-300 flex
    item-center gap-2"
      >
        <MdFastfood className="text-xl text-gray-700" />
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="give me a title..."
          className="w-full h-full text-lg bg-transparent outline-none
     border-none placeholder:text-gray-400 text-textColor"
        />
      </div>

      <div className="position-relative" role="button" onClick={openFileInput}>
        {file ? (
          <>
            <button
              className="btn-close position-absolute"
              type="button"
              style={{ top: 6, right: 6 }}
              onClick={(e) => {
                e.stopPropagation();
                onCancel();
              }}
            ></button>
            <img
              src={URL.createObjectURL(file)}
              className="img-fluid"
              alt="post"
            />
          </>
        ) : (
          <FileButton />
        )}
      </div>

      <textarea
        className="form-control border-0 shadow-none resize-none"
        placeholder={"Product name"}
        rows="5"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="file"
        className="d-none"
        ref={ref}
        onChange={onChangeFileInput}
        // name="productImage"
      />

      <TbCurrencyBaht className="text-gray-700 text-2xl" />
      <input
        type="text"
        required
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
      />
      <div className="pt-3">
        <button className="btn btn-primary w-100 fw-bold text-3.5 h-9">
          Uploading
        </button>
      </div>
    </form>
  );
}

function FileButton() {
  return (
    <div className="position-relative" role="button">
      <div className="d-flex flex-column align-items-center mt-3 py-3 rounded-2 bg-gray-100 hover-bg-gray-200">
        <div className="text-center rounded-circle bg-gray-300 p-2 position-relative h-10 w-10 ">
          <i className="fa-regular fa-image position-absolute top-50 left-50 translate-middle" />
        </div>
        <div className="mt-1">Add Photos</div>
      </div>
    </div>
  );
}

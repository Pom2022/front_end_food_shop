// import React, { useState } from "react";
// import Loader from "../admin/Loader";
// import {
//   deleteObject,
//   getDownloadURL,
//   ref,
//   uploadBytesResumable,
// } from "firebase/storage";

// import {
//   MdFastfood,
//   MdAttachMoney,
//   MdCloudUpload,
//   MdDelete,
// } from "react-icons/md";
// import { storage } from "../../firebase.config";
// import { saveItem } from "../../utils/firebaseFunctions";

// function ContainerUpload() {
//   const [title, setTitle] = useState("");
//   const [asset, setAsset] = useState(null);
//   const [price, setPrice] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [fields, setFields] = useState(false);
//   const [msg, setMsg] = useState(null);
//   const [alertStatus, setAlertStatus] = useState("danger");

//   const uploadImage = (e) => {
//     setIsLoading(true);
//     const imageFile = e.target.files[0];
//     const storageRef = ref(storage, `Image/${Date.now()}-${imageFile.name}`);
//     const uploadTask = uploadBytesResumable(storageRef, imageFile);

//     uploadTask.on(
//       "state_change",
//       (snapshot) => {
//         const uploadProgress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       },
//       (error) => {
//         console.log(error);
//         setFields(true);
//         setMsg("Error while uploading : Try AGain");
//         setAlertStatus("danger");
//         setTimeout(() => {
//           setFields(false);
//           setIsLoading(false);
//         }, 4000);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           setAsset(downloadURL);
//           setIsLoading(false);
//           setFields(true);
//           setMsg("Image Uploaded successfully");
//           setAlertStatus("success");
//           setTimeout(() => {
//             setFields(false);
//           }, 4000);

//           console.log(downloadURL);
//         });
//       }
//     );
//   };
//   const deleteImage = () => {
//     setIsLoading(true);
//     const deleteRef = ref(storage, asset);
//     deleteObject(deleteRef).then(() => {
//       setAsset(null);
//       setIsLoading(false);
//       setFields(true);
//       setMsg("Image Uploaded successfully");
//       setAlertStatus("success");
//       setTimeout(() => {
//         setFields(false);
//       }, 4000);
//     });
//   };
//   const saveDetails = () => {
//     setIsLoading(true);

//     try {
//       if (!title || !asset || !price) {
//         setFields(true);
//         setMsg("Required fields cant be empty");
//         setAlertStatus("danger");
//         setTimeout(() => {
//           setFields(false);
//           setIsLoading(false);
//         }, 4000);
//       } else {
//         const data = {
//           id: `${Date.now()}`,
//           title: title,
//           ImageURL: asset,
//           qty: 1,
//           price: price,
//         };

//         console.log({ data });
//         saveItem(data);
//         setIsLoading(false);
//         setFields(true);
//         setMsg("Data Uploaded successfully");
//         setAlertStatus("success");
//         setTimeout(() => {
//           setFields(false);
//           clearData();
//         }, 4000);
//       }
//     } catch (error) {
//       setFields(true);
//       setMsg("Error while uploading : Try AGain");
//       setAlertStatus("danger");
//       setTimeout(() => {
//         setFields(false);
//         setIsLoading(false);
//       }, 4000);
//     }
//   };

//   const clearData = () => {
//     setTitle("");
//     setAsset(null);
//     setPrice("");
//   };

//   return (
//     <div>
//       <div
//         className="w-full py-2 border-b border-gray-300 flex
//     item-center gap-2"
//       >
//         <MdFastfood className="text-xl text-gray-700" />
//         <input
//           type="text"
//           required
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="give me a title..."
//           className="w-full h-full text-lg bg-transparent outline-none
//      border-none placeholder:text-gray-400 text-textColor"
//         />
//       </div>

//       <div
//         className="group flex justify-center items-center flex-col
//       border-2 border-dotted border-gray-300 w-full h-225 md:h-420
//       cursor-pointer rounded-lg"
//       >
//         {isLoading ? (
//           <Loader />
//         ) : (
//           <>
//             {!asset ? (
//               <>
//                 <label
//                   className="w-full h-full flex flex-col items-center
//                justify-center cursor-pointer"
//                 >
//                   <div
//                     className="w-ful h-full flex flex-col items-center
//             justify-center gap-2"
//                   >
//                     <MdCloudUpload
//                       className="text-grey-500 text-3xl
//                 hover text-gray-700"
//                     />

//                     <p className="text-gray-500 hover:text-gray-700">
//                       Click here to upload
//                     </p>
//                   </div>
//                   <input
//                     type="file"
//                     name="uploadimage"
//                     accept="image/*"
//                     onChange={uploadImage}
//                     className="w-100 h-100"
//                   />
//                 </label>
//               </>
//             ) : (
//               <>
//                 <div className="relative h-full">
//                   <img
//                     src={asset}
//                     alt="uploaded image"
//                     className="w-full h-full object-cover"
//                   />
//                   <button
//                     type="button"
//                     className="absolute bottom-3 right-3 p-3 rounded-full
//                   bg-red-500 text-xl cursor-pointer outline-none
//                   hover:shadow-md duration-500 transition-all
//                   ease-in-out"
//                     onClick={deleteImage}
//                   >
//                     <MdDelete className="text-white" />
//                   </button>
//                 </div>
//               </>
//             )}
//           </>
//         )}
//       </div>

//       <div
//         className="w-full py-2 border-b border-gray-300
//       flex items-center gap-2"
//       >
//         <MdAttachMoney className="text-gray-700 text-2xl" />
//         <input
//           type="text"
//           required
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
//         />
//       </div>

//       <div className="flex justify-content-center">
//         <div>
//           <button
//             type="button"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded-full "
//             onClick={saveDetails}
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContainerUpload;

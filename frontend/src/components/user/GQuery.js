import React, { useState } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [reason, setReason] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFileName, setImageFileName] = useState("");
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [feedbackType, setFeedbackType] = useState("application"); // Default to 'Application feedback'

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAccountNameChange = (e) => {
    setAccountName(e.target.value);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    // Extract and set the image name
    const imageName = file.name;
    setImageFileName(imageName);

    // Set isImageSelected to true
    setIsImageSelected(true);
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
    setImageFileName("");
    setIsImageSelected(false);
  };

  const handleFeedbackTypeChange = (e) => {
    setFeedbackType(e.target.value);
    if (e.target.value === "application") {
      // If "Application feedback" is selected, clear and disable "Fake Account Name"
      setAccountName("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
    console.log("Name:", name);
    console.log("Feedback Type:", feedbackType);
    console.log("Fake Account Name:", accountName);
    console.log("Reason:", reason);
    console.log("Selected Image:", selectedImage);
  };

  return (
    <div className="  m-16 mb-16 pl-20 font-poppins ">
      <div className="bg-[#b3ddff] rounded-2xl m-2 p-1  h-auto w-[900px]">
        <div className="bg-white m-4 rounded-2xl p-4 pt-2">
          <h2 className="flex justify-center m-2 font-bold text-[32px]">
            Query Arise
          </h2>
          <br />
          <div onSubmit={handleSubmit}>
            <div className="grid grid-cols-[1fr_0.3fr_4fr] m-3">
              <label className="flex items-center" htmlFor="feedbackType">
                Feedback Type
              </label>
              <p className="flex items-center">:</p>

              <div className="flex items-center">
                <label>
                  <input
                    type="radio"
                    name="feedbackType"
                    value="application"
                    checked={feedbackType === "application"}
                    onChange={handleFeedbackTypeChange}
                  />
                  Application Feedback
                </label>
                <label className="ml-3">
                  <input
                    type="radio"
                    name="feedbackType"
                    value="fakeAccount"
                    checked={feedbackType === "fakeAccount"}
                    onChange={handleFeedbackTypeChange}
                  />
                  Fake Account Feedback
                </label>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_0.3fr_4fr] m-3">
              <label className="flex items-center" htmlFor="name">
                Name:
              </label>
              <p className="flex items-center">:</p>
              <input
                className="border p-2 border-b-3 border-gray-400 rounded-lg focus:outline-gray-400"
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
              />
            </div>

            {feedbackType === "application" ? (
              <div className="grid grid-cols-[1fr_0.3fr_4fr] m-3">
                <label className="flex items-center " htmlFor="accountName">
                  Fake Account Name
                </label>
                <p className="flex items-center">:</p>
                <p className="text-gray-400 font-[16px]">
                  Fake Account Name (Disabled)
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-[1fr_0.3fr_4fr] m-3">
                <label className="flex items-center" htmlFor="accountName">
                  Fake Account Name
                </label>
                <p className="flex items-center">:</p>
                <input
                  className="border p-2 border-b-3 rounded-lg border-gray-400 focus:outline-gray-400"
                  id="accountName"
                  type="text"
                  placeholder="Enter fake account name"
                  value={accountName}
                  onChange={handleAccountNameChange}
                />
              </div>
            )}

            <div className="grid grid-cols-[1fr_0.3fr_4fr] m-3">
              <label className="flex items-center" htmlFor="reason">
                Reason About
              </label>
              <p className="flex items-center">:</p>
              <textarea
                rows="4"
                cols="8"
                id="reason"
                type="text"
                placeholder="Enter reason"
                value={reason}
                onChange={handleReasonChange}
                className="border p-2 border-b-3 rounded-lg border-gray-400 focus:outline-gray-400"
              ></textarea>
            </div>
            <div className="grid grid-cols-[1fr_0.3fr_4fr] m-3">
              <label className="flex items-center" htmlFor="image">
                Proof of Reason(Screenshot of fake user profile)
              </label>
              <p className="flex items-center">:</p>
              {isImageSelected ? (
                <div>
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt={imageFileName}
                    className="mt-2 max-w-[400px]"
                  />
                  <div className="flex items-center">
                    <a
                      href={URL.createObjectURL(selectedImage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-[16px]"
                    >
                      {imageFileName}
                    </a>
                    <button
                      className="ml-2 text-red-500 hover:text-red-700"
                      onClick={handleDeleteImage}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ) : (
                <input
                  className="border p-2 pt-5 border-b-3 rounded-lg border-gray-400 focus:outline-gray-400"
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-black   text-white font-bold py-2 px-7 ml-7 rounded-lg   "
              type="submit"
            >
              Submit
            </button>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Feedback;

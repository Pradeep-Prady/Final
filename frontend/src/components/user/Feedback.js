import React, { useState } from 'react';

function Feedback() {
  const [name, setName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [reason, setReason] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFileName, setImageFileName] = useState('');
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [feedbackType, setFeedbackType] = useState('application'); // Default to 'Application feedback'

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
    setImageFileName('');
    setIsImageSelected(false);
  };

  const handleFeedbackTypeChange = (e) => {
    setFeedbackType(e.target.value);
    if (e.target.value === 'application') {
      // If "Application feedback" is selected, clear and disable "Fake Account Name"
      setAccountName('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
    console.log('Name:', name);
    console.log('Feedback Type:', feedbackType);
    console.log('Fake Account Name:', accountName);
    console.log('Reason:', reason);
    console.log('Selected Image:', selectedImage);
  };

  return (
    <div className="items-center ">
      <div>
        <h1 className="ml-[80px] px-2 py-4 mt-3 font-poppins text-[50px] ml-center p-2">
          Query Arise
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="ml-[50px]  rounded-lg p-[20px] pb-10px border-2 w-auto shadow-md">
        <div className="grid grid-cols-1 gap-4 p-1 font-poppins ">
          <div className="mb-2">
            <label className="block text-gray-700 font-[16px] mb-2 font-bold" htmlFor="feedbackType">
              Feedback Type:
            </label>
            <div>
              <label>
                <input
                  type="radio"
                  name="feedbackType"
                  value="application"
                  checked={feedbackType === 'application'}
                  onChange={handleFeedbackTypeChange}
                />
                 Application Feedback
              </label>
              <label className="ml-3">
                <input
                  type="radio"
                  name="feedbackType"
                  value="fakeAccount"
                  checked={feedbackType === 'fakeAccount'}
                  onChange={handleFeedbackTypeChange}
                />
                 Fake Account Feedback
              </label>
            </div>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 font-[16px] mb-2 font-bold" htmlFor="name">
              Name:
            </label>
            <input
              className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px] focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          {feedbackType === 'application' ? (
            <div className="mb-2">
              <label className="block text-gray-700 font-[16px] mb-2 " htmlFor="accountName">
                Fake Account Name:
              </label>
              <p className="text-gray-400 font-[16px]">Fake Account Name (Disabled)</p>
            </div>
          ) : (
            <div className="mb-2">
              <label className="block text-gray-700 font-[16px] mb-2 font-bold" htmlFor="accountName">
                Fake Account Name:
              </label>
              <input
                className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px] focus:outline-none focus:shadow-outline"
                id="accountName"
                type="text"
                placeholder="Enter fake account name"
                value={accountName}
                onChange={handleAccountNameChange}
              />
            </div>
          )}

          <div className="mb-2">
            <label className="block text-gray-700 font-[16px] mb-2 font-bold" htmlFor="reason">
              Reason About:
            </label>
            <textarea
              rows="4"
              cols="8"
              id="reason"
              type="text"
              placeholder="Enter reason"
              value={reason}
              onChange={handleReasonChange}
              className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px] focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 font-[16px] mb-2 font-bold" htmlFor="image">
              Proof of Reason(Screenshot of fraud user profile):
            </label>
            {isImageSelected ? (
              <div>
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
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt={imageFileName}
                  className="mt-2 max-w-[400px]"
                />
              </div>
            ) : (
              <input
                className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px] focus:outline-none focus:shadow-outline"
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
            className="bg-black hover:bg-black text-white font-bold py-2 px-7 ml-7 rounded-lg  focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Feedback;

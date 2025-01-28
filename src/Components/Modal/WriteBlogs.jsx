import React, { useState } from 'react';
function WriteBlogs({ closeModal }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Handle form submission
  const handleSubmit = () => {
    // Handle the blog submission logic (you can replace this with an API call, etc.)
    console.log('Submitted:', { title, description });
    // Close the modal after submission
    closeModal();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-90 z-30">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 font-dmsans">Write a Blog</h2>
        <input
          type="text"
          placeholder="Enter Your Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded text-[20px] font-dmsans"
        />
        <textarea
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded h-40 font-inter text-[16px]"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => {
              setTitle('');
              setDescription('');
              closeModal(); // Close modal when discard is clicked
            }}
            className="bg-blue-500 text-white font-inter px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Discard
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white font-inter px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default WriteBlogs;

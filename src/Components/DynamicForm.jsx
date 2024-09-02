import { useState } from 'react';

const DynamicForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    });
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.name.trim() || formData.name.length < 3) {
      validationErrors.name = "Name should be at least 3 characters!";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 8 || !/\d/.test(formData.password)) {
      validationErrors.password = "Password should be at least 8 characters and must include a number!";
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert(`Form Submitted successfully\nName: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.password}`);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between p-6  mx-auto">
      
      <div className="flex-shrink-0 lg:w-1/2 mb-6 lg:mb-0">
        <img
          src="welcome.jpg" 
          alt="welcome image"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      
      <form 
        className='shadow-lg rounded-md w-full lg:w-1/2 p-6 bg-white'
        onSubmit={handleSubmit}
      >
        <h1 className="text-5xl text-center font-extrabold text-gray-800 pb-4">Register</h1>
        
        <div className="mb-4">
          <label className="block font-semibold text-lg mt-2">Name:</label>
          <input
            className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-5`}
            type="text"
            name="name"
            placeholder="Enter your name"
            autoComplete="off"
            onChange={handleChange}
          />
          {errors.name && <span className="text-red-600 text-sm mt-1 block">{errors.name}</span>}
        </div>

        <div className="mb-4">
          <label className="block font-semibold text-lg mt-2">Email ✉️:</label>
          <input
            className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-5`}
            type="email"
            name="email"
            placeholder="example@gmail.com"
            autoComplete="off"
            onChange={handleChange}
          />
          {errors.email && <span className="text-red-600 text-sm mt-1 block">{errors.email}</span>}
        </div>

        <div className="mb-4">
          <label className="block font-semibold text-lg mt-2">Password:</label>
          <input
            className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-5`}
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
          {errors.password && <span className="text-red-600 text-sm mt-1 block">{errors.password}</span>}
        </div>

        <div className="mb-4">
          <label className="block font-semibold text-lg mt-2">Confirm Password:</label>
          <input
            className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
              errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
            } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-5`}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
          {errors.confirmPassword && <span className="text-red-600 text-sm mt-1 block">{errors.confirmPassword}</span>}
        </div>

        <button 
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-[#60829b] hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4 md:text-xl"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;


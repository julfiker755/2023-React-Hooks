import React, { useState } from "react";

function LessonFour() {
  const [user, setUser] = useState({
    name: "Mir",
    email: "mir@gmail.com",
  });

  // console.log(user);

  const handleInput = (event) => {
    setUser((current) => {
      return { ...current, [event.target.name]: event.target.value };
    });
  };

  return (
    <div className='flex flex-col w-full items-center'>
      <div className='p-2 rounded-md shadow-2xl w-full max-w-xl mx-5 mb-10 bg-white'>
        <div className=' bg-gradient-to-tr to-purple-100 from-cyan-100 rounded-sm p-5'>
          <h1 className='text-2xl mb-5 font-bold text-gray-800'>
            Name: {user.name}
          </h1>
          <p className='text-gray-700'>Email: {user.email} </p>
        </div>
      </div>
      <div className='w-full max-w-xl bg-gradient-to-tr to-purple-100 from-cyan-100 p-2 rounded-md shadow-2xl'>
        <div className='bg-white rounded-md p-10'>
          <div className='flex justify-between items-center mb-5'>
            <label className='w-[60px]' htmlFor='name'>
              Name:
            </label>
            <input
              className='border border-cyan-400 rounded p-1 w-full ml-5 focus:outline-purple-400'
              type='text'
              name='name'
              id='name'
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div className='flex justify-between items-center'>
            <label className='w-[60px]' htmlFor='email'>
              Email:
            </label>
            <input
              className='border border-cyan-400 rounded p-1  w-full ml-5 focus:outline-purple-400'
              type='text'
              name='email'
              id='email'
              onChange={(e) => handleInput(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonFour;
// -------------------------------------
// --------------------------------------
// extra other option solostion
import React, { useState } from 'react';

function Form() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
//     empty from
    setUser({
    name: "",
    email: "",
  })
    console.log('Form submitted:', user);
    // do something with the form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>,
  <div>
//    **************************************************************************************
//    ***************************************************************************************
//     ****************************************************************************************
//    useState handle number convert vary Easy
 const handlechange=(event)=>{
        if(event.target.name === 'amount'){
            setuser((prevalue)=>({...prevalue,[event.target.name]:parseFloat(event.target.value)}))
        }else{
            setuser((prevalue)=>({...prevalue,[event.target.name]:event.target.value}))
        }
        
    }
  <div>
  );
}

'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AddColorPage = () => {
  const [name, setName] = useState('');
  const [hex_code, setHexCode] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/colors/addColor', {name: name, hex_code: hex_code})
        .then((res) => {
          console.log(res.status);
          if(res.status === 200){
            router.push("/admin/colors");
          }
    });
    } catch (error) {
      console.error('Error connecting to Python API:', error);
    }
  };

  return (
    <div className="flex flex-1 flex-col px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          افزودن رنگ جدید
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-bold leading-6 text-gray-900">
              نام رنگ
            </label>
            <input
              name="name"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 focus:ring-indigo-600"
              required
            />
          </div>
          <div>
            <label htmlFor="hex_code" className="block text-sm font-bold leading-6 text-gray-900">
              کد رنگ
            </label>
            <input
              type="text"
              name="hex_code"
              id="hex_code"
              value={hex_code}
              onChange={(e) => setHexCode(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 focus:ring-indigo-600"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              افزودن
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default AddColorPage;
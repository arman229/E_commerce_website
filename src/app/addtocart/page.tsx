'use client'
import React from 'react';
import { Circles } from 'react-loader-spinner';

const AddToCart = () => {
  return (
    <div className="flex flex-col  items-center justify-center mt-10 max-w-sm mx-auto bg-white border p-4 py-8 border-gray-200 rounded-xl shadow">
      <Circles
        height={80}
        width={80}
        color='#325ff2'
        ariaLabel="circles-loading"
        visible={true}
      />
      <div className="mt-4 text-center">
        <p className="text-gray-600">
          We are working on enhancing this component to provide more features
          and a better user experience. Thank you for your patience!
        </p>
      </div>
    </div>
  );
};

export default AddToCart;

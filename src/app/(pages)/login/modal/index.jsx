import React from 'react';
import { IoMdClose } from 'react-icons/io';

export const Modal = ({ children, isOpen, close }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-zinc-700/70 grid place-items-center z-[9999]">
        <div className="bg-orange-400 py-10 px-8 w-[95%] sm:w-3/4 max-w-[600px] rounded-md shadow-2xl">
          <div className="flex justify-end">
            <button onClick={close}>
              <IoMdClose className="text-3xl transition hover:text-gray-500" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;

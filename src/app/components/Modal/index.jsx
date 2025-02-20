import React from 'react';
import { IoMdClose } from 'react-icons/io';

export const Modal = ({ children, isOpen, close, designs, hideClose }) => {
  if (!isOpen) return null;
  return (
    isOpen && (
      <div
        className="fixed inset-0 bg-zinc-700/60 backdrop-blur-lg grid place-items-center z-[99]"
        onClick={close}
      >
        <div
          className={`py-10 px-8 w-[95%] sm:w-3/4 max-w-[900px] rounded-md shadow-2xl ${designs}`}
          /*  onClick={(e) => e.stopPropagation()} */
        >
          {!hideClose && (
            <div className="flex justify-end">
              <button onClick={close}>
                <IoMdClose className="text-3xl transition hover:text-gray-500" />
              </button>
            </div>
          )}
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;

import React from "react";

function Modal() {
  return (
    <aside className="fixed w-full h-screen top-0 left-0 z-50 bg-[rgba(0,0,0,0.9)] p-10 flex items-center justify-center">
      <article className="w-[600px] h-full"></article>
      <span className="absolute top-10 right-10 text-[16px] cursor-pointer font-bold">
        close
      </span>
    </aside>
  );
}

export default Modal;

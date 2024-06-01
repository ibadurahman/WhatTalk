import { useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

function MyProfile() {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <div className="relative h-[80px] px-4 flex justify-between items-center">
      {isOpen && (
        <div
          ref={ref}
          className="absolute bg-white shadow-md grid grid-cols-[10rem_1fr] h-[20rem] w-[30rem] z-50 bottom-5 left-5 rounded-md"
        >
          <div className="bg-gray-100"></div>
        </div>
      )}
      <div
        className="flex items-center p-4 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          src="/images/no-avatar.png"
          alt=""
          className="w-10 h-10 rounded-full border border-colorPrimary"
        />
        <div className="flex flex-col ml-4">
          <h1 className="font-bold">My Profile</h1>
        </div>
      </div>
      <button className="p-3 cursor-pointer" onClick={() => setIsOpen(true)}>
        ⚙️
      </button>
    </div>
  );
}

export default MyProfile;

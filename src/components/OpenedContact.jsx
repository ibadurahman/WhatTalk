import { useState } from "react";
import { useOpenedChatting } from "../context/OpenedChattingContext";
import { useOutsideClick } from "../hooks/useOutsideClick";

function OpenedContact() {
  const [isOpen, setIsOpen] = useState(false);

  const { openedChatting } = useOpenedChatting();
  if (!openedChatting) return;

  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="relative flex items-center gap-4 cursor-pointer"
    >
      {isOpen && (
        <div
          ref={ref}
          className="absolute bg-white shadow-md grid grid-cols-[10rem_1fr] h-[20rem] w-[30rem] z-50 top-0 left-0 rounded-md"
        >
          <div className="bg-gray-100"></div>
        </div>
      )}
      <img
        src={openedChatting.profileImg}
        alt=""
        className="w-10 h-10 border border-colorPrimary rounded-full  mt-2"
      />
      <h1 className="text-xl font-bold">{openedChatting.name}</h1>
    </div>
  );
}

export default OpenedContact;

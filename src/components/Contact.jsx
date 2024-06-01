import { useOpenedChatting } from "../context/OpenedChattingContext";

function Contact({ contact }) {
  const { id, profileImg, name, message, isRead, sentOn } = contact;
  const { openedChatting, openChatting, resetOpenedChatting } =
    useOpenedChatting();

  function handleOpenChatting() {
    if (openedChatting?.id === id) {
      resetOpenedChatting();
      return;
    }
    openChatting(contact);
  }

  return (
    <li
      onClick={handleOpenChatting}
      className={`cursor-pointer flex gap-3 h-[75px] ${
        openedChatting?.id === id ? "bg-colorPrimary" : "bg-colorSecondary"
      } rounded-md py-2 px-3`}
    >
      <img
        src={profileImg}
        alt=""
        className="w-12 h-12 border border-colorPrimary rounded-full my-auto"
      />
      <div className="flex flex-grow justify-between py-1">
        <div className="flex flex-col justify-between">
          <h2 className="font-bold">{name}</h2>
          <p className="text-colorFontThin">
            {message.length > 20 ? `${message.slice(0, 20)}...` : message}
          </p>
        </div>
        <div className="flex items-end">
          <span className="text-colorFontThin text-sm">20:00</span>
        </div>
      </div>
    </li>
  );
}

export default Contact;

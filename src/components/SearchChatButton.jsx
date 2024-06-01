import { useSearchChat } from "../context/SearchChatContext";

function SearchChatButton() {
  const { toggleOpen } = useSearchChat();

  return (
    <div className="flex">
      <button className="flex-grow px-3" onClick={toggleOpen}>
        🔍
      </button>
    </div>
  );
}

export default SearchChatButton;

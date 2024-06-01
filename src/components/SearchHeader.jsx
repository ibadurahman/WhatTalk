import { useSearchChat } from "../context/SearchChatContext";

function SearchHeader() {
  const { toggleOpen, searchQuery, setSearchQuery } = useSearchChat();

  function handleClose() {
    setSearchQuery("");
    toggleOpen();
  }

  return (
    <div className="flex gap-3 h-[50px] w-[350px] bg-gray-200 p-2">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full h-full px-4 py-2 rounded-md focus:outline-blue-400"
      />
      <div className="flex h-full gap-2 items-center">
        <button className="block px-2 py-1 hover:bg-gray-300">&uarr;</button>
        <button className="block px-2 py-1 hover:bg-gray-300">&darr;</button>
        <button
          className="block px-2 py-1 hover:bg-gray-300"
          onClick={handleClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default SearchHeader;

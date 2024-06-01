import { createContext, useContext, useState } from "react";

const SearchChatContext = createContext();

function SearchChatProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  function toggleOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <SearchChatContext.Provider
      value={{ isOpen, toggleOpen, searchQuery, setSearchQuery }}
    >
      {children}
    </SearchChatContext.Provider>
  );
}

function useSearchChat() {
  const context = useContext(SearchChatContext);

  if (context === undefined) {
    throw new Error("useSearchChat must be used within a SearchChatProvider");
  }

  return context;
}

export { SearchChatProvider, useSearchChat };

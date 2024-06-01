import { createContext, useContext, useState } from "react";

const OpenedChattingContext = createContext();

function OpenedChattingProvider({ children }) {
  const [openedChatting, setOpenedChatting] = useState(null);

  function openChatting(contact) {
    setOpenedChatting(contact);
  }

  function resetOpenedChatting() {
    setOpenedChatting(null);
  }

  return (
    <OpenedChattingContext.Provider
      value={{ openedChatting, openChatting, resetOpenedChatting }}
    >
      {children}
    </OpenedChattingContext.Provider>
  );
}

function useOpenedChatting() {
  const context = useContext(OpenedChattingContext);

  if (context === undefined) {
    throw new Error(
      "useOpenedChatting must be used within a OpenedChattingProvider"
    );
  }

  return context;
}

export { OpenedChattingProvider, useOpenedChatting };

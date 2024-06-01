import { useOpenedChatting } from "../context/OpenedChattingContext";
import { SearchChatProvider } from "../context/SearchChatContext";
import ChatInput from "./ChatInput";
import Header from "./Header";
import MainChat from "./MainChat";

function MainContent() {
  const { openedChatting } = useOpenedChatting();

  return (
    <div className="bg-white grid grid-rows-[80px_1fr_100px]">
      {openedChatting ? (
        <>
          <SearchChatProvider>
            <Header />
            <MainChat />
          </SearchChatProvider>
          <ChatInput />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold text-gray-400">WhatTalk</h1>
          <p className="text-gray-500">Select a chat to start messaging</p>
        </div>
      )}
    </div>
  );
}

export default MainContent;

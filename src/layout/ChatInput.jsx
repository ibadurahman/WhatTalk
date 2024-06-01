function ChatInput() {
  return (
    <div className="flex items-center gap-3 border-t border-colorSecondary px-3 py-2">
      <textarea
        className="focus:outline-blue-400 w-full px-4 py-2 border border-colorPrimary resize-none"
        placeholder="Type a message"
      ></textarea>
      <button className="w-[100px] mt-2 bg-blue-600 hover:bg-blue-400 transition-colors rounded-md text-white py-2">
        Send
      </button>
    </div>
  );
}

export default ChatInput;

function ChatText({ chatData }) {
  const sessionId = 1;

  const { messageFrom, messageTo, message, sentOn } = chatData;

  return messageFrom === sessionId ? (
    <li className="text-end">
      <div className="inline-block text-start max-w-[80%] lg:max-w-lg bg-colorPrimary px-3 py-2 rounded-sm shadow-md">
        <p className="mb-3">{message}</p>
        <p className="text-end text-sm text-colorFontThin">
          {new Date(sentOn).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </li>
  ) : (
    <li className="my-3">
      <div className="inline-block max-w-[80%] lg:max-w-lg bg-colorSecondary px-3 py-2 rounded-sm shadow-md">
        <p className="mb-3">{message}</p>
        <p className="text-end text-sm text-colorFontThin">
          {new Date(sentOn).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </li>
  );
}

export default ChatText;

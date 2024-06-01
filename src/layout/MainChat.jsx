import ChatText from "../components/ChatText";
import SearchHeader from "../components/SearchHeader";
import { useSearchChat } from "../context/SearchChatContext";

const chattingDatas = [
  {
    id: 1,
    messageFrom: 2,
    messageTo: 1,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusamus delectus provident dignissimos nesciunt voluptate voluptatibus necessitatibus nihil doloremque totam blanditiis exercitationem, dolorum, ratione laborum perspiciatis consequuntur at quas dolores?",
    status: "sent",
    sentOn: "2021-09-01T12:00:00",
  },
  {
    id: 1,
    messageFrom: 1,
    messageTo: 2,
    message: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "sent",
    sentOn: "2021-09-01T12:00:00",
  },
];

function MainChat() {
  const { isOpen: isSearchOpen } = useSearchChat();

  return (
    <div className="relative flex flex-col py-3 px-3 justify-end overflow-y-auto">
      {isSearchOpen && (
        <div className="absolute top-0 right-2 transition-all">
          <SearchHeader />
        </div>
      )}
      <ul>
        {chattingDatas.map((chatData) => (
          <ChatText key={chatData.id} chatData={chatData} />
        ))}
      </ul>
    </div>
  );
}

export default MainChat;

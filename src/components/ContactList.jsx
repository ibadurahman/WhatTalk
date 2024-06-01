import { useOpenedChatting } from "../context/OpenedChattingContext";
import Contact from "./Contact";

const contactList = [
  {
    id: 1,
    name: "John Doe",
    profileImg: "https://xsgames.co/randomusers/avatar.php?g=pixel",
    message: "Hello, how are you?",
    isRead: false,
    sentOn: "2021-09-01T12:00:00",
  },
  {
    id: 2,
    name: "Jane Doe",
    profileImg: "https://xsgames.co/randomusers/avatar.php?g=pixel",
    message: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
    isRead: true,
    sentOn: "2021-09-01T12:00:00",
  },
];

function ContactList() {
  const { openChatting } = useOpenedChatting();

  return (
    <ul className="flex flex-col gap-1 px-1 overflow-auto">
      {contactList.map((contact) => (
        <Contact key={contact.id} contact={contact} onOpen={openChatting} />
      ))}
    </ul>
  );
}

export default ContactList;

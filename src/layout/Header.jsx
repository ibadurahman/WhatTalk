import OpenedContact from "../components/OpenedContact";
import SearchChatButton from "../components/SearchChatButton";

function Header() {
  return (
    <div className="border-b border-colorSecondary flex justify-between py-4 px-4 shadow-sm">
      <OpenedContact />
      <SearchChatButton />
    </div>
  );
}

export default Header;

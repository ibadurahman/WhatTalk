import ContactList from "../components/ContactList";
import MyProfile from "../components/MyProfile";
import SidebarHeader from "../components/SidebarHeader";

function Sidebar() {
  return (
    <div className="h-screen bg-white border-r border-colorPrimaryStroke grid grid-rows-[max-content_1fr_max-content] ">
      <SidebarHeader />
      <ContactList />
      <MyProfile />
    </div>
  );
}

export default Sidebar;

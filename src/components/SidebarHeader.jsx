function SidebarHeader() {
  return (
    <div className="flex flex-col pl-3 pt-2 mb-5">
      <h1 className="text-2xl font-bold mb-2">WhatTalk</h1>
      <input
        placeholder="Find your friend"
        className="border focus:outline-blue-400 border-colorSecondary rounded-full text-sm py-2 px-6 w-11/12 mx-auto"
      />
    </div>
  );
}

export default SidebarHeader;

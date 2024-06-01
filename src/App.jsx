import { OpenedChattingProvider } from "./context/OpenedChattingContext";
import MainContent from "./layout/MainContent";
import Sidebar from "./layout/Sidebar";

function App() {
  return (
    <div className="grid grid-cols-[200px_1fr] sm:grid-cols-[250px_1fr] md:grid-cols-[300px_1fr]">
      <OpenedChattingProvider>
        <Sidebar />
        <MainContent />
      </OpenedChattingProvider>
    </div>
  );
}

export default App;

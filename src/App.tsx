import { useSelector } from "react-redux";
import ThemeToggle from "./components/ThemeToggle";
import Paragraph from "./components/ui/paragraph/Paragraph";

function App() {
  const { theme } = useSelector((store) => store.app);

  return (
    <div className={`${theme}`}>
      <div className="bg-gray-200 dark:bg-slate-900 w-screen h-screen">
        {/* An absolute positioned element for development */}
        <ThemeToggle />
      </div>
    </div>
  );
}

export default App;

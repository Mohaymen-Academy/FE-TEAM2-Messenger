import { useState } from "react";
// import IconButton from "./components/ui/iconButton/IconButton";
import IconButton from "@/ui/iconButton/IconButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="dark">
      <p className="bg-slate-600 dark:bg-red-300">
        <IconButton />
      </p>
    </div>
  );
}

export default App;

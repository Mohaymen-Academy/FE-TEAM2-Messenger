import { useState } from "react";
// import IconButton from "./components/ui/iconButton/IconButton";
import IconButton from "@/ui/iconButton/IconButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <p className="bg-slate-600">
      <IconButton />
    </p>
  );
}

export default App;

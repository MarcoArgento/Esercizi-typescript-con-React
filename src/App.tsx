import { useState } from "react";
import "./App.css";

function App() {
  //let state: any = "START";
  let [value, setValue] = useState<any>("START");
  return (
    <div>
      <button
        onClick={() => {
          setValue((value = Math.random()));
        }}
      >
        {value}
      </button>
    </div>
  );
}

export default App;

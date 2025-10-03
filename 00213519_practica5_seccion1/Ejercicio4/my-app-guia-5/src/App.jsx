// App.jsx
import React from "react";
import ScientistCard from "./ScientistCard";
import { scientists } from "./utils";

function App() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      {scientists.map((sci) => (
        <ScientistCard
          key={sci.id}
          name={sci.name}
          image={sci.image}
          profession={sci.profession}
          awards={sci.awards}
          discoveries={sci.discoveries}
        />
      ))}
    </div>
  );
}

export default App;

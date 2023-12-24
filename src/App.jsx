import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adpot Me</h1>
    <Pet name="spot" animal="dog" breed="shepard" />
    <Pet name="DOG" animal="dog" breed="mix" />
    <Pet name="tiger" animal="cat" breed="Simese" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

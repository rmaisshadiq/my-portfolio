import gsap from "gsap";

import { Dock, Navbar, Welcome } from "#components";
import { Draggable } from "gsap/Draggable";
import { Safari, Terminal, Resume } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
    </main>
  );
};

export default App;

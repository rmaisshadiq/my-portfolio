import gsap from "gsap";

import { Dock, Home, Navbar, Photos, Welcome } from "#components";
import { Draggable } from "gsap/Draggable";
import { Analytics } from "@vercel/analytics/react";
import {
  Safari,
  Terminal,
  Resume,
  Finder,
  Text,
  Image,
  Contact,
} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Analytics />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
      <Photos />
    </main>
  );
};

export default App;

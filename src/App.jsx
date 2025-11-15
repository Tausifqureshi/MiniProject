import { version } from "react";
import RouterEax from "./routerExample/RouterEax";
import SearchInput from "./SearchInput/SearchInput";
import According from "./According/According";
import Prectice from "./According/Prectice";
import SeeMoreAccording from "./AccordingSeemore/SeeMoreAccording";
import SeeText from "./AccordingSeemore/SeeText";
import HoveringDrop from "./Dropdown/HoveringDrop"
import Dropdown from "./Dropdown/Dropdown";
import DropdownSelection from "./Dropdown/DropdownSelection";

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold text-red-900 bg-yellow-300 p-5 ">
        App {version}
      </h1> */}
      <h1>Mini Project </h1>
      {/* <RouterEax /> */}

      <Dropdown />
      {/* <DropdownSelection /> */}
      {/* <HoveringDrop /> */}

      {/* <SearchInput/> */}

      {/* <According/> */}

      {/* <SeeMoreAccording /> */}
      {/* <SeeText/> */}
      {/* <Prectice /> */}
    </>
  );
}

export default App;
